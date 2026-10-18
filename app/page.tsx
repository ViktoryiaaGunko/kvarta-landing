const products = [
    {
        id: "ethiopia",
        name: "Эфиопия Иргачеффе",
        description: "Цветочный, бергамот · светлая обжарка",
        size: "250 г",
        price: 32,
    },
    {
        id: "colombia",
        name: "Колумбия Уила",
        description: "Карамель, красное яблоко",
        size: "250 г",
        price: 29,
    },
    {
        id: "brazil",
        name: "Бразилия Серрадо",
        description: "Орех, шоколад · под эспрессо",
        size: "250 г",
        price: 26,
    },
    {
        id: "drips",
        name: "Дрип-пакеты, ассорти",
        description: "10 штук",
        size: "",
        price: 18,
    },
];

export default function Home() {
    return (
        <main className="px-6 py-8 md:px-16 md:py-10">
            <p className="text-xl font-semibold tracking-tight">
                Кварта · Минск
            </p>

            <section className="mx-auto grid max-w-6xl gap-12 py-20 md:py-28 lg:grid-cols-[1.4fr_1fr] lg:items-center">
                <div>
                    <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
                        Маленькая мастерская
                        <br />
                        Свежий кофе
                    </h1>

                    <div className="mt-8 max-w-xl space-y-4 text-base leading-relaxed md:text-lg">
                        <p>
                            Мы — Аня и Дмитрий. С 2019 года обжариваем свой кофе —
                            небольшими партиями по 5 кг.
                        </p>

                        <p>
                            Обжариваем по четвергам, развозим по Минску по пятницам.
                            Чтобы зерно попадало к вам на 1–3 день после обжарки.
                        </p>
                    </div>
                </div>

                <div className="border-t border-current pt-6">
                    <p className="text-sm uppercase tracking-[0.15em]">
                        Ритм нашей мастерской
                    </p>

                    <div className="mt-6 border-t border-current pt-6 pb-4">
                        <p className="text-4xl font-semibold tracking-tight md:text-5xl">ЧТ</p>
                        <p className="mt-2 text-lg">Обжариваем · партиями по 5 кг</p>
                    </div>

                    <div className="pt-4 border-t border-current">
                        <p className="text-4xl font-semibold tracking-tight md:text-5xl">ПТ</p>
                        <p className="mt-2 text-lg">Развозим по Минску</p>
                    </div>
                </div>

                <a
                    href="#coffee"
                    className="group mt-8 inline-flex min-h-12 w-full items-center justify-center gap-6 bg-foreground px-7 py-3 text-base font-medium text-background transition duration-300 ease-out hover:bg-[#702A47] motion-safe:hover:scale-[1.02] active:bg-[#401326] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground motion-reduce:transition-none lg:w-[calc(100%/1.4)]"
                >
                    Выбрать кофе
                    <span
                        aria-hidden="true"
                        className="inline-block transition-transform duration-300 ease-out motion-safe:group-hover:translate-y-1 motion-reduce:transition-none"
                    >
                        ↓
                    </span>
                </a>
            </section>

            <section
                id="coffee"
                className="mx-auto max-w-6xl scroll-mt-8 border-t border-current py-12 md:py-16"
            >
                <p className="text-sm uppercase tracking-[0.15em]">
                    Зерно и дрипы
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                    Что обжариваем
                </h2>

                <div className="mt-10">
                    {products.map((product) => (
                        <article
                            key={product.id}
                            className="grid grid-cols-[1fr_auto] items-start gap-4 border-t border-current py-6 md:py-8"
                        >
                            <div>
                                <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                                    {product.name}
                                </h3>

                                <p className="mt-2 text-sm leading-relaxed md:text-base">
                                    {product.description}
                                </p>

                                {product.size && (
                                    <p className="mt-2 text-sm">
                                        {product.size}
                                    </p>
                                )}
                            </div>

                            <p className="whitespace-nowrap text-xl font-semibold md:text-2xl">
                                {product.price} BYN
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            <section id="subscription"
                className="mx-auto max-w-6xl border-t border-current py-12 md:py-16"
            >
                <p className="text-sm uppercase tracking-[0.15em]">
                    Кофе по подписке
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                    Чтобы кофе дома был всегда
                </h2>

                <div className="mt-10 grid gap-6 border-t border-current py-6 md:grid-cols-2 md:items-end md:py-8">
                    <p className="max-w-lg text-base leading-relaxed md:text-lg">
                        Две пачки по 250 г раз в месяц.
                        Доставка по Минску — бесплатно.
                    </p>

                    <p className="text-3xl font-semibold tracking-tight md:justify-self-end md:text-4xl">
                        54 BYN
                        <span className="ml-2 text-base font-normal tracking-normal">
                            / месяц
                        </span>
                    </p>
                </div>
            </section>

            <section
                id="delivery"
                className="mx-auto max-w-6xl border-t border-current py-12 md:py-16"
            >
                <p className="text-sm uppercase tracking-[0.15em]">
                    Доставка и самовывоз
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                    Привезём или увидимся в мастерской
                </h2>

                <div className="mt-10 grid gap-10 border-t border-current pt-6 md:grid-cols-2 md:gap-16 md:pt-8">
                    <div>
                        <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                            По Минску — в пятницу
                        </h3>

                        <p className="mt-4 max-w-md text-base leading-relaxed md:text-lg">
                            В четверг обжариваем, в пятницу развозим.
                            От 50 BYN доставка бесплатная.
                        </p>

                        <p className="mt-3 max-w-md text-sm leading-relaxed md:text-base">
                            Оставьте заявку — свяжемся и договоримся
                            о доставке.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                            Забрать у нас
                        </h3>

                        <p className="mt-4 text-base leading-relaxed md:text-lg">
                            Минск, ул. Короля, 9
                        </p>

                        <dl className="mt-4 grid max-w-xs grid-cols-[1fr_auto] gap-x-8 gap-y-2 text-sm md:text-base">
                            <dt>Понедельник — пятница</dt>
                            <dd>8:00–20:00</dd>

                            <dt>Суббота — воскресенье</dt>
                            <dd>10:00–18:00</dd>
                        </dl>
                    </div>
                </div>
            </section>
        </main>
    );
}