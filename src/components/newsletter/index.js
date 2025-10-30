import Check from '@/assets/Icons/check'
import React from 'react'

function Newsletter() {
    return (
        <section id="newsletter" className="py-16 bg-green-50">
            <div className="max-w-[88rem] mx-auto px-4 sm:px-6">
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get Fresh Updates</h2>
                            <p className="text-gray-600 mb-6">Subscribe to our newsletter for weekly updates on:</p>
                            <ul className="space-y-3">
                                {
                                    [
                                        'Seasonal produce alerts', 'Exclusive discounts', 'Healthy recipes', 'Farm fresh news'
                                    ].map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center gap-3">
                                                <span className=" text-green-600">
                                                    <Check />
                                                </span>
                                                <span className="text-gray-600">{item}</span>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                        <div>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-green-600" placeholder="Enter your name" />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-green-600" placeholder="Enter your email" />
                                </div>

                                <div className="flex items-start">
                                    <input type="checkbox" id="consent" className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                                    <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
                                        I agree to receive marketing communications from FreshHarvest
                                    </label>
                                </div>

                                <button type="submit" className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                                    Subscribe Now
                                </button>
                            </form>

                            <p className="text-sm text-gray-500 mt-4 text-center">
                                You can unsubscribe at any time. View our Privacy Policy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter
