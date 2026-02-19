import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { CONTACT_EMAIL, socialLinks } from "../data/constants";
import AnimatedSection from "../components/AnimatedSection";

const ContactSection = () => {
    const { t } = useLanguage();
    const [formStatus, setFormStatus] = useState('idle'); // idle | sending | success | error

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('sending');
        const form = e.target;
        const data = {
            access_key: import.meta.env.VITE_WEB3FORMS_KEY,
            name: form.elements.name.value,
            email: form.elements.email.value,
            message: form.elements.message.value,
            subject: `Portfolio Inquiry from ${form.elements.name.value}`,
        };
        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const result = await res.json();
            if (result.success) {
                setFormStatus('success');
                form.reset();
                setTimeout(() => setFormStatus('idle'), 4000);
            } else {
                setFormStatus('error');
                setTimeout(() => setFormStatus('idle'), 4000);
            }
        } catch {
            setFormStatus('error');
            setTimeout(() => setFormStatus('idle'), 4000);
        }
    };

    return (
        <section id="contact" className="relative min-h-screen flex items-center py-20 px-8">
            <div className="absolute inset-0 hero-pattern pointer-events-none" />
            <div className="max-w-7xl mx-auto relative">
                <AnimatedSection>
                    <h2 className="text-xs font-black tracking-[0.3em] uppercase text-zinc-400 dark:text-zinc-600 mb-12">{t("contact.section")}</h2>
                </AnimatedSection>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-24">
                    <AnimatedSection direction="left" className="lg:col-span-4">
                        <h3 className="text-5xl font-display font-black tracking-tighter leading-none mb-10">{t("contact.heading")}</h3>
                        <p className="text-zinc-500 dark:text-zinc-500 font-medium leading-relaxed">
                            {t("contact.desc")}
                        </p>
                        <div className="mt-12 space-y-4">
                            <p className="text-sm font-bold uppercase tracking-widest text-zinc-400">{t("contact.directContact")}</p>
                            <a className="block text-xl font-medium hover:translate-x-2 transition-transform" href={socialLinks.email}>{CONTACT_EMAIL}</a>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="right" delay={0.2} className="lg:col-span-7 lg:col-start-6">
                        <form className="space-y-12" onSubmit={handleContactSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-4 group">
                                    <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 group-focus-within:text-primary dark:group-focus-within:text-white transition-colors">{t("contact.yourName")}</label>
                                    <input
                                        name="name"
                                        type="text"
                                        required
                                        className="w-full bg-transparent border-0 border-b-2 border-zinc-200 dark:border-zinc-800 px-0 py-4 text-lg placeholder:text-zinc-300 dark:placeholder:text-zinc-700 focus:ring-0 focus:border-primary dark:focus:border-white transition-all"
                                        placeholder={t("contact.namePlaceholder")}
                                    />
                                </div>
                                <div className="space-y-4 group">
                                    <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 group-focus-within:text-primary dark:group-focus-within:text-white transition-colors">{t("contact.email")}</label>
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        className="w-full bg-transparent border-0 border-b-2 border-zinc-200 dark:border-zinc-800 px-0 py-4 text-lg placeholder:text-zinc-300 dark:placeholder:text-zinc-700 focus:ring-0 focus:border-primary dark:focus:border-white transition-all"
                                        placeholder={t("contact.emailPlaceholder")}
                                    />
                                </div>
                            </div>
                            <div className="space-y-4 group">
                                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 group-focus-within:text-primary dark:group-focus-within:text-white transition-colors">{t("contact.projectBrief")}</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    required
                                    className="w-full bg-transparent border-0 border-b-2 border-zinc-200 dark:border-zinc-800 px-0 py-4 text-lg placeholder:text-zinc-300 dark:placeholder:text-zinc-700 focus:ring-0 focus:border-primary dark:focus:border-white transition-all resize-none"
                                    placeholder={t("contact.messagePlaceholder")}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={formStatus === 'sending'}
                                className={`px-12 py-6 text-sm font-black uppercase tracking-[0.2em] transition-all duration-500 w-full md:w-auto ${formStatus === 'success'
                                    ? 'bg-emerald-500 text-white cursor-default'
                                    : formStatus === 'error'
                                        ? 'bg-red-500 text-white cursor-default'
                                        : 'bg-primary dark:bg-white text-white dark:text-primary hover:invert'
                                    } ${formStatus === 'sending' ? 'opacity-60 cursor-wait' : ''}`}
                            >
                                {formStatus === 'sending' && t("contact.sending")}
                                {formStatus === 'success' && t("contact.success")}
                                {formStatus === 'error' && t("contact.error")}
                                {formStatus === 'idle' && t("contact.send")}
                            </button>
                        </form>
                    </AnimatedSection>
                </div>

                <AnimatedSection direction="down" delay={0.1}>
                    <h4 className="text-xs font-black tracking-[0.2em] uppercase text-zinc-900 dark:text-white mb-8">{t("social.findMe")}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* Email Card */}
                        <a href={socialLinks.email} className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-rose-600 via-red-500 to-orange-500 text-white hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                            <div className="relative z-10">
                                <h5 className="text-lg font-bold mb-1">{t("social.emailTitle")}</h5>
                                <p className="text-white/70 text-sm mb-4">{t("social.emailDesc")}</p>
                                <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-white/30 text-sm font-bold hover:bg-white/10 transition-colors">
                                    <span>{t("social.sendEmail")}</span>
                                    <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                                </span>
                            </div>
                            <div className="absolute right-4 bottom-4 w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <span className="material-symbols-outlined text-3xl">mail</span>
                            </div>
                        </a>

                        {/* Instagram Card */}
                        <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                            <div className="relative z-10">
                                <h5 className="text-lg font-bold mb-1">{t("social.instaTitle")}</h5>
                                <p className="text-white/70 text-sm mb-4">{t("social.instaDesc")}</p>
                                <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-white/30 text-sm font-bold hover:bg-white/10 transition-colors">
                                    <span>{t("social.goInsta")}</span>
                                    <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                                </span>
                            </div>
                            <div className="absolute right-4 bottom-4 w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </div>
                        </a>

                        {/* GitHub Card */}
                        <a href={socialLinks.github} target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900 text-white hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                            <div className="relative z-10">
                                <h5 className="text-lg font-bold mb-1">{t("social.githubTitle")}</h5>
                                <p className="text-white/70 text-sm mb-4">{t("social.githubDesc")}</p>
                                <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-white/30 text-sm font-bold hover:bg-white/10 transition-colors">
                                    <span>{t("social.goGithub")}</span>
                                    <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                                </span>
                            </div>
                            <div className="absolute right-4 bottom-4 w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </div>
                        </a>

                        {/* Discord Card */}
                        <a href={socialLinks.discord} target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-700 text-white hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                            <div className="relative z-10">
                                <h5 className="text-lg font-bold mb-1">{t("social.discordTitle")}</h5>
                                <p className="text-white/70 text-sm mb-4">{t("social.discordDesc")}</p>
                                <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-white/30 text-sm font-bold hover:bg-white/10 transition-colors">
                                    <span>{t("social.goDiscord")}</span>
                                    <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                                </span>
                            </div>
                            <div className="absolute right-4 bottom-4 w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" /></svg>
                            </div>
                        </a>

                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default ContactSection;
