import { useState } from "react";
import { FaDownload } from "react-icons/fa";

function DownloadCvButton() {
  const handleDownload = () => {
    const fileUrl = "https://drive.google.com/uc?export=download&id=1JK_uHWbHDnOj3yBgVWLhzazpVRpPETId";
    window.location.href = fileUrl; // Mengarahkan user langsung ke link download
  };

  return (
    <button
      onClick={handleDownload}
      className="fixed bottom-12 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-center bg-purple-700 text-white rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-105 md:right-20 md:left-auto md:transform-none md:px-5 md:py-3 px-4 py-2 text-sm md:text-base"
    >
      <FaDownload className="mr-2" />
      <span>Unduh Daftar Riwayat Hidup</span>
    </button>
  );
}

export default DownloadCvButton;