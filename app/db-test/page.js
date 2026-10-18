import { Suspense } from "react";
import { sql } from "@/lib/db";

async function DbTime() {
    const result = await sql`SELECT NOW() AS now`;
    const dbTime = new Date(result[0].now).toLocaleString("ru-RU");

    return <p>Текущее время в базе: {dbTime}</p>;
}

export default function DbTestPage() {
    return (
        <main style={{ padding: 40 }}>
            <h1>База подключена</h1>
            <Suspense fallback={<p>Загрузка…</p>}>
                <DbTime />
            </Suspense>
        </main>
    );
}