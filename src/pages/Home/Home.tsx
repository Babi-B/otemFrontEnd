import React, { useEffect, useState } from 'react';

import './Home.css';
import { MySlider, ProductCard } from '../../components'

interface Props {

}

interface ProductObject {
    id: Number,
    name: String,
    description: String,
    available: Number,
    product_images?: any
}

const Home: React.FC<Props> = (props) => {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState<ProductObject[]>([])

    const fetchItems = () => {
        setLoading(true)
        let BASE_URL = globalThis.BASE_URL
        let url = `${BASE_URL}/products`;
        fetch(url, { method: 'GET' })
            .then((response) => response.json())
            .then((responseJson) => {
                let data = responseJson;
                setProducts(data)
                console.log(data)
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchItems()
        return () => {

        }
    }, [])

    return (
        <div className='mainContainer'>
            <div className='mainView1'>
                <div className='view1'>
                    <span className='titleText'>GET YOURS</span> <br />
                    <h1 className='largeText'>The Leader In Soaps</h1>
                    <h1 className='largeText'>And Stitches.</h1><br />
                    <span className='smallText'>Here you will find lots of products that</span>
                    <span className='smallText'>match your taste and that are also good for health purposes.</span>
                    <span className='smallText'>Trust us as we trust God to give you the best.</span>
                    <div style={{ marginTop: 20 }} className='orderNowBtn'>
                        <span className='orderNowText' style={{ fontSize: 14, fontWeight: 'bold' }}>ORDER NOW</span>
                    </div>
                </div>
                <div className='view2'>
                </div>
            </div>
            <div className='mainView2'>
                {products.map(product => (
                    <ProductCard
                        product_images={product.product_images}
                        name={product.name}
                        description={product.description}
                        available={product.available}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home
