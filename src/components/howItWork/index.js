import CaretRight from '@/assets/Icons/caret-right'
import { HowItWorkSteps } from '@/model/constant'
import Link from 'next/link'
import React from 'react'

function HowItWork() {
  return (
    <section id="howItWorks" className="py-16 bg-white">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">How FreshHarvest Works</h2>
          <p className="text-gray-600 mt-2">Fresh vegetables from farm to your doorstep in 4 simple steps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          {HowItWorkSteps.map((item, index) => {
            return (
              <div key={item.step} className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className=" text-green-600">
                    {item.icon}
                  </span>
                </div>
                <div className="relative">
                  <span className="absolute -top-3 -right-3 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            )
          })}

        </div>

        <div className="mt-12 text-center">
          <Link href="#" className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors">
            <span>
              Start Shopping Now
            </span>
            <span>
              <CaretRight />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HowItWork
