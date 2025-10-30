import WhatsappIcon from '@/assets/Icons/whatsapp'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <footer id="footer" className="bg-gray-900 text-gray-300">
            <div className="max-w-[88rem] mx-auto px-4 sm:px-6">
                {/* Main Footer */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">FreshHarvest</h3>
                        <p className="mb-4">Fresh vegetables delivered from local farms to your doorstep.</p>
                        <div className="flex space-x-4">
                            <Link
                                href="https://wa.me/919004101806?text=Hello,%20I'm%20interested%20to%20book%20your%20hair%20care%20service.%20Can%20you%20explain%20the%20price?"
                                className="text-neutral-400 hover:text-green-600"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <WhatsappIcon width={26} height={26} />
                            </Link>
                            <a href="#" className="hover:text-white"><i className="fa-brands fa-facebook text-xl"></i></a>
                            <a href="#" className="hover:text-white"><i className="fa-brands fa-twitter text-xl"></i></a>
                            <a href="#" className="hover:text-white"><i className="fa-brands fa-instagram text-xl"></i></a>
                            <a href="#" className="hover:text-white"><i className="fa-brands fa-pinterest text-xl"></i></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">Shop Now</a></li>
                            <li><a href="#" className="hover:text-white">Farm Partners</a></li>
                            <li><a href="#" className="hover:text-white">Recipes</a></li>
                            <li><a href="#" className="hover:text-white">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Customer Service</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">My Account</a></li>
                            <li><a href="#" className="hover:text-white">Track Order</a></li>
                            <li><a href="#" className="hover:text-white">Shipping Policy</a></li>
                            <li><a href="#" className="hover:text-white">Returns & Refunds</a></li>
                            <li><a href="#" className="hover:text-white">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <i className="fa-solid fa-phone"></i>
                                <span>1-800-FRESH-VEG</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="fa-solid fa-envelope"></i>
                                <span>support@freshharvest.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="fa-solid fa-location-dot"></i>
                                <span>123 Fresh Street, Green City</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-gray-800 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-sm mb-4 md:mb-0">
                            © 2024 FreshHarvest. All rights reserved.
                        </div>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="text-sm hover:text-white">Privacy Policy</a>
                            <a href="#" className="text-sm hover:text-white">Terms of Service</a>
                            <a href="#" className="text-sm hover:text-white">Sitemap</a>
                        </div>
                        <div className="flex items-center space-x-2 mt-4 md:mt-0">
                            <i className="fa-solid fa-lock text-green-500"></i>
                            <span className="text-sm">Secure Payments</span>
                            <i className="fa-brands fa-cc-visa text-2xl"></i>
                            <i className="fa-brands fa-cc-mastercard text-2xl"></i>
                            <i className="fa-brands fa-cc-paypal text-2xl"></i>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
