import { useState } from "react";

import children from "../assets/20250610_182355.jpg";
import funding from "../assets/funding.jpg";
import bible from "../assets/bible.jpg";
import treatment from "../assets/treatment.jpg";
import prison from "../assets/hero2.jpg";

const teams = [
  {
    name: "Children",
    image: children,
    description: "ህጻናትን በፍቅር እና በእንክብካቤ የሚያስተምሩ የተማሪዎች ህብረት።",
    works: [
      "ለህጻናት በየሳምንቱ የመጽሃፍ ቅዱስ ትምህርት የሚስተማሩ ናቸው። ",
      "በትምህርታቸው ላይ ለልጆች እገዛ ያደርጋሉ።",
      "ማንኛውም ድጋፍ የሚያስፈልገውን ህጻን ይደግፋሉ።",
    ],
  },
  {
    name: "Funding",
    image: funding,
    description: "የገቢ ምንጭ የሆኑ የተማሪዎች ህብረት።",
    works: [
      "የእሁድ ዳቦን ከግቢ በማውጣት እና በመሸጥ ያገለግላሉ።",
      "በበአላት ወቅት ፖስት ካርዶችን በማዘጋጀት እና በመሸጥ ገቢን ያስገኛሉ።",
      "ገቢን የሚያስገኙ ፕሮግራሞችን በመፍጠር የገቢ ምንጭ ይሆናሉ ።",
    ],
  },
  {
    name: "Bible Study",
    image: bible,
    description: "መንፈሳዊ እድገትን የሚፈጥሩ የተማሪዎች ህብረት።",
    works: [
      "በየሳምንቱ የመጽሃፍ ቅዱስ ጥናት የሚያደርጉ ህብረት ናቸው። ",
      "መጽሃፍ ቅዱስን መሰረት ያደረጉ ትምህርቶችን ያዘጋጃሉ።",
      "ከህብረቱ የሚመጡትን ጥያቄዎች ቃሉን መሰረት በማድረግ ይመልሳሉ።"
    ],
  },
  {
    name: "Treatment",
    image: treatment,
    description: "የታመሙትን እና በእድሜ የገፉትን የሚያገለግሉ የተማሪዎች ህብረት።",
    works: [
      "ታመው በህክምና ቦታዎች እና በቤት ያሉትን በአካል በመሄድ ያገኛሉ ።",
      "ለተማሪዎች የገንዘብ እና የቁሳቁስ ድጋፍ ያደርጋሉ ።",
      "ታመው ላሉት ፀሎት ያደርጋሉ ፣ በቃሉ ያበረታሉ ፣ ወንጌልን ይሰብካሉ ።",
      "በግቢ ታመው ያሉትን በዶርማችው በመሄድ ይጠይቃሉ ።",
    ],
  },
  {
    name: "Prison",
    image: prison,
    description: "የህግ ታራሚዎችን የሚጎበኙ የተማሪዎች ህብረት።",
    works: [
      "ፕሮግራሞችን በማዘጋጀት ታራሚዎችን ይጎበኛሉ።",
      "ታራሚዎችን በቁሳቁስ ይደግፋሉ።",
      "ላላመኑ ታራሚዎች ወንጌልን በመስበክ ያገለግላሉ።"
    ],
  },
];

const Teams = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="teams" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our Teams
          </h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* TEAM GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teams.map((team, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div
                key={index}
                className={`
                  bg-white rounded-2xl shadow-lg overflow-hidden 
                  /* Removed rotation - kept smooth scale and shadow transition */
                  transition-all duration-500 ease-in-out
                  relative border border-gray-100
                  ${isOpen 
                    ? "scale-[1.02] shadow-2xl ring-2 ring-orange-500 z-10" 
                    : "hover:shadow-xl z-0"
                  }
                `}
              >
                {/* IMAGE */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={team.image}
                    alt={team.name}
                    className={`w-full h-full object-cover transition-transform duration-700 ${isOpen ? 'scale-110' : 'scale-100'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 text-xl font-bold text-white">
                    {team.name}
                  </h3>
                </div>

                {/* CONTENT */}
                <div className="p-6 text-center">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {team.description}
                  </p>

                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={`mt-5 px-8 py-2 rounded-full font-bold text-sm transition-all active:scale-95 shadow-md ${
                        isOpen 
                        ? "bg-gray-800 text-white" 
                        : "bg-orange-600 text-white hover:bg-orange-700"
                    }`}
                  >
                    {isOpen ? "ለመመለስ" : "አገልግሎቱን ለመመልከት"}
                  </button>

                  {/* WORK LIST - Fast and snappy reveal */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[500px] opacity-100 mt-6" : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="text-left text-gray-700 bg-orange-50/50 space-y-3 p-5 rounded-xl border border-orange-100">
                      {team.works.map((work, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm leading-snug">
                          <span className="text-orange-600 font-bold">•</span>
                          {work}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Teams;