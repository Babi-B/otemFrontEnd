import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { MySlider } from '../'
import styles from './ProductCard.styles'

interface Props {
    name: String,
    description: String,
    available: Number
}

const ProductCard: React.FC<Props> = ({ name, description, available }) => {
    return (
        <Card style={{ width: '18rem', marginTop: 40, height: 400, backgroundColor: '#ffffff' }}>
            <div style={{ width: '100%', height: '55%' }}>
                <MySlider
                    auto={3000}
                    hasBullets
                >
                    <img
                        src="https://richmedia.ca-richimage.com/ImageDelivery/imageService?profileId=12026540&id=1010270&recipeId=728"
                        alt="Third slide"
                        style={{ width: '100%', height: '100%' }}
                    />
                    <img
                        src="https://richmedia.ca-richimage.com/ImageDelivery/imageService?profileId=12026540&id=1010270&recipeId=728"
                        alt="Third slide"
                        style={{ width: '100%', height: '100%' }}
                    />
                </MySlider>
            </div>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button style={styles.addToCartBtn}>Add to cart</Button>
                <span style={styles.availableText}>{available === 1 ? ' 😃 Available' : ' 😔 Not available'}</span>
            </Card.Body>
        </Card>
    )
}

export default ProductCard
