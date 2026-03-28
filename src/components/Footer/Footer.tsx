import logo from "../../assets/Footer-images/lovesharing-footer-logo.png";

import telegram from "../../assets/Footer-images/Telegram-icon.png";
import cbe from "../../assets/Footer-images/Commercial Bank of Ethiopia Logo .png";
import locationIcon from "../../assets/Footer-images/location-icon.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* ABOUT */}
        <div>
          <a href="#home">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <img src={logo} className="h-12" alt="Lovesharing Logo" />
              <span>Lovesharing</span>
            </h3>
          </a>

          <p className="text-gray-400 leading-relaxed">
            ፍቅርን የሚያጋሩ የክርስቲያን ተማሪዎች ህብረት።
          </p>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            መገኛችን
          </h3>

          <ul className="space-y-4 text-gray-400">

            {/* LOCATION */}
            <li className="flex items-center gap-3">
  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition">
    <img
      src={locationIcon}
      alt="Location"
      className="w-5 h-5 object-contain"
    />
  </div>

  <span className="text-white">አርባ ምንጭ ዩኒቨርስቲ , Main-Campus</span>
</li>

            {/* TELEGRAM */}
            <li className="flex items-center gap-3">
              <a
                href="https://t.me/love_sharingamuecsf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition"
              >
                <img
                  src={telegram}
                  alt="Telegram"
                  className="w-5 h-5 object-contain"
                />
              </a>
              <a href="https://t.me/love_sharingamuecsf"><span className="text-white">የቴሌግራም ቻናላችን</span></a>
              
            </li>

          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            Support Us
          </h3>

          <div className="flex items-center gap-4">

            {/* BANK LOGO */}
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition">
              <img
                src={cbe}
                alt="Commercial Bank"
                className="w-7 h-7 object-contain"
              />
            </div>

            {/* BANK TEXT */}
            <div className="text-gray-400">
              <p className="font-semibold text-white">
                Commercial Bank of Ethiopia
              </p>
              <p className="text-sm">
                Account: <span className="font-medium text-white">1000690607836</span>
              </p>
            </div>

          </div>
        </div>


      </div>

      {/* BOTTOM LINE */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        © 2026 Lovesharing . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;