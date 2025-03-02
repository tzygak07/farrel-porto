import { useState } from "react";
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import FrameworkSlider from "../components/FrameworkSlider";
import DownloadCvButton from "../components/DownloadCvBUtton";

function Home() {
  const [count, setCount] = useState(0);
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentAlt, setCurrentAlt] = useState("");

  // Function to open the image modal
  const openImageModal = (imageSrc, imageAlt) => {
    setCurrentImage(imageSrc);
    setCurrentAlt(imageAlt);
    setShowImageModal(true);
  };

  // Function to close the image modal
  const closeImageModal = () => {
    setShowImageModal(false);
  };

  const frameworks = [
    {
      name: "HTML",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      image: "/images/html.png",
    },
    {
      name: "CSS",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      image: "/images/css.png",
    },
    {
      name: "Bootstrap",
      url: "https://getbootstrap.com/",
      image: "/images/bootstrap.png",
    },
    { name: "React", url: "https://reactjs.org/", image: "/images/react.png" },
    {
      name: "Laravel",
      url: "https://laravel.com/",
      image: "/images/laravel.png",
    },
    {
      name: "Figma",
      url: "https://www.figma.com/",
      image: "/images/figma.png",
    },
    {
      name: "Python",
      url: "https://www.python.org/",
      image: "/images/python.png",
    },
    {
      name: "MySQL",
      url: "https://www.mysql.com/",
      image: "/images/mysql.png",
    },
    { name: "PHP", url: "https://www.php.net/", image: "/images/php.png" },
    {
      name: "Tailwind",
      url: "https://tailwindcss.com/",
      image: "/images/tailwind.png",
    },
  ];

  return (
    <>
      <div
        id="section1"
        className="h-screen bg-black text-white bg-no-repeat flex items-center justify-center px-4 sm:px-6"
      >
        <div
          id="card"
          className="group relative p-4 sm:p-5 max-w-3xl text-left sm:text-left space-y-4 sm:space-y-6 transition-transform duration-500 ease-out hover:scale-105"
        >
          {/* Border Kanan Atas */}
          <div className="absolute top-0 right-0 w-16 sm:w-24 h-[1px] bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.3)] animate-[borderTopRight_3s_ease-in-out_infinite]"></div>
          <div className="absolute top-0 right-0 w-[1px] h-16 sm:h-24 bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.3)] animate-[borderRightTop_3s_ease-in-out_infinite]"></div>

          {/* Border Kanan Bawah */}
          <div className="absolute bottom-0 right-0 w-[1px] h-16 sm:h-24 bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.3)] animate-[borderRightBottom_3s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-0 right-0 w-16 sm:w-24 h-[1px] bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.3)] animate-[borderBottomRight_3s_ease-in-out_infinite]"></div>

          {/* Border Kiri Bawah */}
          <div className="absolute bottom-0 left-0 w-16 sm:w-24 h-[1px] bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.3)] animate-[borderBottomLeft_3s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-0 left-0 w-[1px] h-16 sm:h-24 bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.3)] animate-[borderLeftBottom_3s_ease-in-out_infinite]"></div>

          {/* Border Kiri Atas */}
          <div className="absolute top-0 left-0 w-[1px] h-16 sm:h-24 bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.3)] animate-[borderLeftTop_3s_ease-in-out_infinite]"></div>
          <div className="absolute top-0 left-0 w-16 sm:w-24 h-[1px] bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.3)] animate-[borderTopLeft_3s_ease-in-out_infinite]"></div>

          <style jsx>{`
            @keyframes borderTopRight {
              0%,
              100% {
                opacity: 0;
              }
              12.5% {
                opacity: 1;
              }
              25% {
                opacity: 0;
              }
            }
            @keyframes borderRightTop {
              0%,
              12.5%,
              100% {
                opacity: 0;
              }
              25% {
                opacity: 1;
              }
              37.5% {
                opacity: 0;
              }
            }
            @keyframes borderRightBottom {
              0%,
              25%,
              100% {
                opacity: 0;
              }
              37.5% {
                opacity: 1;
              }
              50% {
                opacity: 0;
              }
            }
            @keyframes borderBottomRight {
              0%,
              37.5%,
              100% {
                opacity: 0;
              }
              50% {
                opacity: 1;
              }
              62.5% {
                opacity: 0;
              }
            }
            @keyframes borderBottomLeft {
              0%,
              50%,
              100% {
                opacity: 0;
              }
              62.5% {
                opacity: 1;
              }
              75% {
                opacity: 0;
              }
            }
            @keyframes borderLeftBottom {
              0%,
              62.5%,
              100% {
                opacity: 0;
              }
              75% {
                opacity: 1;
              }
              87.5% {
                opacity: 0;
              }
            }
            @keyframes borderLeftTop {
              0%,
              75%,
              100% {
                opacity: 0;
              }
              87.5% {
                opacity: 1;
              }
              100% {
                opacity: 0;
              }
            }
            @keyframes borderTopLeft {
              0%,
              87.5% {
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
            }
          `}</style>

          {/* Tentang Saya */}
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-5xl text-white mb-2 font-semibold">
              Halo👋
            </h1>
            <h2 className="text-2xl sm:text-4xl text-white mb-4 sm:mb-7 font-semibold">
              Saya{" "}
              <span className="text-purple-500">
                Farrel Raza Sigak Amrullah
              </span>
            </h2>
            <p className="font-base text-sm sm:text-base text-gray-300">
              Siswa <span className="text-purple-500">SMKN 4 Bandung</span>{" "}
              jurusan{" "}
              <span className="text-purple-500">
                Rekayasa Perangkat Lunak (RPL)
              </span>
              , dengan fokus pada pengembangan{" "}
              <span className="text-purple-500 italic">Front-End</span> dan{" "}
              <span className="text-purple-500">desain UI/UX</span>. Saya selalu
              antusias untuk mempelajari hal-hal baru dan siap berkontribusi
              secara positif dalam setiap kesempatan yang ada.
            </p>
          </div>

          {/* Garis Pemisah */}
          <div className="border-t border-gray-600 w-2/3 sm:w-1/2 mx-auto my-3 sm:my-4"></div>

          {/* Find Me On Section */}
          <div className="text-center">
            <h3 className="text-base sm:text-lg font-semibold mb-2">
              Temukan Saya :
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 text-xs sm:text-sm">
              <a
                href="https://instagram.com/farrelrazaa_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 sm:gap-2 bg-gray-900 text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-sm hover:text-purple-400 transition"
              >
                <FaInstagram size={15} />
                <span>Instagram</span>
              </a>

              <a
                href="https://github.com/tzygak07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 sm:gap-2 bg-gray-900 text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-sm hover:text-purple-400 transition"
              >
                <FaGithub size={15} />
                <span>GitHub</span>
              </a>

              <a
                href="mailto:razafarrel@email.com"
                className="flex items-center gap-1 sm:gap-2 bg-gray-900 text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-sm hover:text-purple-400 transition"
              >
                <FaEnvelope size={15} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        id="section2"
        className="min-h-screen bg-black border-amber-500 flex items-center justify-center py-16"
      >
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Framework Slider */}
          <div className="flex items-center justify-center">
            <FrameworkSlider />
          </div>

          {/* Right side - Education and Experience - Stack on mobile only */}
          <div className="flex flex-col space-y-8 text-white px-4">
            {/* Education Section */}
            <div className="bg-[#1e1e1e] rounded-xl p-6 shadow-lg transition-transform duration-300 hover:scale-105">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">
                🏫 Pendidikan
              </h2>

              <div className="space-y-4">
                <div className="border-l-2 border-purple-400 pl-4">
                  <h3 className="text-xl font-semibold">
                    Rekayasa Perangkat Lunak
                  </h3>
                  <p className="text-gray-400">SMKN 4 Bandung</p>
                  <p className="text-sm">2022 - 2025</p>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="bg-[#1e1e1e] rounded-xl p-6 shadow-lg transition-transform duration-300 hover:scale-105">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">
                💼 Pengalaman
              </h2>

              <div className="space-y-4">
                <div className="border-l-2 border-purple-400 pl-4">
                  <h3 className="text-xl font-semibold italic">
                    Quality Assurance (Internship)
                  </h3>
                  <p className="text-gray-400">PT. Curaweda Palagan Innotech</p>
                  <p className="text-sm">2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS untuk penanganan mobile */}
      <style jsx>{`
        @media (max-width: 1024px) {
          #section2 .container {
            display: flex;
            flex-direction: column;
          }
        }
      `}</style>

      <div
        id="section3"
        className="min-h-screen bg-black py-16 px-4 flex items-center justify-center"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-2">
            Projek Saya
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Beberapa karya yang telah saya kerjakan
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div
              className="group relative overflow-hidden rounded-lg shadow-lg bg-[#1e1e1e] h-64"
              onClick={() => {
                const element = document.getElementById("project1");
                if (element) {
                  element.classList.toggle("mobile-active");
                }
              }}
            >
              <img
                src="/src/assets/deskify.png"
                alt="Project 1"
                className="w-full h-full object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-110"
              />
              <div
                id="project1"
                className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center p-6"
              >
                <h3 className="text-xl font-bold text-purple-400 mb-2 transform -translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  Deskify
                </h3>
                <p className="text-gray-200 mb-4 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  Platform untuk mencari saran laptop dan <br />{" "}
                  <span className="italic">set-up</span> meja sesuai budget yang
                  dimiliki.
                </p>
                <div className="flex space-x-2 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
                  <span className="px-2 py-1 bg-gray-800 text-xs rounded-full text-purple-300">
                    React
                  </span>
                  <span className="px-2 py-1 bg-gray-800 text-xs rounded-full text-purple-300">
                    Tailwind
                  </span>
                  <span className="px-2 py-1 bg-gray-800 text-xs rounded-full text-purple-300">
                    Firebase
                  </span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div
              className="group relative overflow-hidden rounded-lg shadow-lg bg-[#1e1e1e] h-64"
              onClick={() => {
                const element = document.getElementById("project2");
                if (element) {
                  element.classList.toggle("mobile-active");
                }
              }}
            >
              <img
                src="/src/assets/task.png"
                alt="Project 2"
                className="w-full h-full object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-110"
              />
              <div
                id="project2"
                className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center p-6"
              >
                <h3 className="text-xl font-bold text-purple-400 mb-2 transform -translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  User Acceptance Testing (UAT)
                </h3>
                <p className="text-gray-200 mb-4 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  Dokumen yang berisi untuk memastikan bahwa perangkat lunak
                  yang dibuat dan dikembangkan memenuhi kebutuhan pengguna
                </p>
                <div className="flex space-x-2 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
                  <span className="px-2 py-1 bg-gray-800 text-xs rounded-full text-purple-300">
                    Spreadsheet
                  </span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div
              className="group relative overflow-hidden rounded-lg shadow-lg bg-[#1e1e1e] h-64"
              onClick={() => {
                const element = document.getElementById("project3");
                if (element) {
                  element.classList.toggle("mobile-active");
                }
              }}
            >
              <img
                src="/src/assets/fix.png"
                alt="Project 3"
                className="w-full h-full object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-110"
              />
              <div
                id="project3"
                className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center p-6"
              >
                <h3 className="text-xl font-bold text-purple-400 mb-2 transform -translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  UI/UX Task Management
                </h3>
                <p className="text-gray-200 mb-4 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  Kumpulan desain antarmuka pengguna untuk dijadikan sebuah web
                </p>
                <div className="flex space-x-2 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
                  <span className="px-2 py-1 bg-gray-800 text-xs rounded-full text-purple-300">
                    Figma
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="section4"
        className="min-h-screen bg-black py-16 px-4 flex items-center justify-center"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-2">
            Sertifikat
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Pencapaian dan pengakuan keterampilan yang telah saya peroleh
          </p>

          <div className="space-y-12">
            {/* Certificate 1 */}
            <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-102">
              <div className="flex flex-col md:flex-row">
                <div
                  className="md:w-1/3 h-64 overflow-hidden cursor-pointer relative"
                  onClick={() =>
                    openImageModal("/src/assets/ukk.jpg", "Certificate 1")
                  }
                >
                  <img
                    src="/src/assets/ukk.jpg"
                    alt="Certificate 1"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 backdrop-blur-md opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white bg-purple-500 bg-opacity-80 px-4 py-2 rounded-md text-sm font-medium">
                      Lihat Gambar
                    </span>
                  </div>
                </div>
                <div className="md:w-2/3 p-6 text-white">
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">
                    Uji Kompetensi Keahlian PKL
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Sertifikat ini diperoleh setelah menyelesaikan Uji
                    Kompetensi Keahlian (UKK), yang mengukur kemampuan saya
                    dalam bidang keahlian sesuai standar industri. Pencapaian
                    ini mencerminkan kompetensi saya dalam menghadapi tantangan
                    dunia kerja secara profesional.
                  </p>
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="mr-4">
                      PT. Curaweda Palagan Innotech - 2024
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificate 2 */}
            <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-102">
              <div className="flex flex-col md:flex-row">
                <div
                  className="md:w-1/3 h-64 overflow-hidden cursor-pointer relative"
                  onClick={() =>
                    openImageModal("/src/assets/pkl.jpg", "Certificate 2")
                  }
                >
                  <img
                    src="/src/assets/pkl.jpg"
                    alt="Certificate 2"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 backdrop-blur-md opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white bg-purple-500 bg-opacity-80 px-4 py-2 rounded-md text-sm font-medium">
                      Lihat Gambar
                    </span>
                  </div>
                </div>
                <div className="md:w-2/3 p-6 text-white">
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">
                    Praktik Kerja Lapangan
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Sertifikat ini menjadi bukti pengalaman saya selama Praktik
                    Kerja Lapangan (PKL), di mana saya mengembangkan
                    keterampilan teknis dan profesional secara langsung di
                    lingkungan industri. Pengalaman ini memperkuat pemahaman
                    saya tentang dunia kerja yang sesungguhnya
                  </p>
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="mr-4">
                      PT. Curaweda Palagan Innotech - 2024
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificate 3 */}
            <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-102">
              <div className="flex flex-col md:flex-row">
                <div
                  className="md:w-1/3 h-64 overflow-hidden cursor-pointer relative"
                  onClick={() =>
                    openImageModal("/src/assets/ukbi.jpg", "Certificate 3")
                  }
                >
                  <img
                    src="/src/assets/ukbi.jpg"
                    alt="Certificate 3"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 backdrop-blur-md opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white bg-purple-500 bg-opacity-80 px-4 py-2 rounded-md text-sm font-medium">
                      Lihat Gambar
                    </span>
                  </div>
                </div>
                <div className="md:w-2/3 p-6 text-white">
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">
                    Uji Kemahiran Berbahasa Indonesia
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Sertifikat ini diperoleh setelah mengikuti Uji Kemahiran
                    Berbahasa Indonesia (UKBI), yang mengukur kemampuan
                    berbahasa Indonesia secara lisan maupun tertulis. Hasil ini
                    mencerminkan penguasaan saya dalam memahami, menggunakan,
                    dan mengomunikasikan bahasa Indonesia secara efektif sesuai
                    standar nasional.
                  </p>
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="mr-4">Badan Bahasa - 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {showImageModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg p-4"
          onClick={closeImageModal}
        >
          <div
            className="relative max-w-4xl max-h-screen"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 bg-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              onClick={closeImageModal}
            >
              ✕
            </button>
            <img
              src={currentImage}
              alt={currentAlt}
              className="max-w-full max-h-screen object-contain rounded-lg"
            />
          </div>
        </div>
      )}
      <DownloadCvButton />
    </>
  );
}

export default Home;
