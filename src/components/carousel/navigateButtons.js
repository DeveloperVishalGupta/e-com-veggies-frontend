import CaretRight from '@/assets/Icons/caret-right';
import React from 'react'

export function NextArrowButton(props) {

    const { style, onClick } = props;
    return (
        <button onClick={onClick} style={{ ...style }} className='z-10 p-2 rounded-full bg-white shadow hover:bg-green-50 absolute right-0 top-0' >
            <span className=" text-green-600">
                <CaretRight />
            </span>
        </button>

    );
}

export function PrevArrowButton(props) {
    const { style, onClick } = props;
    return (
        <button onClick={onClick} style={{ ...style }} className="z-10 absolute right-16 top-0 p-2 rounded-full bg-white shadow  hover:bg-green-50" >
            <span className="text-green-600 rotate-180 ">
                <CaretRight style={{ rotate: '180deg' }} />
            </span>
        </button >

    );
}
