import React from 'react';

import './ProductDetails.css'

const ProductDetails = (props) => {
    const { state } = (props.location)
    console.log(state)
    return (
        <div className='mainContainer' >
            <p>{state.name}</p>
            <div className='imagesDiv' >
                {state.product_images.map(image => (
                    <img
                        src={`${image.url}`}
                        className='image'
                    />
                ))}
            </div>
                <span>{state.description}</span>
        </div>
    )
}

export default ProductDetails