import {
  HeartHandshake,
  HandCoins,
  BookOpen,
  Stethoscope,
} from "lucide-react";

const purposes = [
  {
    icon: <HeartHandshake size={32} />,
    title: "ፍቅርን ማጋራት",
    desc: "የእግዚአብሄርን ፍቅር በሁሉም ሰው ላይ ማስረጽ።"
  },
  {
    icon: <HandCoins size={32} />,
    title: "የገንዘብ እገዛ ማድርግ ",
    desc: "አቅመ ደካሞችን እና ታማሚዎችን በገንዘብ መደገፍ።"
  },
  {
    icon: <BookOpen size={32} />,
    title: "ቃሉን አውቆ የሚያድግ ትውልድን መፍጠር",
    desc: "የእግዚአብሄርን ቃል ለልጆች ማስተማር።"
  },
  {
    icon: <Stethoscope size={32} />,
    title: "የታመሙትን መጠየቅ",
    desc: "ታመው በህክምና ቦታዎች እና በቤት ያሉትን በአካል በመሄድ መጠየቅ እና መደገፍ።"
  },
];

const Purpose = () => {
  return (
    <section id="purpose" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-gray-900">
          አላማችን
        </h2>

        

        {/* PURPOSE CARDS */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          {purposes.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-blue-600 flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Purpose;