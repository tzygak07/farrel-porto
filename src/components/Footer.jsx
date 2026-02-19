import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 px-6 md:px-8 border-t border-zinc-100 dark:border-zinc-900 bg-zinc-50/30 dark:bg-zinc-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          {/* Brand */}
          <div className="max-w-xs">
            <a href="#home" className="text-lg font-display font-black tracking-tighter uppercase mb-2 block">
              porto-farrel
            </a>
            <p className="text-zinc-500 dark:text-zinc-500 font-medium text-[11px] leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Navigation - 3 column grid */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3">{t("footer.navigation")}</h4>
            <div className="grid grid-cols-3 gap-x-8 gap-y-1.5 text-[11px] font-bold uppercase tracking-widest">
              <a className="hover:text-zinc-400 transition-colors" href="#home">{t("nav.home")}</a>
              <a className="hover:text-zinc-400 transition-colors" href="#projects">{t("nav.projects")}</a>
              <a className="hover:text-zinc-400 transition-colors row-span-2 flex items-center" href="#contact">{t("nav.contact")}</a>
              <a className="hover:text-zinc-400 transition-colors" href="#about">{t("nav.profile")}</a>
              <a className="hover:text-zinc-400 transition-colors" href="#github">{t("nav.activity")}</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400 pt-6 border-t border-zinc-100 dark:border-zinc-900">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;