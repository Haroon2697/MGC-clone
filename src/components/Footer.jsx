import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black/90 via-black/90 to-black/85 text-gray-400 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="text-3xl font-bold text-amber-500">
              MGC
              <span className="block text-sm text-gray-200">DEVELOPMENTS</span>
            </h2>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg text-gray-200 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gray-100 transition-colors text-sm">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100 transition-colors text-sm">Offers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100 transition-colors text-sm">Realtors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100 transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100 transition-colors text-sm">Events</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg text-gray-200 font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gray-100 transition-colors text-sm">Site Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100 transition-colors text-sm">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100 transition-colors text-sm">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg text-gray-200 font-semibold mb-4">Location</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Link goes here</li>
              <li className="text-gray-400 text-sm">Link goes here</li>
              <li className="text-gray-400 text-sm">Link goes here</li>
              <li className="text-gray-400 text-sm">Link goes here</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Find us on Social Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-100 transition-colors text-gray-400">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-gray-100 transition-colors text-gray-400">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-gray-100 transition-colors text-gray-400">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-gray-100 transition-colors text-gray-400">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-gray-100 transition-colors text-gray-400">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-600 text-center text-sm">
          <p>&copy; MGC Copyright 2023 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
