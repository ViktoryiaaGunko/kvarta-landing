import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { validateLead } from "@/app/lead-validation";

export async function POST(request) {
    try {
        const body = await request.json();
        const validation = validateLead(body);

        if (!validation.success) {
            return NextResponse.json(
                { ok: false, errors: validation.errors },
                { status: 400 }
            );
        }

        const { name, phone, interest, comment } = validation.data;

        const url = new URL(request.url);
        const searchParams = url.searchParams;

        const utm = {
            utm_source: searchParams.get("utm_source") || body.utm_source || null,
            utm_medium: searchParams.get("utm_medium") || body.utm_medium || null,
            utm_campaign: searchParams.get("utm_campaign") || body.utm_campaign || null,
            utm_content: searchParams.get("utm_content") || body.utm_content || null,
            utm_term: searchParams.get("utm_term") || body.utm_term || null,
            page_url: body.page_url || url.origin,
        };

        const recent = await sql`
      SELECT id
      FROM leads
      WHERE phone = ${phone}
        AND created_at > NOW() - INTERVAL '10 minutes'
      LIMIT 1
    `;

        if (recent.length > 0) {
            return NextResponse.json(
                {
                    ok: false,
                    message:
                        "Мы уже получили заявку с этого номера. Если нужно что-то изменить, позвоните нам или напишите в комментариях к следующей заявке через 10 минут.",
                },
                { status: 429 }
            );
        }

        const inserted = await sql`
      INSERT INTO leads (
        name, phone, interest, comment,
        utm_source, utm_medium, utm_campaign, utm_content, utm_term, page_url
      )
      VALUES (
        ${name}, ${phone}, ${interest}, ${comment},
        ${utm.utm_source}, ${utm.utm_medium}, ${utm.utm_campaign},
        ${utm.utm_content}, ${utm.utm_term}, ${utm.page_url}
      )
      RETURNING id
    `;

        return NextResponse.json({
            ok: true,
            id: inserted[0].id,
            message: "Заявка отправлена. Мы перезвоним вам.",
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                ok: false,
                message:
                    "Не удалось отправить заявку. Попробуйте ещё раз через минуту или напишите нам напрямую.",
            },
            { status: 500 }
        );
    }
}