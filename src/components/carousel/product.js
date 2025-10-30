"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Plus from "@/assets/Icons/plus";
import Image from "next/image";
import Minus from "@/assets/Icons/minus";
import { ProductCollection } from "@/model/constant";
import { NextArrowButton, PrevArrowButton } from "./navigateButtons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/cartSlice";


const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrowButton />,
    prevArrow: <PrevArrowButton />,
};



function ProductCarousel({ data }) {
    const dispatch = useDispatch();
    const ReduxCartSelector = useSelector((state) => state.cart);
    const [productList, setProductList] = useState(data);

    useEffect(() => {
        const updatedProductList = productList.map(productItem => {
            const storeItem = ReduxCartSelector.find(item => item._id === productItem._id);
            return storeItem ? { ...productItem, quantity: storeItem.quantity } : productItem;
        });
        setProductList(updatedProductList)
    }, [])



    function updateQuantity(productId, change) {
        let currentProduct;
        const cart = [];

        if (ReduxCartSelector?.length > 0 && ReduxCartSelector.find(item => item._id === productId)) {
            currentProduct = ReduxCartSelector.find(item => item._id === productId);
        } else {
            currentProduct = productList.find(item => item._id === productId);
        }

        if (!currentProduct) return;

        // Create a new object instead of modifying the existing one
        const updatedProduct = { ...currentProduct, quantity: currentProduct.quantity + change };

        cart.push(updatedProduct);

        // Update product list correctly
        setProductList((prev) => {
            return prev.map(item => item._id === productId ? updatedProduct : item);
        });

        dispatch(addToCart(cart));
    }

    return (
        <div className="slider-container relative">
            <Slider {...settings} className="pt-16 gap-3">

                {productList?.length > 0 ? productList.map((item, index) => {

                    return (
                        <div key={index} style={{ width: '96%' }} className="bg-slate-300 w-[96%] rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="p-4">
                                <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center mb-4">
                                    <Image
                                        alt={item?.alt}
                                        priority={true}
                                        src={item?.image || ''}
                                        className="max-w-44 rounded-md hover:scale-105 !duration-500 aspect-square"
                                    />
                                </div>
                                <span className="text-sm text-green-600 font-semibold">{item?.category}</span>
                                <h3 className="font-semibold text-lg text-gray-800 mt-1">{item?.name}</h3>
                                <div className="flex items-center justify-between mt-2">
                                    <div>
                                        <span className="text-xl flex items-center font-bold text-green-600">₹{item?.price}</span>
                                        <span className="text-sm text-gray-500">/{item?.unit}</span>
                                    </div>
                                    {item?.quantity > 0 ? (
                                        <div className="bg-green-600 flex hover:bg-green-700 items-center justify-between p-2 min-w-28 rounded-full text-white">
                                            <button onClick={() => removeFromCart(item)} className="bg-green-100 flex hover:bg-green-200 items-center justify-center rounded-full size-6 text-green-600">
                                                <Minus width={10} />
                                            </button>
                                            <span className="font-semibold">{item?.quantity}</span>
                                            <button onClick={() => updateQuantity(item._id, 1)} className="bg-green-100 flex hover:bg-green-200 items-center justify-center rounded-full size-6 text-green-600">
                                                <Plus width={10} />
                                            </button>
                                        </div>
                                    ) : (
                                        <button onClick={() => updateQuantity(item._id, 1)} className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700">
                                            Add to Cart
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                })
                    : <div>products are not avilable</div>}
            </Slider>
        </div>
    );
}

export default ProductCarousel;
