import lokalKeunImg from "../assets/lokal_keun.png";
import lokalKeunImg2 from "../assets/lokal_keun2.png";
import lokalKeunImg3 from "../assets/lokal_keun3.png";
import deskifyImg from "../assets/deskify.png";
import deskifyImg2 from "../assets/deskify2.png";
import deskifyImg3 from "../assets/deskify3.png";
import porto from "../assets/porto.png"

// ─── Tech Stack Icon Map (reusable for project tags) ─────────────
export const techIcons = {
    "React js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "Tailwind Css": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "Laravel": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    "NeonDB": "https://avatars.githubusercontent.com/u/77690634?v=4",
    "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    "Cloudinary": "https://res.cloudinary.com/demo/image/upload/cloudinary_icon.png",
    "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
};

// ─── Projects ────────────────────────────────────────────────────
export const projects = [
    {
        title: "My Portfolio",
        year: "2026",
        description: "Merupakan personal website dan portofolio saya. Dibangun dengan React dan Tailwind CSS, menampilkan desain minimalis modern dengan dark mode, glassmorphism effects, dan animasi halus.",
        descriptionEn: "My personal website and portfolio. Built with React and Tailwind CSS, featuring a modern minimalist design with dark mode, glassmorphism effects, and smooth animations.",
        tags: ["React js", "Tailwind Css"],
        image: porto,
        link: null,
        github: null,
        role: "Frontend Developer",
        status: "Live",
        features: [
            { emoji: "🎨", text: "Desain minimalis dengan dark/light mode", textEn: "Minimalist design with dark/light mode" },
            { emoji: "✨", text: "Glassmorphism & animasi micro-interaction", textEn: "Glassmorphism & micro-interaction animations" },
            { emoji: "📊", text: "Integrasi GitHub API secara real-time", textEn: "Real-time GitHub API integration" },
            { emoji: "📱", text: "Fully responsive di semua perangkat", textEn: "Fully responsive across all devices" },
        ],
        screenshots: [],
    },
    {
        title: "Lokal-Keun",
        year: "2025",
        description: "Sebagai platform untuk mendukung dan mempromosikan UMKM lokal Indonesia. Dilengkapi dengan fitur pencarian, upload menu, dan sistem review untuk setiap UMKM.",
        descriptionEn: "A platform to support and promote local Indonesian SMEs (UMKM). Features search functionality, menu upload, and a review system for each business.",
        tags: ["Laravel", "Tailwind Css", "NeonDB", "PostgreSQL", "Cloudinary"],
        image: lokalKeunImg,
        link: "https://lokal-keun.vercel.app/",
        github: "https://github.com/tzygak07/lokal-keun",
        role: "Fullstack Developer",
        status: "Live",
        features: [
            { emoji: "🔍", text: "Pencarian & filter UMKM lokal", textEn: "Search & filter local SMEs" },
            { emoji: "📸", text: "Upload menu dengan Cloudinary", textEn: "Menu upload with Cloudinary" },
            { emoji: "⭐", text: "Sistem review & rating pengguna", textEn: "User review & rating system" },
            { emoji: "🗺️", text: "Promosi UMKM berbasis lokasi", textEn: "Location-based SME promotion" },
        ],
        screenshots: [lokalKeunImg2, lokalKeunImg3],
    },
    {
        title: "Deskify",
        year: "2025",
        description: "Sebuah website yang menyediakan saran deskmate dan perbandingan spesifikasi laptop. Membantu pengguna menemukan laptop terbaik sesuai kebutuhan mereka.",
        descriptionEn: "A website that provides deskmate suggestions and laptop specification comparisons. Helps users find the best laptop suited to their needs.",
        tags: ["React js", "Tailwind Css", "Firebase"],
        image: deskifyImg,
        link: "https://deskify-seven.vercel.app/",
        github: "https://github.com/tzygak07/deskify",
        role: "Frontend Developer",
        status: "Live",
        features: [
            { emoji: "💻", text: "Rekomendasi laptop berdasarkan kebutuhan", textEn: "Laptop recommendations based on needs" },
            { emoji: "⚖️", text: "Perbandingan spesifikasi side-by-side", textEn: "Side-by-side spec comparison" },
            { emoji: "🔖", text: "Bookmark laptop favorit", textEn: "Bookmark favorite laptops" },
            { emoji: "🔥", text: "Database laptop terupdate", textEn: "Up-to-date laptop database" },
        ],
        screenshots: [deskifyImg2, deskifyImg3],
    },
];


// ─── Tech Stack ──────────────────────────────────────────────────
export const techStack = [
    { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
    { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "Go Lang", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" },
    { name: "Neon DB", icon: "https://avatars.githubusercontent.com/u/77690634?v=4" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
    { name: "Framer Motion", icon: "https://user-images.githubusercontent.com/7850794/164965509-2a8dc49e-2ed7-4243-a2c9-481b03bbc31a.png" },
];

// ─── Tools & Collaborations ─────────────────────────────────────
export const tools = [
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
    { name: "Notepad++", icon: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Notepad_plus_plus.png" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "Notion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg" },
    { name: "GitHub", icon: "https://www.shareicon.net/data/2015/09/15/101512_logo_512x512.png" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
    { name: "Trello", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-original.svg" },
    { name: "NPM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original.svg" },
    { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
];

// ─── GitHub Config ───────────────────────────────────────────────
export const GITHUB_USERNAME = "tzygak07";
export const CONTACT_EMAIL = "farreldev21@gmail.com";

// ─── Social Links ────────────────────────────────────────────────
export const socialLinks = {
    email: `mailto:${CONTACT_EMAIL}`,
    instagram: "https://instagram.com/farrelrazaa_",
    github: `https://github.com/${GITHUB_USERNAME}`,
    discord: "https://discord.com/users/razzzzzza",
};
