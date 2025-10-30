import { ProductCategories } from '@/model/constant'
import Link from 'next/link'
import React from 'react'

function Categories() {
    return (
        <section id="categories" className="py-16 bg-white">
            <div className="max-w-[88rem] mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Shop by Categories</h2>
                    <p className="text-gray-600">Explore our wide range of fresh vegetables</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {ProductCategories.map((item, index) => {
                        return (
                            <Link key={index} href={item.href} className="group">
                                <div className="bg-green-50 rounded-xl p-6 text-center transition-all duration-300 hover:bg-green-100">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200">
                                        <span className='text-2xl text-green-600'>
                                            {item.icon}
                                        </span>
                                    </div>
                                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                                    <p className="text-sm text-gray-600 mt-1">{`${item.itemCount}+ Items`}</p>
                                </div>
                            </Link>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}

export default Categories
