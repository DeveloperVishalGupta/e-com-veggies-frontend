import CaretRight from '@/assets/Icons/caret-right'
import { ProductCollection } from '@/model/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ProductCarousel from '../carousel/product'
import { useSelector } from 'react-redux'

function FeaturedProducts() {
    const reduxCart = useSelector((state) => state.cart.cart);

    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return <span>Loading...</span>;
    return (
        <section id="featured" className="py-16 bg-gray-50">
            <div className="max-w-[88rem] mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center mb-0">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
                        <p className="text-gray-600 mt-2">Hand-picked fresh vegetables for you</p>
                    </div>
                </div>
                <ProductCarousel data={ProductCollection} />
                <div className="text-center mt-8">
                    <Link href="#" className="inline-block  items-center px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                        <div className='flex items-center'>
                            <span> View All Products</span>
                            <span>
                                <CaretRight />
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </section >
    )
}

export default FeaturedProducts
