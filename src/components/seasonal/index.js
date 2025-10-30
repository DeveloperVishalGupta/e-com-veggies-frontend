import Gift from '@/assets/Icons/gift'
import Seedling from '@/assets/Icons/seedling'
import Sun from '@/assets/Icons/sun'
import React from 'react'

function Seasonal() {
    return (
        <section id="seasonal" className="py-16 bg-green-50">
            <div className="max-w-[88rem] mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <span className="text-green-600 font-semibold">{`Season's Best`}</span>
                    <h2 className="text-3xl font-bold text-gray-800 mt-2">Seasonal Vegetables</h2>
                    <p className="text-gray-600 mt-2">Fresh picks from local farms this season</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Spring Collection */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-green-100 p-8 flex items-center justify-center">
                            <span className="text-green-600">
                                <Seedling width={60} height={60} />
                            </span>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-gray-800">Spring Collection</h3>
                                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">In Season</span>
                            </div>
                            <ul className="space-y-2">
                                <li className="flex items-center justify-between">
                                    <span className="text-gray-600">Fresh Asparagus</span>
                                    <span className="font-semibold">$4.99/bundle</span>
                                </li>
                                <li className="flex items-center justify-between">
                                    <span className="text-gray-600">Spring Onions</span>
                                    <span className="font-semibold">$2.99/bunch</span>
                                </li>
                                <li className="flex items-center justify-between">
                                    <span className="text-gray-600">Baby Spinach</span>
                                    <span className="font-semibold">$3.49/pack</span>
                                </li>
                            </ul>
                            <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                                Shop Collection
                            </button>
                        </div>
                    </div>

                    {/* Summer Favorites */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-yellow-50 p-8 flex items-center justify-center">
                            <span className="text-yellow-500">
                                <Sun width={60} height={60} />
                            </span>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-gray-800">Summer Favorites</h3>
                                <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm">Coming Soon</span>
                            </div>
                            <ul className="space-y-2">
                                <li className="flex items-center justify-between">
                                    <span className="text-gray-600">Heirloom Tomatoes</span>
                                    <span className="font-semibold">$5.99/kg</span>
                                </li>
                                <li className="flex items-center justify-between">
                                    <span className="text-gray-600">Sweet Corn</span>
                                    <span className="font-semibold">$1.99/piece</span>
                                </li>
                                <li className="flex items-center justify-between">
                                    <span className="text-gray-600">Bell Peppers</span>
                                    <span className="font-semibold">$4.49/kg</span>
                                </li>
                            </ul>
                            <button className="w-full mt-6 bg-gray-200 text-gray-600 py-3 rounded-lg cursor-not-allowed">
                                Coming Soon
                            </button>
                        </div>
                    </div>

                    {/* Special Bundle */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-orange-50 p-8 flex items-center justify-center">
                            <span className="text-orange-500">
                                <Gift width={60} height={60} />
                            </span>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-gray-800">{`Season's Bundle`}</h3>
                                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">Save 20%</span>
                            </div>
                            <ul className="space-y-2">
                                <li className="flex items-center justify-between">
                                    <span className="text-gray-600">5 Seasonal Items</span>
                                    <span className="font-semibold">$24.99</span>
                                </li>
                                <li className="flex items-center justify-between">
                                    <span className="text-gray-600">Free Delivery</span>
                                    <i className="fa-solid fa-check text-green-600"></i>
                                </li>
                                <li className="flex items-center justify-between">
                                    <span className="text-gray-600">Recipe Card</span>
                                    <i className="fa-solid fa-check text-green-600"></i>
                                </li>
                            </ul>
                            <button className="w-full mt-6 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
                                Get Bundle
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Seasonal
