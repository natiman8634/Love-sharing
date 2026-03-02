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

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="
        relative w-full flex items-center justify-center overflow-hidden
        h-[100dvh] md:h-screen
      "
    >
      {/* SLIDER IMAGES */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Hero slide ${index + 1}`}
          draggable="false"
          loading="lazy"
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

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/65" />

      {/* CONTENT */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold">
          Love <span className="text-yellow-400">Sharing</span>
        </h1>

        <p className="mt-6 text-base md:text-lg">
          የእግዚአብሄርን <span className="text-red-400">ፍቅር </span>
          መሰረት ያደረገ ፍቅርን ለማጋራት የተመሰረተ የተማሪዎች አገልግሎት
        </p>

        
          <a
            href="#join"
            className="mt-8 inline-block bg-white text-pink-900 px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            Join Our Mission
          </a>
        
      </div>

      {/* DOTS */}
      <div className="absolute bottom-8 flex gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${current === index ? "bg-white scale-125" : "bg-white/40"
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;