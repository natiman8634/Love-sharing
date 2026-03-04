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

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden flex flex-col justify-center bg-white"
    >
      {/* 1. Removed fixed aspect ratio to prevent horizontal cutting.
          2. On mobile, we use a height that fits the content without black bars.
          3. On desktop (md:), we keep the full-screen hero feel.
      */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-screen transition-all duration-500">
        
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
              /* Changed to object-cover to fill the space and remove black bars */
              object-cover 
              object-center
              transition-opacity duration-1000 ease-in-out
              ${index === current ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}

        {/* DARK OVERLAY - Ensures text is readable over the images */}
        <div className="absolute inset-0 bg-black/45 md:bg-black/60" />

        {/* CONTENT */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight drop-shadow-2xl">
            Love <span className="text-yellow-400">Sharing</span>
          </h1>

          <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-2xl font-medium max-w-2xl mx-auto drop-shadow-md">
            የእግዚአብሄርን <span className="text-red-400 font-bold">ፍቅር </span>
            መሰረት ያደረገ ፍቅርን ለማጋራት የተመሰረተ የተማሪዎች አገልግሎት
          </p>

          <div className="mt-8">
            <a
              href="#join"
              className="inline-block bg-white text-gray-900 px-8 py-3 md:px-10 md:py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform"
            >
              Join Our Mission
            </a>
          </div>
        </div>

        {/* MOVING BALLS (DOTS) 
            Positioned 'absolute bottom-8' to stay inside the image area 
        */}
        <div className="absolute bottom-8 w-full flex justify-center gap-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 rounded-full ${
                current === index 
                  ? "bg-white w-8 h-2" // Active pill shape
                  : "bg-white/40 w-2 h-2 hover:bg-white/70" // Inactive circle
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;