import React from 'react'
import './Welcome.css'

import styles from './Welcome.styles'
import Slider from '@farbenmeer/react-spring-slider';


interface Props {
    onClick: any
}

const Welcome: React.FC<Props> = ({ onClick }) => {
    return (
        <div style={styles.container}>
            <h1 style={{ position: 'absolute', top: 20, left: 40, color: '#6D214F' }} >Welcome To Otem Products</h1>
            <div style={{ display: 'flex' }}>
                <img
                    src='assets/welcome.png'
                    alt=""
                    style={styles.welcomeImage}
                />
                <div style={{ height: 400, marginTop: 100, marginLeft: 50 }}>
                    <span style={{ color: '#6D214F', fontWeight: 'bold', fontSize: 17 }}>Stay with us and be assured of nice products, even to your taste 😃</span>
                    <div style={{ width: '100%', height: '100%', marginTop: 20 }}>
                        <Slider
                            auto={3000}
                            hasBullets
                        >
                            <img
                                src="https://richmedia.ca-richimage.com/ImageDelivery/imageService?profileId=12026540&id=1010270&recipeId=728"
                                alt="Third slide"
                                style={{ width: '100%', height: '360px' }}
                            />
                            <img
                                src="https://richmedia.ca-richimage.com/ImageDelivery/imageService?profileId=12026540&id=1010270&recipeId=728"
                                alt="Third slide"
                                style={{ width: '100%', height: '360px' }}
                            />
                            <img
                                src="https://richmedia.ca-richimage.com/ImageDelivery/imageService?profileId=12026540&id=1010270&recipeId=728"
                                alt="Third slide"
                                style={{ width: '100%', height: '360px' }}
                            />
                            <img
                                src="https://richmedia.ca-richimage.com/ImageDelivery/imageService?profileId=12026540&id=1010270&recipeId=728"
                                alt="Third slide"
                                style={{ width: '100%', height: '360px' }}
                            />
                            <img
                                src="https://richmedia.ca-richimage.com/ImageDelivery/imageService?profileId=12026540&id=1010270&recipeId=728"
                                alt="Third slide"
                                style={{ width: '100%', height: '360px' }}
                            />
                            <img
                                src="https://richmedia.ca-richimage.com/ImageDelivery/imageService?profileId=12026540&id=1010270&recipeId=728"
                                alt="Third slide"
                                style={{ width: '100%', height: '360px' }}
                            />
                        </Slider>
                    </div>
                </div>
            </div>
            <div
                className='getstartedBtn'
                onClick={onClick}
            >
                <span className='getStartedText' style={{ fontSize: 14, fontWeight: 'bold' }}>GET STARTED</span>
            </div>
        </div>
    )
}

export default Welcome
