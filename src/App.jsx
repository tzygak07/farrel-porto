import { useState, useEffect } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <LanguageProvider>
      <div className="bg-background-light dark:bg-background-dark text-zinc-900 dark:text-zinc-100 selection:bg-zinc-200 dark:selection:bg-zinc-800 font-sans antialiased overflow-x-hidden">
        {/* Cursor glow */}
        <div
          className="pointer-events-none fixed inset-0 z-[9998] transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(120,120,120,0.06), transparent 40%)`,
          }}
        />
        <Navbar />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;