const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            About Us
          </h2>

          
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT — TEXT */}
          <div>


            <h2 className="text-2xl font-bold text-gray-900">
             የፍቅር አጋሪዎች
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              LoveSharing ፍቅርን መሰረት ያደረገ የተማሪዎች ህብረት ነው ። አብ ዘላለማዊ ፍቅሩን ልጁን በመስጠት እንዳሳየን ፣ እኛም ካለን ከተሰጠን ጊዜ እና ገንዘብ ላይ ለሰዎች በማካፈል ፍቅራችንን እናሳያለን ። የገንዘብ እና የቁሳቁስ ድጋፍ እያደረግን የእግዚአብሄርን አብሮነት እንገልጣለን ።  
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              <b>አላማችን በንፁህ ፍቅር እና ወንድማማችነት ጠንካራ ማኅበረሰብን መፍጠር ነው።</b>
          
            </p>
            
          </div>

          {/* RIGHT — IMAGE */}
          <div>
            <img
              src="/about.jpg"
              alt="About LoveSharing"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;