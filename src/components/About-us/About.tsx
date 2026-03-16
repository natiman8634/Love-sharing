import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const About = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION TITLE */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            About Us
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* 1. YOUTUBE EMBED (Placed right after "About Us") */}
        <div className="max-w-4xl mx-auto mb-16 space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">
           Love-sharing department
          </h3>

          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white">
            <button
              onClick={() => setIsVideoOpen(!isVideoOpen)}
              className={`w-full flex items-center justify-between p-4 transition-colors ${
                isVideoOpen ? "bg-gray-50/80" : "bg-white"
              } hover:bg-gray-50`}
            >
              <div className="flex items-center gap-3">
                {/* EXACT YOUTUBE FLAT ICON */}
                <div className="bg-[#cc0000] p-1.5 rounded-[4px] flex items-center justify-center shadow-sm">
                  <svg 
                    viewBox="0 0 24 24" 
                    width="18" 
                    height="18" 
                    fill="white"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                <span className="text-[#2D3E50] font-medium text-lg">
                  ስለ እኛ በ video
                </span>
              </div>
              {isVideoOpen ? (
                <ChevronUp className="text-[#1A2E44] w-6 h-6" />
              ) : (
                <ChevronDown className="text-gray-400 w-6 h-6" />
              )}
            </button>

            {/* VIDEO PANEL */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isVideoOpen ? "max-h-[600px] border-t border-gray-200" : "max-h-0"
              }`}
            >
              <div className="p-4 md:p-8 bg-[#FDF7F2]">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-[6px] border-[#F9D7C1]">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/m8QHzsO5y4E" 
                    title="Love-sharing department video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. TEXT & IMAGE CONTENT (Grid Layout) */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT — TEXT */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              የፍቅር አጋሪዎች
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              LoveSharing ፍቅርን መሰረት ያደረገ የተማሪዎች ህብረት ነው ። አብ ዘላለማዊ ፍቅሩን ልጁን በመስጠት እንዳሳየን ፣ 
              እኛም ካለን ከተሰጠን ጊዜ እና ገንዘብ ላይ ለሰዎች በማካፈል ፍቅራችንን እናሳያለን ። የገንዘብ እና የቁሳቁስ ድጋፍ 
              እያደረግን የእግዚአብሄርን አብሮነት እንገልጣለን ።  
<br />  <br />
              ይህ የተማሪዎች ህብረት የተመሰረተው የወንጌልን ፍቅር ለተማሪዎች እና ለህብረተሰቡ ለማጋራት ነው። 
              በተለያዩ ዘርፎች ማለትም በህጻናት፣ በታማሚዎች እና በታራሚዎች አገልግሎት ላይ በትጋት እንሰራለን።
            </p>

            <p className="text-gray-700 font-semibold italic border-l-4 border-yellow-400 pl-4">
              አላማችን በንፁህ ፍቅር እና ወንድማማችነት ጠንካራ ማኅበረሰብን መፍጠር ነው።
            </p>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="relative">
            <img
              src="/about.jpg"
              alt="About LoveSharing"
              className="rounded-3xl shadow-2xl w-full object-cover border-8 border-gray-50"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;