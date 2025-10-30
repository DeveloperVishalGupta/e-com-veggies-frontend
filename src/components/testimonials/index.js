import React from 'react'
import TestimonialCarousel from '../carousel/testimonial'
import { testimonials } from '@/model/constant'

function Testimonials() {
    return (
        <section id="testimonials" className="py-16 bg-gray-50">
            <div className="max-w-[88rem] mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">What Our Customers Say</h2>
                    <p className="text-gray-600 mt-2">Join thousands of happy customers enjoying fresh vegetables daily</p>
                </div>

                <TestimonialCarousel data={testimonials} />
            </div>
        </section>
    )
}

export default Testimonials
