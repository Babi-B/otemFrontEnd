import React, { useEffect } from 'react';

import './Home.css';
import styles from './Home.styles'
import { MySlider } from '../../components'

interface Props {

}
const Home: React.FC<Props> = (props) => {

    const handleScroll = () => {
        alert('Hello')
    }

    useEffect(() => {
        window.onscroll = function () {
            if (window.pageYOffset === 1) {
                console.log('Scrolling')
            }
        };
        return () => {

        }
    }, [])

    return (
        <div style={styles.container}>
            <div style={styles.mainView1}>
                <div style={styles.view1}>
                    <span style={styles.titleText}>GET YOURS</span> <br />
                    <h1 style={styles.largeText}>The Leader In Soaps</h1>
                    <h1 style={styles.largeText}>And Stitches.</h1><br />
                    <span style={styles.smallText}>Here you will find lost of products that</span>
                    <span style={styles.smallText}>match your taste and that are also good for your health purposes.</span>
                    <span style={styles.smallText}>Trust us as we trust God to give you the best.</span>
                    <div style={{ marginTop: 20 }} className='orderNowBtn'>
                        <span className='orderNowText' style={{ fontSize: 14, fontWeight: 'bold' }}>ORDER NOW</span>
                    </div>
                </div>
                <div style={styles.view2}>
                    <MySlider
                        auto={2000}
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
                    </MySlider>
                </div>
            </div>
        </div>
    )
}

export default Home
