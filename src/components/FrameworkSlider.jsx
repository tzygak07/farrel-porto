import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const frameworks = [
  { name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", image: "https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png" },
  { name: "Bootstrap", url: "https://getbootstrap.com/", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png" },
  { name: "React", url: "https://reactjs.org/", image: "https://michaelwashburnjr.com/hubfs/Imported_Blog_Media/react-icon_svg_.png" },
  { name: "Laravel", url: "https://laravel.com/", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/800px-Laravel.svg.png" },
  { name: "Figma", url: "https://www.figma.com/", image: "/assets/figma.png" },
  { name: "Python", url: "https://www.python.org/", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png" },
  { name: "MySQL", url: "https://www.mysql.com/", image: "https://upload.wikimedia.org/wikipedia/id/a/a9/MySQL.png" },
  { name: "PHP", url: "https://www.php.net/", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png" },
  { name: "Tailwind", url: "https://tailwindcss.com/", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" },
];

function FrameworkSlider() {
  const [slidesPerView, setSlidesPerView] = useState(2);
  const [imageHeight, setImageHeight] = useState("h-20");
  const [containerPadding, setContainerPadding] = useState("p-4");

  useEffect(() => {
    // Function to update values based on screen size
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // Mobile view
        setSlidesPerView(1.5);
        setImageHeight("h-14");
        setContainerPadding("p-3");
      } else if (window.innerWidth < 768) {
        // Small tablet view
        setSlidesPerView(1.8);
        setImageHeight("h-16");
        setContainerPadding("p-3");
      } else {
        // Desktop view - keep original settings
        setSlidesPerView(2);
        setImageHeight("h-20");
        setContainerPadding("p-4");
      }
    };

    // Set initial values
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-black text-white py-6 md:py-10">
      <h2 className="text-center text-xl md:text-2xl font-bold mb-1 md:mb-2">Apa yang saya gunakan?</h2>
      <p className="text-center text-gray-400 text-sm md:text-base mb-3 md:mb-4">
        Beberapa <span className="italic">tools</span> yang saya gunakan 🛠️
      </p>

      <div className="relative">
        <Swiper
          modules={[Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={slidesPerView}
          spaceBetween={window.innerWidth < 640 ? 20 : 50}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          autoplay={{ delay: 1450 }}
          pagination={{ 
            clickable: true,
            el: '.custom-pagination'
          }}
          loop={true}
          className="w-full max-w-xs sm:max-w-lg md:max-w-2xl mx-auto pb-8 md:pb-12"
        >
          {frameworks.map((item, index) => (
            <SwiperSlide key={index} className="pb-6 md:pb-8">
              <div className={`bg-[#1e1e1e] rounded-lg md:rounded-xl ${containerPadding} text-center shadow-lg`}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`mx-auto ${imageHeight} mb-1 md:mb-2 object-contain`}
                  />
                </a>
                <h3 className="text-base md:text-lg font-semibold mb-0.5 md:mb-1">{item.name}</h3>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-purple-400 hover:underline"
                >
                  Tuju!
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination mt-4 md:mt-8 flex justify-center"></div>
      </div>
    </div>
  );
}

export default FrameworkSlider;