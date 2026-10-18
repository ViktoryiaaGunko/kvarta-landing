export default function LeadForm() {
    const fieldClassName =
        "mt-2 min-h-12 w-full rounded-none border border-current bg-transparent px-4 py-3 text-base placeholder:text-foreground/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground";

    return (
        <form className="grid gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
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

                    <input id="lead-phone" name="phone" type="tel" autoComplete="tel" placeholder="+375 29 123-45-67" aria-describedby="phone-hint" required className={fieldClassName} />

                    <p id="phone-hint" className="mt-2 text-sm leading-relaxed">
                        Белорусский номер с кодом +375.
                    </p>
                </div>
            </div>

            <div>
                <label htmlFor="lead-interest" className="text-sm">
                    Что вас интересует
                </label>

                <select id="lead-interest" name="interest" defaultValue="subscription" className={fieldClassName}>
                    <option value="subscription">Подписка на кофе</option>
                    <option value="order">Разовый заказ</option>
                    <option value="question">Есть вопрос</option>
                </select>
            </div>

            <div>
                <label htmlFor="lead-comment" className="text-sm">
                    Комментарий —