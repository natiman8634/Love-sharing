import { useEffect, useState } from "react";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import hero5 from "../assets/IMG_9780.jpeg";
import hero6 from "../assets/IMG_9767.jpeg";
import hero7 from "../assets/20250610_182355.jpg";

const images = [hero5, hero1, hero2, hero7, hero6, hero3, hero4];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden flex flex-col justify-center bg-white"
    >
      <div className="relative w-full h-[60dvh] md:h-screen transition-all duration-500">
        
        {/* SLIDER IMAGES */}
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Hero slide ${index + 1}`}
            draggable="false"
            className={`
              absolute inset-0
              w-full h-full
              object-cover 
              object-center
              transition-opacity duration-1000 ease-in-out
              ${index === current ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50 md:bg-black/60" />

        {/* CONTENT */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-3xl sm:text-5xl md:text-8xl font-extrabold tracking-tight drop-shadow-2xl">
            Love <span className="text-yellow-400">Sharing</span>
          </h1>

          <p className="mt-3 md:mt-6 text-sm sm:text-lg md:text-2xl font-medium max-w-[280px] sm:max-w-2xl mx-auto drop-shadow-md leading-snug">
            የእግዚአብሄርን <span className="text-red-400 font-bold">ፍቅር </span>
            መሰረት ያደረገ ፍቅርን ለማጋራት የተመሰረተ የተማሪዎች አገልግሎት
          </p>

          <div className="mt-6 md:mt-10">
            <a
              href="#join"
              onClick={(e) => handleSmoothScroll(e, "join")}
              className="inline-block bg-white text-gray-900 px-6 py-2.5 md:px-10 md:py-4 rounded-full font-bold text-sm md:text-lg shadow-xl hover:scale-105 transition-transform"
            >
              Join Our Mission
            </a>
          </div>
        </div>

        {/* PAGINATION DOTS (The "Small Balls") */}
        <div className="absolute bottom-6 md:bottom-10 w-full flex justify-center gap-1.5 md:gap-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-500 rounded-full ${
                current === index 
                  ? "bg-yellow-400 w-6 h-1.5 md:w-12 md:h-3 shadow-[0_0_10px_rgba(250,204,21,0.8)]" 
                  : "bg-yellow-400/30 w-1.5 h-1.5 md:w-3 md:h-3 hover:bg-yellow-400/60" 
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;