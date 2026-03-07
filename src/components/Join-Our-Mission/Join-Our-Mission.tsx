import {
  HelpCircle,
  ListChecks,
  CalendarDays,
} from "lucide-react";

export default function EthiopiaSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT IMAGE */}
        <div id="join" className="flex justify-center">
          <img
            src="/ethiopia-student.png"   // put image in public folder
            alt="Student"
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2  className="text-5xl font-bold leading-tight">
            <span className="text-orange-600">
              በንጹህ ፍቅር እና በበጎ ፈቃድ ለሚሳተፉ ብቻ 
            </span>
          </h2>

          <p className="text-gray-600 mt-6 text-lg">
            
            <b>እኛን መቀላቀል ለምትፈልጉ ማወቅ ያሉባችሁ ነገሮች </b> <br />
            በሙሉ ልብ ለአገልግሎቱ በመሰጠት ማገልገል ፣ የተሰጠንን አገልግሎት በታማኝነት እና በትጋት መወጣት ፣ ባለንበት ቡድን ውስጥ በፍቅር እና በአብሮነት መስራት ፣ ቋሚ በሆኑ የፕሮግራም ቀኖች ላይ ባለማርፈድ በሰአታችን መገኘትን ያካትታል ። 
          </p>

          {/* INFO CARDS */}
          <div className="space-y-6 mt-10">

            {/* CARD 1 */}
            <div className="bg-white rounded-xl border p-6 flex gap-4 shadow-sm">
              <HelpCircle className="text-orange-500 w-10 h-10" />

              <div>
                <h3 className="font-semibold text-lg">
                 እኛን ማን መቀላቀል ይችላል ?
                </h3>
                <p className="text-gray-600">
                  በንጹህ ልብ እና ፈቃድ ጊዜውን ለአገልግሎቱ መስጠት የሚችል/የምትችል ማንኛውም ተማሪ
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-xl border p-6 flex gap-4 shadow-sm">
              <ListChecks className="text-orange-500 w-10 h-10" />

              <div>
                <h3 className="font-semibold text-lg">
                  እንዴት አባል መሆን ይቻላል ?
                </h3>
                <p className="text-gray-600">
                  በዲፓርትመንቱ የሚሰጡትን መመዘኛዎች ያለፈ/ያለፈች ማንኛውም ተማሪ የ Lovesharing ዲፓርትመንት አባል መሆን ይችላል ።
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-xl border p-6 flex gap-4 shadow-sm">
              <CalendarDays className="text-orange-500 w-10 h-10" />

              <div>
                <h3 className="font-semibold text-lg">
                 ስለ አገልግሎቱ ሰአት እና ቦታ እንዴት ማወቅ ይቻላል ?
                </h3>
                <p className="text-gray-600">
                  የአገልግሎቱ ሰአት እና ቦታ በዲፓርትመንት መሪዎች በቴሌግራም ስለሚነገር በንቃት መከታተል ያስፈልጋል ። <br /> <span className="font-semibold">ቋሚ የሆኑ ፕሮግራሞች ሰአታቸውን ጠብቀው ይካሄዳሉ ።</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}