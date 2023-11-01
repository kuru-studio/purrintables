import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Input } from "antd";

const Footer = () => {
  return (
    <footer className="bg-[#f8efe6]">
      <div className="container mx-auto border-t border-gray-300 text-sm text-gray-600 flex flex-col gap-5 pb-5">
        <div className="md:flex mx-5">
          <div className="flex-1 mt-5">
            <div className="font-bold text-black text-left">Info</div>
            <div className="flex flex-col mt-5 gap-2">
              <a href="#" className="text-[#a6a6a6] hover:text-black transition-all">About Purrintables</a>
              <a href="#" className="text-[#a6a6a6] hover:text-black transition-all">Contact Us</a>
              <a href="#" className="text-[#a6a6a6] hover:text-black transition-all">News & FAQ</a>
              <a href="#" className="text-[#a6a6a6] hover:text-black transition-all">Shipping Policy</a>
              <a href="#" className="text-[#a6a6a6] hover:text-black transition-all">Refund Policy</a>
              <a href="#" className="text-[#a6a6a6] hover:text-black transition-all">Terms of Service</a>
            </div>
          </div>
          <div className="flex-1 mt-5">
            <div className="font-bold text-black md:text-center">Follow Us</div>
            <div className="md:flex md:gap-3 md:justify-center mt-5">
              <a href="https://www.facebook.com/purrintables" target="_blank" className="text-[#a6a6a6] hover:text-black transition-all"><FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" /></a>
              <a href="https://www.instagram.com/purrintables" target="_blank" className="text-[#a6a6a6] hover:text-black transition-all"><FontAwesomeIcon icon={faInstagram} className="w-5 h-5" /></a>
              <a href="https://www.tiktok.com/@purrintables" target="_blank" className="text-[#a6a6a6] hover:text-black transition-all"><FontAwesomeIcon icon={faTiktok} className="w-5 h-5" /></a>
              <a href="https://www.youtube.com/@purrintables" target="_blank" className="text-[#a6a6a6] hover:text-black transition-all"><FontAwesomeIcon icon={faYoutube} className="w-5 h-5" /></a>
            </div>
          </div>
          <div className="flex-1 mt-5">
            <div className="font-bold text-black md:text-right">Newsletter</div>
            <div className="mt-5 text-[#a6a6a6] md:text-right">Sign up for the latest news, offers and more!</div>
            <div className="md:ml-auto mt-5 md:w-72">
              <Input
                className="!rounded-none md:text-right"
                size="large"
                placeholder="Your email"
              />
            </div>
            <div className="md:text-right mt-5">
              <button className="bg-[#b0aacc] uppercase font-bold text-white px-5 py-3 text-lg inline-block border-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="md: text-center">Copyright &copy; 2023, Purrintables.</div>
      </div>
    </footer>
  );
}

export default Footer;
