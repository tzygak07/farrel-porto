import { useLanguage } from "../context/LanguageContext";
import { projects, techIcons } from "../data/constants";
import AnimatedSection from "../components/AnimatedSection";

const ProjectsSection = ({ onSelectProject }) => {
    const { t, lang } = useLanguage();

    return (
        <section id="projects" className="relative min-h-screen flex items-center py-20 px-8">
            <div className="absolute inset-0 hero-pattern pointer-events-none" />
            <div className="max-w-7xl mx-auto w-full relative">
                <AnimatedSection direction="left">
                    <div className="mb-10">
                        <h2 className="text-xs font-black tracking-[0.3em] uppercase text-zinc-400 dark:text-zinc-600 mb-3">{t("projects.section")}</h2>
                        <h3 className="text-3xl md:text-4xl font-display font-black tracking-tighter mb-2">{t("projects.heading")}</h3>
                        <p className="text-zinc-500 dark:text-zinc-500 max-w-xs font-medium text-xs">{t("projects.tagline")}</p>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <AnimatedSection key={index} direction="right" delay={index * 0.15}>
                            <div className="project-card group cursor-pointer rounded-xl overflow-hidden bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl border border-zinc-200/60 dark:border-white/10 shadow-lg">
                                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                                    {project.image ? (
                                        <img alt={project.title} className="w-full h-full object-cover" src={project.image} />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <span className="material-symbols-outlined text-5xl text-zinc-300 dark:text-zinc-700">image</span>
                                        </div>
                                    )}
                                </div>
                                <div className="p-5 space-y-3">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{project.year}</span>
                                    <h4 className="text-lg font-display font-bold">{project.title}</h4>
                                    <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed font-light line-clamp-2">
                                        {lang === 'en' ? project.descriptionEn : project.description}
                                    </p>
                                    <div className="flex items-center justify-between pt-2">
                                        <div className="flex items-center gap-2">
                                            {project.tags.map((tag) => (
                                                <img key={tag} src={techIcons[tag]} alt={tag} title={tag} className="w-7 h-7 object-contain" />
                                            ))}
                                        </div>
                                        <button
                                            onClick={() => onSelectProject(project)}
                                            className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-primary dark:bg-white text-white dark:text-primary rounded hover:opacity-80 transition-opacity"
                                        >
                                            {t("projects.detail")}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
