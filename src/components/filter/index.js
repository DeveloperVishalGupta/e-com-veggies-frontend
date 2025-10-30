import React from 'react'

function Filter() {
    return (
        <section id="products" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <div className="w-full md:w-64 shrink-0">
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-lg mb-4">Filters</h3>

                            {/* Price Filter */}
                            <div className="mb-6">
                                <h4 className="font-semibold mb-3">Price Range</h4>
                                <input type="range" className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer" min="0" max="100" />
                                <div className="flex justify-between text-sm text-gray-600 mt-2">
                                    <span>$0</span>
                                    <span>$100</span>
                                </div>
                            </div>

                            {/* Source Filter */}
                            <div className="mb-6">
                                <h4 className="font-semibold mb-3">Source</h4>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="form-checkbox text-green-600" />
                                        <span className="ml-2 text-gray-700">Local Farms</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="form-checkbox text-green-600" />
                                        <span className="ml-2 text-gray-700">Partner Suppliers</span>
                                    </label>
                                </div>
                            </div>

                            {/* Dietary Tags */}
                            <div className="mb-6">
                                <h4 className="font-semibold mb-3">Dietary Tags</h4>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="form-checkbox text-green-600" />
                                        <span className="ml-2 text-gray-700">Organic</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="form-checkbox text-green-600" />
                                        <span className="ml-2 text-gray-700">Gluten-Free</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="form-checkbox text-green-600" />
                                        <span className="ml-2 text-gray-700">Keto-Friendly</span>
                                    </label>
                                </div>
                            </div>

                            {/* Freshness Filter */}
                            <div className="mb-6">
                                <h4 className="font-semibold mb-3">Freshness</h4>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="radio" name="freshness" className="form-radio text-green-600" />
                                        <span className="ml-2 text-gray-700">Harvested Today</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="freshness" className="form-radio text-green-600" />
                                        <span className="ml-2 text-gray-700">Within 3 Days</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="freshness" className="form-radio text-green-600" />
                                        <span className="ml-2 text-gray-700">Within Week</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="flex-1">
                        {/* Sort Options */}
                        <div className="flex justify-between items-center mb-6">
                            <div className="text-gray-600">Showing 12 of 48 products</div>
                            <select className="border rounded-lg px-4 py-2 bg-white">
                                <option>Sort by: Featured</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Newest First</option>
                            </select>
                        </div>

                        {/* Products */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Product Card Template - Repeated 6 times */}
                            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4">
                                <div className="relative">
                                    <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center mb-4">
                                        <i className="fa-solid fa-image text-4xl text-gray-300"></i>
                                    </div>
                                    <button className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-md hover:bg-gray-50">
                                        <i className="fa-regular fa-heart text-gray-600"></i>
                                    </button>
                                </div>
                                <span className="text-sm text-green-600 font-semibold">Organic</span>
                                <h3 className="font-semibold text-lg text-gray-800 mt-1">Fresh Broccoli</h3>
                                <p className="text-sm text-gray-600 mt-1">Farm fresh broccoli rich in nutrients</p>
                                <div className="flex items-center justify-between mt-3">
                                    <div>
                                        <span className="text-xl font-bold text-green-600">$3.99</span>
                                        <span className="text-sm text-gray-500">/kg</span>
                                    </div>
                                    <button className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                            {/* Repeat similar product cards 5 more times */}
                            {/* Additional product cards would go here */}

                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center items-center space-x-2 mt-8">
                            <button className="p-2 rounded-lg border hover:bg-gray-50">
                                <i className="fa-solid fa-chevron-left text-gray-600"></i>
                            </button>
                            <button className="w-10 h-10 rounded-lg bg-green-600 text-white">1</button>
                            <button className="w-10 h-10 rounded-lg border hover:bg-gray-50">2</button>
                            <button className="w-10 h-10 rounded-lg border hover:bg-gray-50">3</button>
                            <button className="p-2 rounded-lg border hover:bg-gray-50">
                                <i className="fa-solid fa-chevron-right text-gray-600"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Filter
