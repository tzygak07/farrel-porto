import { useLanguage } from "../context/LanguageContext";
import { techStack, tools } from "../data/constants";
import AnimatedSection from "../components/AnimatedSection";

const AboutSection = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="min-h-screen flex items-center py-20 px-8">
            <div className="max-w-7xl mx-auto w-full">
                <AnimatedSection direction="left">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-20">
                        <div className="lg:col-span-4">
                            <h2 className="text-xs font-black tracking-[0.3em] uppercase text-zinc-400 dark:text-zinc-600 mb-8">{t("profile.section")}</h2>
                            <h3 className="text-4xl font-display font-bold leading-tight">{t("profile.heading")}</h3>
                        </div>
                        <div className="lg:col-span-7 lg:col-start-6">
                            <div className="space-y-6 text-xl font-light text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                <p>{t("profile.desc1")}</p>
                                <p>{t("profile.desc2")}</p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={0.15}>
                    <div className="mb-12">
                        <h4 className="text-xs font-black tracking-[0.2em] uppercase text-zinc-900 dark:text-white mb-6 text-center">{t("profile.techStack")}</h4>
                        <div className="overflow-hidden">
                            <div className="marquee-track">
                                {[...techStack, ...techStack].map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex-shrink-0 flex items-center space-x-3 px-5 py-3 mx-2 rounded-xl bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl border border-zinc-200/60 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <img src={item.icon} alt={item.name} className="w-6 h-6" />
                                        <span className="text-sm font-semibold whitespace-nowrap">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                    <div>
                        <h4 className="text-xs font-black tracking-[0.2em] uppercase text-zinc-900 dark:text-white mb-6 text-center">{t("profile.tools")}</h4>
                        <div className="overflow-hidden">
                            <div className="marquee-track" style={{ animationDirection: "reverse", animationDuration: "20s" }}>
                                {[...tools, ...tools].map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex-shrink-0 flex items-center space-x-3 px-5 py-3 mx-2 rounded-xl bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl border border-zinc-200/60 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <img src={item.icon} alt={item.name} className="w-6 h-6" />
                                        <span className="text-sm font-semibold whitespace-nowrap">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default AboutSection;
