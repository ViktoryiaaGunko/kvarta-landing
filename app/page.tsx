import LeadForm from "./LeadForm";
import Image from "next/image";

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

            <section className="mx-auto grid max-w-6xl gap-12 py-20 md:py-28 lg:grid-cols-[1.4fr_1fr] lg:items-start">                <div>
                    <h1 className="animate-fade-up max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
                        Маленькая мастерская
                        <br />
                        Свежий кофе
                    </h1>

                    <div className="animate-fade-up-slow mt-8 max-w-xl space-y-4 text-base leading-relaxed md:text-lg">
                        <p>
                            Мы — Аня и Дмитрий. С 2019 года обжариваем свой кофе —
                            небольшими партиями по 5 кг.
                        </p>

                        <p>
                            Обжариваем по четвергам, развозим по Минску по пятницам.
                            Чтобы зерно попадало к вам на 1–3 день после обжарки.
                        </p>
                    </div>

                <a href="#coffee" className="animate-fade-up-slow group mt-8 inline-flex min-h-12 w-full items-center justify-center gap-6 bg-foreground
                px-7 py-3 text-base font text-background transition duration-300 ease-out hover:bg-[#702A47] motion-safe:hover:scale-[1.02]
                active:bg-[#401326] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground motion-reduce:transition-none
                lg:w-[calc(100%/1.4)]">
                    Выбрать кофе

                    <span aria-hidden="true" className="inline-block transition-transform duration-300 ease-out motion-safe:group-hover:translate-y-1
                    motion-reduce:transition-none">
                        ↓
                    </span>
                </a>
                </div>

                <div className="animate-fade-up-slow border-t border-current pt-6">
                    <Image src="/hero.jpg" alt="Свежеобжаренные кофейные зёрна" width={1600} height={1200} priority className="mb-6 aspect-[4/3] w-full object-cover" />                    <p className="eyebrow text-sm uppercase tracking-[0.15em]">
                        Ритм нашей мастерской
                    </p>

                    <div className="mt-6 border-t border-current pt-6 pb-4">
                        <p className="text-4xl font-semibold tracking-tight md:text-5xl">
                            ЧТ
                        </p>

                        <p className="mt-2 text-lg">
                            Обжариваем · партиями по 5 кг
                        </p>
                    </div>

                    <div className="pt-4 border-t border-current">
                        <p className="text-4xl font-semibold tracking-tight md:text-5xl">
                            ПТ
                        </p>

                        <p className="mt-2 text-lg">
                            Развозим по Минску
                        </p>
                    </div>
                </div>
            </section>

            <section id="coffee" className="mx-auto max-w-6xl scroll-mt-8 border-t border-current py-12 md:py-16">
                <p className="eyebrow text-sm uppercase tracking-[0.15em]">
                    Зерно и дрипы
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                    Что обжариваем
                </h2>

                <div className="mt-10">
                    {products.map((product) => (
                        <article key={product.id} className="grid grid-cols-[1fr_auto] items-start gap-4 border-t border-current py-6 md:py-8">
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

            <section id="subscription" className="mx-auto max-w-6xl border-t border-current py-12 md:py-16">
                <p className="eyebrow text-sm uppercase tracking-[0.15em]">
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

            <section id="delivery" className="mx-auto max-w-6xl border-t border-current py-12 md:py-16">
                <p className="eyebrow text-sm uppercase tracking-[0.15em]">
                    Доставка и самовывоз
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                    В пятницу — к вам
                    <br />
                    Или заходите к нам
                </h2>

                <div className="mt-10 grid gap-8 border-t border-current pt-6 md:grid-cols-[1.15fr_1fr] md:gap-12 md:pt-8">
                    <div className="flex flex-col bg-foreground p-6 text-background md:p-8">
                        <p className="eyebrow text-sm uppercase tracking-[0.15em]">
                            Доставка по Минску
                        </p>

                        <p className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
                            ПТ
                        </p>

                        <p className="mt-4 text-base leading-relaxed md:text-lg">
                            Вчера обжарили — сегодня привезли.
                        </p>

                        <div className="mt-8 border-t border-current pt-4">
                            <p className="text-base leading-relaxed md:text-lg">
                                От 50 BYN — доставка бесплатно.
                            </p>

                            <p className="mt-2 text-sm leading-relaxed md:text-base">
                                Время согласуем, когда перезвоним
                                по вашей заявке.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col py-6 md:py-8">
                        <p className="eyebrow text-sm uppercase tracking-[0.15em]">
                            Самовывоз из мастерской
                        </p>

                        <h3 className="mt-6 text-xl font-semibold tracking-tight md:text-2xl">
                            Короля 9, Минск
                        </h3>

                        <p className="mt-5 max-w-sm text-base leading-relaxed md:text-lg">
                            Если удобнее забрать кофе самим —
                            заходите в часы работы.
                        </p>

                        <dl className="mt-8">
                            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-current py-4">
                                <dt className="text-sm md:text-base">
                                    Понедельник — пятница
                                </dt>

                                <dd className="whitespace-nowrap text-lg font-semibold tabular-nums tracking-tight md:text-xl">
                                    8:00–20:00
                                </dd>
                            </div>

                            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-current py-4">
                                <dt className="text-sm md:text-base">
                                    Суббота — воскресенье
                                </dt>

                                <dd className="whitespace-nowrap text-lg font-semibold tabular-nums tracking-tight md:text-xl">
                                    10:00–18:00
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>

            <section id="request" className="mx-auto max-w-6xl scroll-mt-8 border-t border-current py-12 md:py-16">
                <p className="eyebrow text-sm uppercase tracking-[0.15em]">
                    Заказать кофе
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                    Какой кофе вам привезти?
                </h2>

                <div className="mt-10 grid gap-10 border-t border-current pt-6 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:pt-8">
                    <div>
                        <p className="max-w-sm text-base leading-relaxed md:text-lg">
                            Оставьте номер — мы перезвоним
                            и поможем оформить заказ.
                        </p>

                        <p className="mt-4 max-w-sm text-sm leading-relaxed md:text-base">
                            Подписка, разовый заказ или вопрос —
                            выберите, что вас интересует.
                            Платить на сайте не нужно.
                        </p>

                        <Image src="/request.jpg" alt="Кофейные зёрна и упаковка для заказа" width={1200} height={900} className="mt-8 aspect-[4/3] w-full max-w-sm object-cover" />                    </div>

                    <LeadForm />
                </div>
            </section>
        </main>
    );
}