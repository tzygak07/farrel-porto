import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("section1");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine which section is currently in view
      const sections = ["section1", "section2", "section3", "section4"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  const getNavLinkClass = (sectionId) => {
    // Hide bottom border for section1 when not scrolled
    if (sectionId === "section1" && activeSection === "section1" && !isScrolled) {
      return "text-white cursor-pointer px-3 py-2 border-b-2 border-transparent";
    }
    
    return `text-white cursor-pointer px-3 py-2 ${
      activeSection === sectionId
        ? "border-b-2 border-purple-500"
        : "border-b-2 border-transparent hover:border-purple-400 transition-all duration-300"
    }`;
  };

  return (
    <>
      {/* Regular Navbar - hidden when mobile menu is open */}
      {!isMobileMenuOpen && (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-in-out ${
            isScrolled ? "bg-black/50 border-b border-purple-500" : "bg-transparent"
          } flex items-center py-3 px-5`}
        >
          {/* Container with reduced maximum width to bring elements closer */}
          <div className="flex items-center justify-between w-full max-w-5xl mx-auto">
            {/* Logo on the left with animation */}
            <motion.div 
              className="text-white font-bold text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
            >
              Farrel-<span className="text-purple-500">Porto</span>
            </motion.div>

            {/* Desktop Navigation with item animations */}
            <nav className="hidden md:flex gap-x-4">
              {["section1", "section2", "section3", "section4"].map((section, index) => (
                <motion.span
                  key={section}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * (index + 1), duration: 0.2 }}
                  onClick={() => scrollToSection(section)}
                  className={getNavLinkClass(section)}
                >
                  {section === "section1" ? "Beranda" : 
                   section === "section2" ? "Tentang" :
                   section === "section3" ? "Projek" : "Sertifikat"}
                  {/* Only show the purple highlight when scrolled or not in section1 */}
                  {activeSection === section && (!(section === "section1" && !isScrolled)) && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.span>
              ))}
            </nav>

            {/* Mobile Burger Menu Button with animation */}
            <motion.button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(true)}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </motion.button>
          </div>
        </motion.header>
      )}

      {/* Mobile Menu with Close Button at the top */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed top-0 right-0 h-screen w-full bg-black/90 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {/* Header with close button */}
            <div className="flex items-center justify-between py-3 px-5 border-b border-purple-500">
              <motion.div 
                className="text-white font-bold text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Farrel-<span className="text-purple-500">Porto</span>
              </motion.div>
              
              <motion.button
                className="text-white"
                onClick={() => setIsMobileMenuOpen(false)}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>
            </div>
            
            {/* Menu items */}
            <div className="flex flex-col p-4">
              {["section1", "section2", "section3", "section4"].map((section, index) => (
                <motion.span
                  key={section}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 * (index + 1), duration: 0.15 }}
                  onClick={() => scrollToSection(section)}
                  className={`${getNavLinkClass(section)} mb-4 text-xl`}
                  whileHover={{ x: 10, color: "#d8b4fe" }}
                >
                  {section === "section1" ? "Beranda" : 
                   section === "section2" ? "Tentang" :
                   section === "section3" ? "Projek" : "Sertifikat"}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;