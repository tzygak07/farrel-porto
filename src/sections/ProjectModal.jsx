import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { techIcons } from "../data/constants";

const ProjectModal = ({ project, onClose }) => {
    const { t, lang } = useLanguage();

    // Lock body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = ''; };
    }, []);

    if (!project) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal */}
            <div
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-950 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                >
                    <span className="material-symbols-outlined text-xl">close</span>
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Left: Image Gallery + Project Info */}
                    <div className="flex flex-col">
                        {/* Scrollable image gallery */}
                        <div className="relative h-56 md:h-72 overflow-y-auto p-4 space-y-3 hide-scrollbar">
                            {[project.image, ...(project.screenshots || [])].filter(Boolean).length > 0 ? (
                                [project.image, ...(project.screenshots || [])].filter(Boolean).map((src, i) => (
                                    <div key={i} className="rounded-xl overflow-hidden">
                                        <img src={src} alt={`${project.title} ${i + 1}`} className="w-full object-cover rounded-xl" />
                                    </div>
                                ))
                            ) : (
                                <div className="h-full flex items-center justify-center">
                                    <span className="material-symbols-outlined text-5xl text-zinc-300 dark:text-zinc-700">image</span>
                                </div>
                            )}
                        </div>

                        {/* Project Info */}
                        <div className="p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{project.year}</span>
                                <span className="px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-[9px] font-black uppercase tracking-widest rounded-full flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    {project.status}
                                </span>
                            </div>
                            <h3 className="text-2xl font-display font-black tracking-tight mb-1">{project.title}</h3>
                            <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium mb-4 block">{project.role}</span>
                            <div className="flex items-center gap-2 flex-wrap">
                                {project.tags.map((tag) => (
                                    <div key={tag} className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                                        <img src={techIcons[tag]} alt={tag} className="w-5 h-5 object-contain" />
                                        <span className="text-[11px] font-bold">{tag}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Description + Features + Links */}
                    <div className="p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-zinc-100 dark:border-zinc-800 md:overflow-y-auto md:max-h-[80vh] hide-scrollbar">
                        <div>
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 mb-3">{t("modal.aboutProject")}</h4>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm mb-6">
                                {lang === 'en' ? project.descriptionEn : project.description}
                            </p>

                            {project.features && project.features.length > 0 && (
                                <div className="mb-6">
                                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 mb-3">{t("modal.keyFeatures")}</h4>
                                    <div className="space-y-2">
                                        {project.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800/50">
                                                <span className="text-lg">{feature.emoji}</span>
                                                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{lang === 'en' ? feature.textEn : feature.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="space-y-3 pt-4">
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-between w-full px-6 py-4 bg-primary dark:bg-white text-white dark:text-primary rounded-xl font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
                                >
                                    <span>{t("modal.visitSite")}</span>
                                    <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
                                </a>
                            )}
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-between w-full px-6 py-4 border border-zinc-200 dark:border-zinc-800 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                                >
                                    <span>{t("modal.viewGithub")}</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
