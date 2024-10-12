import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-700 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="text-3xl font-bold text-yellow-300 ">
              MGC
              <span className="block text-sm text-gray-200">DEVELOPMENTS</span>
            </h2>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg text-yellow-300 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className={`inline-block py-2 relative text-white transition-colors hover:text-white after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-white after:w-full after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100`}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`inline-block py-2 relative text-white transition-colors hover:text-white after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-white after:w-full after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100`}
                >
                  Offers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`inline-block py-2 relative text-white transition-colors hover:text-white after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-white after:w-full after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100`}
                >
                  Realtors
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`inline-block py-2 relative text-white transition-colors hover:text-white after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-white after:w-full after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100`}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`inline-block py-2 relative text-white transition-colors hover:text-white after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-white after:w-full after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100`}
                >
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg text-yellow-400 font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className={`inline-block py-2 relative text-white transition-colors hover:text-white after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-white after:w-full after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100`}
                >
                  Site Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`inline-block py-2 relative text-white transition-colors hover:text-white after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-white after:w-full after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100`}
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`inline-block py-2 relative text-white transition-colors hover:text-white after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-white after:w-full after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100`}
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg text-yellow-400 font-semibold mb-4">Location</h3>
            <ul className="space-y-2">
              <li className="text-white text-sm">Link goes here</li>
              <li className="text-white text-sm">Link goes here</li>
              <li className="text-white text-sm">Link goes here</li>
              <li className="text-white text-sm">Link goes here</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-yellow-300 font-semibold mb-4">Find us on Social Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-300 transition-colors text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors text-white">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors text-white">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors text-white">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-yellow-300 text-center text-sm">
          <p className="text-white text-center">&copy; MGC Copyright 2023 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
