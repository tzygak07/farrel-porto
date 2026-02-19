import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleDarkMode = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const navLinks = [
    { href: "#home", key: "nav.home" },
    { href: "#about", key: "nav.profile" },
    { href: "#projects", key: "nav.projects" },
    { href: "#github", key: "nav.activity" },
    { href: "#contact", key: "nav.contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background-light/70 dark:bg-background-dark/70 backdrop-blur-xl border-b border-zinc-100 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#home" className="text-xl font-display font-black tracking-tighter uppercase">
            porto-farrel
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-[13px] font-bold tracking-widest uppercase text-zinc-500 dark:text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="hover:text-primary dark:hover:text-white transition-colors"
            >
              {t(link.key)}
            </a>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-2">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "id" : "en")}
            aria-label="Toggle language"
            className="px-2.5 py-1.5 text-[11px] font-black uppercase tracking-widest text-zinc-400 hover:text-primary dark:hover:text-white transition-colors border border-zinc-200 dark:border-zinc-800 rounded-md hover:border-zinc-400 dark:hover:border-zinc-600"
          >
            {lang === "en" ? "ID" : "EN"}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
            className="p-2 text-zinc-400 hover:text-primary dark:hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">
              {isDark ? "light_mode" : "dark_mode"}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
