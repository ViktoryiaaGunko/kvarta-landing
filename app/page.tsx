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

                    <div className="mt-8 max-w-xl space-y-5 text-sm uppercase leading-7 tracking-[0.08em]">
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

                <a href="#coffee"
                    className="group mt-8 w-full lg:w-[calc(100%/1.4)] inline-flex min-h-12 items-center justify-center gap-6 bg-foreground px-7 py-3 text-base font-medium text-background transition-colors duration-200 hover:bg-[#702A47] active:bg-[#401326] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground motion-reduce:transition-none">
                    Выбрать кофе
                    <span
                        aria-hidden="true"
                        className="inline-block motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:translate-y-1">
        ↓           </span>
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
            </section>
        </main>
    );
}