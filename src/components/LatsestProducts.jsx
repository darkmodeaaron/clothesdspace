import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../styles/LatestProducts.css'

import { latestProducts } from '../data/items'
import { latestProductsTwo } from '../data/items'
import { Sweatshirt } from '../pages/Sweatshirt'

function LatsestProducts() {

  return (
    <section className='latest-products'>
        <div className='latest-products-text-wrapper'>
            <h2>Latest Products</h2>
            <a>View All Products</a>
        </div>
        <div className='last'>
            {
                latestProducts.map((item, idx) => {
                    return <LatestProductItem key={idx} data={item} />
                })
            }
        </div>
        <div className='last'>
            {
                latestProductsTwo.map((item, idx) => {
                    return <LatestProductItem key={idx} data={item} />
                })
            }
        </div>
    </section>
  )
}

function LatestProductItem({data}) {

    const [itemImageState, setItemImageState] = useState(data.image)

    const onImageHover = () => {
        setItemImageState(data.image2)
    }
    const onImageOut = () => {
        setItemImageState(data.image)
    }

    function addItem(item) {
        localStorage.setItem(`${item.destination}`, JSON.stringify(item))
        console.log(item)
    }

    return (
        <div className='latest-product-item'>
            <Link to={'/Sweatshirt'} >
            <div className='item-img-wrapper' onMouseOver={onImageHover} onMouseLeave={onImageOut}><img src={itemImageState} alt="" onClick={() => addItem(data)}/></div> </Link>
            <div className='item-title-price-wrapper'>
                <a className='item-title' href="">{data.itemName}</a>
                <h3 className='item-price'>{`£${data.itemPrice}`}</h3>
            </div>
        </div>
    )
}

export default LatsestProducts