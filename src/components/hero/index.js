import React from 'react'
import CaretRight from '../../assets/Icons/caret-right'
import Link from 'next/link'
import Tractor from '../../assets/Icons/tractor'
import Truck from '../../assets/Icons/truck'

function Hero() {
    return (
        <section id="hero" className="bg-gradient-to-b border flex from-green-100 h-full items-center min-h-screen pt-20 to-white">
            <div className="max-w-[88rem] mx-auto px-4 sm:px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="text-center md:text-left">
                        <span className="inline-block px-4 py-1 rounded-full bg-green-200 text-green-600 text-sm font-semibold mb-4">
                            Fresh from Local Farms
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                            Fresh Vegetables <br />
                            <span className="text-green-600">Delivered Daily</span>
                        </h1>
                        <p className="text-gray-600 text-xl tracking-wide mb-8">
                            Farm-fresh vegetables delivered to your doorstep. Support local farmers and eat healthy with our seasonal produce.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link href="#" className="flex items-center px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors text-center">
                                <span className=''>
                                    Shop Now
                                </span>
                                <span className='mx-1'>
                                    <CaretRight />
                                </span>
                            </Link>
                            <Link href="#" className="flex items-center px-8 py-3 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-50 transition-colors text-center">
                                <span className=''>
                                    View Farms
                                </span>
                                <span className='mx-2'>
                                    <Tractor />
                                </span>


                            </Link>
                        </div>
                        <div className="mt-8 flex items-center justify-center md:justify-start gap-8">
                            <div className="text-center">
                                <div className="font-bold text-2xl text-green-600">100+</div>
                                <div className="text-sm text-gray-600">Local Farmers</div>
                            </div>
                            <div className="text-center">
                                <div className="font-bold text-2xl text-green-600">24hrs</div>
                                <div className="text-sm text-gray-600">Fast Delivery</div>
                            </div>
                            <div className="text-center">
                                <div className="font-bold text-2xl text-green-600">5000+</div>
                                <div className="text-sm text-gray-600">Happy Customers</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className=' w-full  h-[500px] rounded-2xl overflow-hidden bg-green-100'>
                            <div
                                className="w-full h-[500px] heroImage   flex items-center justify-center relative overflow-hidden">
                            </div>
                        </div>

                        <div className="absolute -bottom-6 right-6 bg-white p-4 rounded-xl shadow-lg">
                            <div className="flex items-center gap-4">
                                <div className="bg-green-100 p-3 rounded-full">
                                    <span className=" text-green-600 text-xl">
                                        <Truck />
                                    </span>

                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">Free Delivery</p>
                                    <p className="text-sm text-gray-600">On orders above $30</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Hero
