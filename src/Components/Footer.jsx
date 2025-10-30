import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [isPropertyDropdownOpen, setIsPropertyDropdownOpen] = useState(false);

  return (
    <footer className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white pt-16">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">NobleHome Galle</h2>
          <p className="text-sm text-gray-200 mb-4">
            Discover exceptional living in Galle with NobleHome. Curated
            properties for every lifestyle.
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-blue-500 transition">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://wa.me/94778354380" target="_blank"   rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <button
                onClick={() =>
                  setIsPropertyDropdownOpen(!isPropertyDropdownOpen)
                }
                className="hover:underline cursor-pointer"
              >
                Property
              </button>
              {isPropertyDropdownOpen && (
                <ul className="ml-4 mt-2 space-y-1">
                  <li>
                    <a href="/land" className="hover:underline">
                      Land
                    </a>
                  </li>
                  <li>
                    <a href="/house" className="hover:underline">
                      House
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Sales Support */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Sales Support</h2>
          <p className="text-sm">
            <strong>Phone:</strong> +(94) 77 835 4380
          </p>
          <p className="text-sm mt-2">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:noblehomegalle15@gmail.com"
              className="hover:underline"
            >
              noblehomegalle15@gmail.com
            </a>
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Subscribe</h2>
          <p className="text-sm text-gray-200 mb-4">
            Sign up for the latest property updates and exclusive offers.
          </p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md text-black focus:outline-none"
            />
            <button className="bg-white text-purple-700 font-semibold px-4 py-2 rounded-md hover:bg-gray-200 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-gray-200 mt-12 pb-6 border-t border-white border-opacity-20 text-sm">
        &copy; {new Date().getFullYear()} NobleHome Galle. Developed by
        LegionCode IT Solutions.
      </div>
    </footer>
  );
};

export default Footer;
