import { sql } from "@/lib/db";

export default async function DbTestPage() {
    const result = await sql`SELECT NOW() AS now`;

    const dbTime = new Date(result[0].now).toLocaleString("ru-RU");

    return (
        <main style={{ padding: 40 }}>
            <h1>База подключена</h1>
            <p>Текущее время в базе: {dbTime}</p>
        </main>
    );
}