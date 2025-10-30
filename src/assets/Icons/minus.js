import React from 'react'

function Minus({ height, width, color }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            height={height || 20}
            width={width || 20}
        >
            <path
                fill={color || 'currentColor'}
                d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
            />
        </svg>
    )
}

export default Minus
