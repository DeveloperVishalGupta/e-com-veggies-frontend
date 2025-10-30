import BasketShopping from "@/assets/Icons/basket-shopping";
import Carrot from "@/assets/Icons/carrot";
import House from "@/assets/Icons/house";
import Leaf from "@/assets/Icons/leaf";
import PepperHot from "@/assets/Icons/pepper-hot";
import PhoneIcon from "@/assets/Icons/phone";
import Seedling from "@/assets/Icons/seedling";
import Spa from "@/assets/Icons/spa";
import Tractor from "@/assets/Icons/tractor";
import tendli from '@/assets/images/tendli.png'
import aboodi from '@/assets/images/aboodi.jpg'
import Bringel from '@/assets/images/Bringel.jpg'
import garlic from '@/assets/images/garlic.jpg'
import ginger from '@/assets/images/ginger.png'
import lemon from '@/assets/images/lemon.jpg'
import CartShopping from "@/assets/Icons/cart-shopping";
import CalendarCheck from "@/assets/Icons/calendar-check";
import Truck from "@/assets/Icons/truck";
import Heart from "@/assets/Icons/heart";
// import tendli from '@/assets/images/tendli.png'
// import tendli from '@/assets/images/tendli.png'
// import tendli from '@/assets/images/tendli.png'
export const NavMenus = [
    {
        title: "Home",
        href: "#",
        icon: <House />,
        active: true,
    },
    {
        title: "Shop",
        href: "#",
        icon: <Carrot />,
        active: false,
    },
    {
        title: "Farms",
        href: "#",
        icon: <Tractor />,
        active: false,
    },
    {
        title: "Contact",
        href: "#contact",
        icon: <PhoneIcon />,
        active: false,
    },
];
export const ProductCategories = [
    {
        title: "Leafy Greens",
        href: "#",
        icon: <Leaf width={28} height={28} />,
        itemCount: '20'
    },
    {
        title: "Root Vegetables",
        href: "#",
        icon: <Carrot width={28} height={28} />,
        itemCount: '15'
    },
    {
        title: "Organic",
        href: "#",
        icon: <Seedling width={28} height={28} />,
        itemCount: '25'
    },
    {
        title: "Exotic",
        href: "#contact",
        icon: <PepperHot width={28} height={28} />,
        itemCount: '10'
    },
    {
        title: "Herbs",
        href: "#contact",
        icon: <Spa width={28} height={28} />,
        itemCount: '30'
    },
    {
        title: "Seasonal",
        href: "#contact",
        icon: <BasketShopping width={28} height={28} />,
        itemCount: '12'
    },
];

export const ProductCollection = [
    {
        "image": tendli,
        alt: 'images',
        'quantity': 0,
        "category": "Organic",
        "name": "Fresh Spinach",
        "price": 2.99,
        "unit": "bunch",
        _id: 'v1',
    },
    {
        "image": aboodi,
        alt: 'images',
        'quantity': 0,
        "category": "Local Farm",
        "name": "Red Tomatoes",
        "price": 3.49,
        "unit": "kg",
        _id: 'v2',
    },
    {
        "image": Bringel,
        alt: 'images',
        'quantity': 0,
        "category": "Fresh Today",
        "name": "Bell Peppers",
        "price": 4.99,
        "unit": "kg",
        _id: 'v3',
    },
    {
        "image": garlic,
        alt: 'images',
        'quantity': 0,
        "category": "Best Seller",
        "name": "Baby Carrots",
        "price": 2.49,
        "unit": "pack",
        _id: 'v4',
    },
    {
        "image": ginger,
        alt: 'images',
        'quantity': 0,
        "category": "Best Seller",
        "name": "Baby Carrots",
        "price": 2.49,
        "unit": "pack",
        _id: 'v5',
    },
    {
        "image": lemon,
        alt: 'images',
        'quantity': 0,
        "category": "Best Seller",
        "name": "Baby Carrots",
        "price": 2.49,
        "unit": "pack",
        _id: 'v6'
    }
]

export const HowItWorkSteps = [
    {
        "step": 1,
        "title": "Choose Your Veggies",
        "description": "Browse our selection of fresh, seasonal vegetables from local farms",
        "icon": <CartShopping width={30} height={30} />
    },
    {
        "step": 2,
        "title": "Schedule Delivery",
        "description": "Pick your preferred delivery time slot that works for you",
        "icon": <CalendarCheck width={30} height={30} />
    },
    {
        "step": 3,
        "title": "Fast Delivery",
        "description": "We deliver your vegetables fresh and on time to your doorstep",
        "icon": <Truck width={30} height={30} />
    },
    {
        "step": 4,
        "title": "Enjoy Fresh",
        "description": "Enjoy farm-fresh vegetables and healthy meals with family",
        "icon": <Heart width={30} height={30} />
    }
]
export const testimonials = [
    { name: "Rahul Gupta", review: "Amazing service and friendly staff! Highly recommended. Amazing service and friendly staff! Highly recommended. Amazing service and friendly staff! Highly recommended.", stars: 5 },
    { name: "Neha Kapoor", review: "Loved the hair color transformation. Will visit again!", stars: 4 },
    { name: "Arjun Desai", review: "Professional and skilled team. Very satisfied!", stars: 5 },
    { name: "Sneha Rao", review: "Great experience with bridal makeup. It was flawless!", stars: 5 },
    { name: "Manoj Tiwari", review: "Good services but waiting time was a bit long.", stars: 4 },
];
