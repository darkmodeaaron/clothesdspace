import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import '../styles/productPage/productPage.css'

import { sweatshirts } from '../data/items';

export const Sweatshirt = () => {

  const [currentItem, setCurrentItem] = useState('')

  useEffect (() => {  
    let currentT = JSON.parse(localStorage.getItem('/Sweatshirts'))
    setCurrentItem(currentT)
}, []);

  function colorSelect(color) {
    const newColor = sweatshirts.filter((item) => item.color == color)
    setCurrentItem(newColor[0])
  }

  function addSize(size) {
    currentItem.size = `${size}`
  }

  function atc(item) {
    let currentCart = JSON.parse(localStorage.getItem('cart')) || []
    let updatedCart = [...currentCart, item]
    localStorage.setItem('cart', JSON.stringify(updatedCart))
}

  const sizes = ['S', 'M', 'L', 'XL']

  return (
    <>
      <div className='spacer'></div>
      <div className='product-page-flex'>
        <div className='product-left'>
          <Swiper className="mySwiper2"  
            spaceBetween={0}
            slidesPerView={1}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{ clickable: true,}}
            modules={[Pagination]}
          >
            <SwiperSlide className='swiper-slide2'><img src={currentItem.image} alt="" /></SwiperSlide>
            <SwiperSlide className='swiper-slide2'><img src={currentItem.image2} alt="" /></SwiperSlide>

          </Swiper>
        </div>
        <div className='product-right'>
          <h1 className='product-name'>{currentItem.itemName}</h1>
          <h1 className='product-price'>£{currentItem.itemPrice} </h1>
          <div className='color-selector-wrapper'>
            {sweatshirts.map((item, index) => {
              return <div onClick={() => colorSelect(item.color)} key={index} style={{backgroundColor:item.color}} className='color-selector-circle'></div>
            })}
          </div>
          <div className='select-size'>
            <div className='select-size-text-wrapper'>
                <h3 className='select-size-text'>Select Size</h3>
                <h3 className='sizecomp-text'>Sizecomp</h3>
            </div>
            <div className='sizes-selector-wrapper'>
                { sizes.map((size, index) => {
                    return <div className='size-selector' key={index} onClick={() => addSize(size)}>{size}</div>
                })}
            </div>
          </div>
          <button className='atc-btn' onClick={() => atc(currentItem)}>Add to cart</button>
        </div>    
      </div>     
    </>
  )
}
