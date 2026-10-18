"use client";

import { useState } from "react";

export default function LeadForm() {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [message, setMessage] = useState("");
    const [phoneError, setPhoneError] = useState("");

    const fieldClassName =
        "mt-2 min-h-12 w-full rounded-none border-0 border-b border-current bg-transparent px-0 py-3 " +
        "text-base placeholder:text-foreground/50 focus-visible:outline-2 focus-visible:outline-offset-4 " +
        "focus-visible:outline-foreground";

    const interests = [
        { value: "subscription", label: "Подписка" },
        { value: "order", label: "Разовый заказ" },
        { value: "question", label: "Есть вопрос" },
    ];

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const data = new FormData(form);
        const utm = new URLSearchParams(window.location.search);

        setStatus("sending");
        setPhoneError("");

        try {
            const response = await fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: data.get("name"),
                    phone: data.get("phone"),
                    interest: data.get("interest"),
                    comment: data.get("comment"),
                    page_url: window.location.href,
                    utm_source: utm.get("utm_source"),
                    utm_medium: utm.get("utm_medium"),
                    utm_campaign: utm.get("utm_campaign"),
                    utm_content: utm.get("utm_content"),
                    utm_term: utm.get("utm_term"),
                }),
            });

            const result = await response.json();

            if (!response.ok || !result.ok) {
                setStatus("error");
                setPhoneError(result.errors?.phone || "");
                setMessage(
                    result.message ||
                    (result.errors && !result.errors.phone
                        ? "Проверьте поля формы и попробуйте ещё раз."
                        : "")
                );
                return;
            }

            setStatus("success");
            setMessage(result.message);
            form.reset();
        } catch {
            setStatus("error");
            setMessage("Нет связи с сервером. Попробуйте ещё раз.");
        }
    }

    return (
        <form className="grid gap-8" onSubmit={handleSubmit}>
            <fieldset>
                <legend className="text-sm">
                    Что вас интересует
                </legend>

                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {interests.map((interest) => (
                        <label key={interest.value} className="relative cursor-pointer">
                            <input type="radio" name="interest" value={interest.value} defaultChecked={interest.value === "subscription"}
                                   required className="peer sr-only" />

                            <span className="flex min-h-12 items-center justify-center border border-current
                            px-3 py-3 text-sm transition-colors duration-200 peer-checked:bg-foreground
                            peer-checked:text-background peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4
                            peer-focus-visible:outline-foreground motion-reduce:transition-none">
                                {interest.label}
                            </span>
                        </label>
                    ))}
                </div>
            </fieldset>

            <div className="grid gap-8 sm:grid-cols-2">
                <div>
                    <label htmlFor="lead-name" className="text-sm">
                        Как вас зовут
                    </label>

                    <input id="lead-name" name="name" type="text" autoComplete="name" placeholder="Ваше имя"
                           maxLength={100} required className={fieldClassName} />
                </div>

                <div>
                    <label htmlFor="lead-phone" className="text-sm">
                        Телефон
                    </label>

                    <input id="lead-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+375 XX XXX-XX-XX"
                           aria-describedby="phone-hint" maxLength={20} required className={fieldClassName} />
                    {phoneError && (
                        <p id="phone-hint" className="mt-2 text-sm text-red-600">
                            {phoneError}
                        </p>
                    )}
                </div>
            </div>

            <div>
                <label htmlFor="lead-comment" className="text-sm">
                    Комментарий — необязательно
                </label>

                <textarea id="lead-comment" name="comment" rows={3} maxLength={2000} placeholder="Какой кофе любите? Или что хотите спросить?" className={`${fieldClassName} resize-y`} />
            </div>

            <div>
                <button type="submit" disabled={status === "sending"} className="group inline-flex min-h-12 w-full items-center justify-between
                    gap-8 bg-foreground px-6 py-3 text-base font-medium text-background transition duration-300 ease-out
                    hover:bg-[#702A47] motion-safe:hover:scale-[1.02] active:bg-[#401326] disabled:cursor-not-allowed
                    disabled:opacity-60 disabled:hover:bg-foreground disabled:motion-safe:hover:scale-100
                    focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground
                    motion-reduce:transition-none sm:w-auto">
                    {status === "sending" ? "Отправляем..." : "Оставить заявку"}
                    <span aria-hidden="true" className="inline-block transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-1
    motion-reduce:transition-none">
        ↗
    </span>
                </button>

                {message && (
                    <p className="mt-3 text-sm leading-relaxed">
                        {message}
                    </p>
                )}
            </div>
        </form>
    );
}