import React from 'react'
import { Card } from 'react-bootstrap'
import './ProductCard.css'
import { MySlider } from '../'
import { Link } from 'react-router-dom'

interface Props {
    name: String,
    description: String,
    available: Number,
    product_images: Array<ProductImageObject>,
    itemForNextPage: any
}

interface ProductImageObject {
    url: String
}

const ProductCard: React.FC<Props> = ({ name, description, available, product_images, itemForNextPage }) => {
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
                            style={{ width: '100%' }}
                        />
                    ))}
                </MySlider>
            </div>
            <Card.Body>
                <Card.Title style={{ color: '#6D214F', fontWeight: 'bold', fontSize: 20 }}>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Link to={{ pathname: '/productDetails', state: itemForNextPage }} >
                    <button className='addToCartBtn'>Add to cart</button>
                </Link>
                <span className='availableText'>{available === 1 ? ' 😃 Available' : ' 😔 Not available'}</span>
            </Card.Body>
        </Card>
    )
}

export default ProductCard
