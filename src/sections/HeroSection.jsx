import { useLanguage } from "../context/LanguageContext";
import AnimatedSection from "../components/AnimatedSection";

const HeroSection = () => {
    const { t } = useLanguage();

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 px-8">
            <div className="absolute inset-0 hero-pattern pointer-events-none" />
            <div className="absolute inset-0 noise-overlay pointer-events-none" />
            <div className="max-w-7xl mx-auto w-full py-12 md:py-24">
                <AnimatedSection delay={0}>
                    <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 text-[11px] font-black uppercase tracking-[0.2em] mb-12 bg-white dark:bg-zinc-900">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        <span className="text-zinc-600 dark:text-zinc-400">{t("hero.badge")}</span>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={0.1}>
                    <h1 className="text-7xl md:text-[120px] font-display font-black tracking-tighter leading-[0.9] mb-12">
                        FARREL <span className="block text-zinc-300 dark:text-zinc-800 italic font-serif font-light">Web Developer</span>
                    </h1>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
                        <div className="md:col-span-6">
                            <p className="text-2xl md:text-3xl font-light text-zinc-500 dark:text-zinc-400 leading-tight mb-8">
                                {t("hero.subtitle")} <span className="text-zinc-900 dark:text-zinc-100 font-medium">{t("hero.university")}</span>{t("hero.subtitleEnd")}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="#projects" className="bg-primary dark:bg-white text-white dark:text-primary px-10 py-5 text-sm font-bold uppercase tracking-widest hover:invert transition-all duration-300">
                                    {t("hero.viewWork")}
                                </a>
                                <a href="#contact" className="bg-transparent border border-zinc-200 dark:border-zinc-800 px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                                    {t("hero.getInTouch")}
                                </a>
                            </div>
                        </div>
                        <div className="hidden md:block md:col-span-5 md:col-start-8">
                            <div className="border-l border-zinc-200 dark:border-zinc-800 pl-8 py-2">
                                <p className="text-sm text-zinc-400 dark:text-zinc-600 leading-relaxed font-medium">
                                    {t("hero.bio")}
                                </p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default HeroSection;
