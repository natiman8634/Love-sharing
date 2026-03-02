import logo from "../assets/logo.png";
import telegram from "../assets/telegram.png";
const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* ABOUT */}
        <div>
           
          <h3 className="text-xl font-bold text-white mb-4">
              <img src={logo} className="h-12 mb-4" />
            Lovesharing
          </h3>

          <p className="text-gray-400 leading-relaxed">
            ፍቅርን የሚያጋሩ የክርስቲያን ተማሪዎች ህብረት።
          </p>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            መገኛችን
          </h3>

          <ul className="space-y-3">
            <li>📍 አርባ ምንጭ ዩኒቨርስቲ , Main-Campus</li>
            <li> <a href="https://t.me/c/2360570330/1" className="flex items-center">
              <img src={telegram} className="h-5 mr-2" />
              Love-sharing Telegram Group
            </a> </li>
            
           
          </ul>
        </div>

        {/* SOCIAL MEDIA */}
        

      </div>

      {/* BOTTOM LINE */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        © 2026 Lovesharing . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;