import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { GITHUB_USERNAME, socialLinks } from "../data/constants";
import GitHubContributions from "../components/GitHubContributions";
import AnimatedSection from "../components/AnimatedSection";

const GitHubSection = () => {
    const { t } = useLanguage();

    const [githubData, setGithubData] = useState({
        public_repos: 12,
        followers: 7,
        following: 7,
    });

    useEffect(() => {
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.public_repos !== undefined) {
                    setGithubData({
                        public_repos: data.public_repos,
                        followers: data.followers,
                        following: data.following,
                    });
                }
            })
            .catch(() => { });
    }, []);

    return (
        <section id="github" className="min-h-screen flex items-center py-20 px-8 bg-zinc-50/50 dark:bg-zinc-900/20">
            <div className="max-w-7xl mx-auto w-full">
                <AnimatedSection>
                    <h2 className="text-xs font-black tracking-[0.3em] uppercase text-zinc-400 dark:text-zinc-600 mb-12">{t("github.section")}</h2>
                </AnimatedSection>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Digital Lab + Activity Log */}
                    <AnimatedSection direction="left">
                        <h3 className="text-5xl font-display font-black tracking-tighter mb-6">{t("github.heading")}</h3>
                        <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8 max-w-md">
                            {t("github.desc")}
                        </p>
                        <a className="group inline-flex items-center space-x-4 text-sm font-black uppercase tracking-widest mb-12" href={socialLinks.github} target="_blank" rel="noreferrer">
                            <span>{t("github.viewGithub")}</span>
                            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
                        </a>

                        {/* Activity Log Panel */}
                        <div className="bg-white dark:bg-zinc-950 p-6 border border-zinc-200 dark:border-zinc-900 shadow-2xl rounded-lg">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center space-x-3">
                                    <div className="w-7 h-7 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    </div>
                                    <span className="text-[11px] font-black uppercase tracking-[0.2em]">{t("github.contributions")}</span>
                                </div>
                                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">@{GITHUB_USERNAME}</span>
                            </div>
                            <div className="mb-6">
                                <GitHubContributions username={GITHUB_USERNAME} />
                            </div>
                            <div className="flex justify-between items-center pt-6 border-t border-zinc-100 dark:border-zinc-900">
                                <div className="flex items-center space-x-6">
                                    <div className="text-center">
                                        <span className="block text-lg font-bold">{githubData.public_repos}</span>
                                        <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">{t("github.repos")}</span>
                                    </div>
                                    <div className="text-center">
                                        <span className="block text-lg font-bold">{githubData.followers}</span>
                                        <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">{t("github.followers")}</span>
                                    </div>
                                    <div className="text-center">
                                        <span className="block text-lg font-bold">{githubData.following}</span>
                                        <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">{t("github.following")}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Right: Education & Experience */}
                    <AnimatedSection direction="right" delay={0.2} className="space-y-12">

                        {/* Education */}
                        <div>
                            <h4 className="text-xs font-black tracking-[0.2em] uppercase text-zinc-900 dark:text-white mb-8 flex items-center space-x-3">
                                <span className="material-symbols-outlined text-[18px]">school</span>
                                <span>{t("github.education")}</span>
                            </h4>
                            <div className="space-y-4">
                                {/* Telkom University */}
                                <div className="relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-800">
                                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary dark:bg-white border-2 border-white dark:border-zinc-950" />
                                    <div className="bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl border border-zinc-200/60 dark:border-white/10 rounded-xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-emerald-500 dark:border-l-emerald-400">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">2025 — Now</span>
                                            <span className="px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-[9px] font-black uppercase tracking-widest rounded">{t("github.active")}</span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Logo_Telkom_University_potrait.png" alt="Telkom University" className="w-14 h-14 rounded-xl object-contain bg-white p-1.5 border border-zinc-100 dark:border-zinc-800 shadow-sm" />
                                            <div>
                                                <h5 className="text-lg font-display font-bold mb-0.5">Telkom University</h5>
                                                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">{t("github.informatika")}</p>
                                            </div>
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/50">
                                            <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2 block">{t("github.educationUkm")}</span>
                                            <div className="flex items-center space-x-3">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcA9LtG7M1fP5yUgrcYNCHcCMUtaztCpeR2A&s" alt="CCI" className="w-8 h-8 rounded-lg object-contain bg-white p-1 border border-zinc-100 dark:border-zinc-800" />
                                                <div>
                                                    <p className="text-xs font-bold text-zinc-700 dark:text-zinc-300">Central Computer Improvement</p>
                                                    <p className="text-[11px] text-zinc-400 dark:text-zinc-500">{t("github.webDevDivision")}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* SMKN 4 Bandung */}
                                <div className="relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-800">
                                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-zinc-300 dark:bg-zinc-700 border-2 border-white dark:border-zinc-950" />
                                    <div className="bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl border border-zinc-200/60 dark:border-white/10 rounded-xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-zinc-400 dark:border-l-zinc-600">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">2022 — 2025</span>
                                            <span className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 text-[9px] font-black uppercase tracking-widest rounded">{t("github.completed")}</span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <img src="https://smkn4bdg.sch.id/image/smkn4.png" alt="SMKN 4 Bandung" className="w-14 h-14 rounded-xl object-contain bg-white p-1.5 border border-zinc-100 dark:border-zinc-800 shadow-sm" />
                                            <div>
                                                <h5 className="text-lg font-display font-bold mb-0.5">SMKN 4 Bandung</h5>
                                                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">{t("github.rpl")}</p>
                                            </div>
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/50">
                                            <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2 block">Extracurricular</span>
                                            <div className="flex items-center space-x-3">
                                                <img src="https://media.licdn.com/dms/image/v2/D560BAQFxZ3j0lkdV-w/company-logo_200_200/company-logo_200_200/0/1689060020990?e=2147483647&v=beta&t=qIvzr56Ol1eg9dzdTb6A18d6JsJicWpffO2pEDcpaQc" alt="ORBIT" className="w-8 h-8 rounded-lg object-cover border border-zinc-100 dark:border-zinc-800" />
                                                <div>
                                                    <p className="text-xs font-bold text-zinc-700 dark:text-zinc-300">ORBIT</p>
                                                    <p className="text-[11px] text-zinc-400 dark:text-zinc-500">Software Engineering Division</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Experience */}
                        <div>
                            <h4 className="text-xs font-black tracking-[0.2em] uppercase text-zinc-900 dark:text-white mb-8 flex items-center space-x-3">
                                <span className="material-symbols-outlined text-[18px]">work</span>
                                <span>{t("github.experience")}</span>
                            </h4>
                            <div className="space-y-4">
                                <div className="relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-800">
                                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-zinc-300 dark:bg-zinc-700 border-2 border-white dark:border-zinc-950" />
                                    <div className="bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl border border-zinc-200/60 dark:border-white/10 rounded-xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-blue-500 dark:border-l-blue-400">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">2024 — 3 Months</span>
                                            <span className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[9px] font-black uppercase tracking-widest rounded">{t("github.internship")}</span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <img src="https://media.licdn.com/dms/image/v2/D560BAQGatNkuB9QcDg/company-logo_200_200/company-logo_200_200/0/1712134892821?e=2147483647&v=beta&t=ME9IDPHguFD4h9jvVz0ThfRQUn5scG3lJfj3TwBS3lk" alt="PT. Curaweda" className="w-14 h-14 rounded-xl object-contain bg-white p-1.5 border border-zinc-100 dark:border-zinc-800 shadow-sm" />
                                            <div>
                                                <h5 className="text-lg font-display font-bold mb-0.5">PT. Curaweda Palagan Innotech</h5>
                                                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">{t("github.qualityAssurance")}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default GitHubSection;
