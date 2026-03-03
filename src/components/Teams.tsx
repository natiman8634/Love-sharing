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
  // which card is open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="teams" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Our Teams
          </h2>
        </div>

        {/* TEAM GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teams.map((team, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl"
            >
              {/* IMAGE */}
              <img
                src={team.image}
                alt={team.name}
                className="w-full h-56 object-cover"
              />

              {/* CONTENT */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold">{team.name}</h3>

                <p className="text-gray-600 mt-3">
                  {team.description}
                </p>

                {/* BUTTON */}
                <button
                  onClick={() =>
                    setOpenIndex(
                      openIndex === index ? null : index
                    )
                  }
                  className="mt-5 px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-yellow-700 transition"
                >
                  {openIndex === index
                    ? "ለመመልስ"
                    : "አገልግሎቱን ለመመልከት"}
                </button>

                {/* WORK LIST */}
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    openIndex === index
                      ? "max-h-60 opacity-100 mt-5"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="text-gray-600 bg-orange-50 space-y-2 text-sm mt-4 p-4 rounded-lg">
                    {team.works.map((work, i) => (
                      <li key={i}>• {work}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Teams;