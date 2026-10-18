export default function LeadForm() {
    const fieldClassName =
        "mt-2 min-h-12 w-full rounded-none border-0 border-b border-current bg-transparent px-0 py-3 text-base placeholder:text-foreground/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground";

    const interests = [
        { value: "subscription", label: "Подписка" },
        { value: "order", label: "Разовый заказ" },
        { value: "question", label: "Есть вопрос" },
    ];

    return (
        <form className="grid gap-8">
            <fieldset>
                <legend className="text-sm">
                    Что вас интересует
                </legend>

                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {interests.map((interest) => (
                        <label key={interest.value} className="relative cursor-pointer">
                            <input type="radio" name="interest" value={interest.value} defaultChecked={interest.value === "subscription"} required className="peer sr-only" />

                            <span className="flex min-h-12 items-center justify-center border border-current px-3 py-3 text-sm transition-colors duration-200 peer-checked:bg-foreground peer-checked:text-background peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-foreground motion-reduce:transition-none">
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

                    <input id="lead-name" name="name" type="text" autoComplete="name" placeholder="Ваше имя" maxLength={100} required className={fieldClassName} />
                </div>

                <div>
                    <label htmlFor="lead-phone" className="text-sm">
                        Телефон
                    </label>

                    <input id="lead-phone" name="phone" type="tel" autoComplete="tel" placeholder="+375 XX XXX-XX-XX" aria-describedby="phone-hint" required className={fieldClassName} />

                </div>
            </div>

            <div>
                <label htmlFor="lead-comment" className="text-sm">
                    Комментарий — необязательно
                </label>

                <textarea id="lead-comment" name="comment" rows={3} maxLength={2000} placeholder="Какой кофе любите? Или что хотите спросить?" className={`${fieldClassName} resize-y`} />
            </div>

            <div className="border-t border-current pt-6">
                <button type="submit" disabled className="inline-flex min-h-12 w-full items-center justify-between gap-8 bg-foreground px-6 py-3 text-base font-medium text-background disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
                    Оставить заявку
                    <span aria-hidden="true">↗</span>
                </button>

                <p className="mt-3 text-sm leading-relaxed">
                    Отправка пока не подключена.
                </p>
            </div>
        </form>
    );
}