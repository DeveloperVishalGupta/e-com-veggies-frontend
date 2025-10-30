import React, { useEffect, useState } from 'react'
import MagnifyingGlass from '../../assets/Icons/magnifying-glass'
import CartShopping from '../../assets/Icons/cart-shopping'
import Bars from '../../assets/Icons/bars'
import { NavMenus } from '@/model/constant'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'

function Header() {

    const ReduxCartSelector = useSelector((state) => state.cart);

    const menu = NavMenus;
    const [itemsAddedToCart, setItemsAddedToCart] = useState([]);

    const getCartItems = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        setItemsAddedToCart(cart);
    };


    useEffect(() => {

        // Load cart data when the component mounts
        getCartItems();

        // Listen for localStorage changes
        const handleStorageChange = (event) => {
            if (event.key === "cart") {
                getCartItems();
            }
        };

        // Add event listener

        return () => {
            // Cleanup event listener
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    return (
        <header id="header" className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="max-w-[88rem] mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-5">
                    {/* Logo  */}
                    <div className="flex items-center">
                        <a href="#" className="text-2xl font-bold text-green-600">FreshHarvest</a>
                    </div>

                    {/* Desktop Navigation  */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {menu.map((item, index) => {
                            return (
                                <Link key={index} href={item.href} className="text-gray-600 hover:text-green-600 flex gap-1">
                                    <span>{item.icon}</span>
                                    <span>{item.title}</span>
                                </Link>
                            )
                        })}
                    </nav>

                    {/* Right Icons */}
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-600 hover:text-green-600">
                            <MagnifyingGlass width={24} height={24} />
                        </button>
                        <button className="text-gray-600 hover:text-green-600 relative">
                            <CartShopping width={24} height={24} />
                            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{ReduxCartSelector?.length}</span>
                        </button>

                        {/* Mobile Menu Button */}
                        <button className="md:hidden text-gray-600 hover:text-green-600">
                            <Bars />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className="md:hidden ">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {menu.map((item, index) => {
                        return (
                            <Link key={index} href={item.href} className="text-gray-600 hover:text-green-600 flex items-center gap-1">
                                <span>{item.icon}</span>
                                <span>{item.title}</span>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </header>
    )
}

export default Header
