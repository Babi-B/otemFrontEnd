import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './ProductCard.css'
import { MySlider } from '../'

interface Props {
    name: String,
    description: String,
    available: Number,
    product_images: Array<ProductImageObject>
}

interface ProductImageObject {
    url: String
}

const ProductCard: React.FC<Props> = ({ name, description, available, product_images }) => {
    return (
        <Card className="productCard">
            <div style={{ width: '100%', height: '50%' }}>
                <MySlider
                    auto={3000}
                    hasBullets
                >
                    {product_images.map(product_image => (

                        <img
                            src={`${product_image.url}`}
                            alt="Third slide"
                            className='image'
                        />
                    ))}
                </MySlider>
            </div>
            <Card.Body>
                <Card.Title style={{ color: '#6D214F', fontWeight: 'bold', fontSize: 20 }}>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <button className='addToCartBtn'>Add to cart</button>
                <span className='availableText'>{available === 1 ? ' 😃 Available' : ' 😔 Not available'}</span>
            </Card.Body>
        </Card>
    )
}

export default ProductCard
