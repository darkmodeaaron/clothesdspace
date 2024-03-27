import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import '../styles/productPage/productPage.css'

import { sweatshirts } from '../data/items';

export const Sweatshirt = () => {

  const [currentItem, setCurrentItem] = useState('')
  const [itemIndex, setItemIndex] = useState('')
  const [sizeIndex, setSizeIndex] = useState('')

  useEffect(() => {  
    let currentT = JSON.parse(localStorage.getItem('/Sweatshirts'));
    if (currentT) {
      setCurrentItem(currentT);
    }

  }, []);

  useEffect(() => {
    localStorage.setItem('/Sweatshirts', JSON.stringify(currentItem))
    for (let i = 0; i < sweatshirts.length; i++) {
      if (sweatshirts[i].colorName == currentItem.colorName) {
        setItemIndex(i)
      }
    }

    for (let i = 0; i < sweatshirts.length; i++) {
      if (sweatshirts[i].colorName == currentItem.colorName) {
        setItemIndex(i)
      }
    }
    console.log(itemIndex)
  }, [currentItem])

  function colorSelect(color) {
    const newColor = sweatshirts.filter((item) => item.color == color)
    setCurrentItem(newColor[0])
  }

  function addSize(size) {
    currentItem.size = `${size}`
    setSizeIndex(size)
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
        <div className='product-page-left'>
          <Swiper className="mySwiper2"  
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true,}}
            modules={[Pagination]}
          >
            <SwiperSlide className='swiper-slide2'><img src={currentItem.image} alt="" /></SwiperSlide>
            <SwiperSlide className='swiper-slide2'><img src={currentItem.image2} alt="" /></SwiperSlide>

          </Swiper>
        </div>
        <div className='product-page-right'>
          <h1 className='product-name'>{currentItem.itemName}</h1>
          <h1 className='product-price'>£{currentItem.itemPrice} </h1>
          <h2 className='product-description'>{currentItem.des}</h2>
          <h3 className='select-option-title'>Select colour</h3>
          <div className='color-selector-wrapper'>
            {sweatshirts.map((item, index) => {
              return <ColorCircle id={item.id} col={item.color} clickFunction={() => colorSelect(item.color, index)} key={index} kup={index} ii={itemIndex}></ColorCircle>
            })}
          </div>
          <h3 className='select-option-title'>Select size</h3>
          <div className='sizes-selector-wrapper'>
              { sizes.map((size, index) => {
                  return <SizeRectangle letter={size} key={index} clickFunction={() => addSize(size)} si={sizeIndex}></SizeRectangle>
              })}
          </div>
          <button className='atc-btn' onClick={() => atc(currentItem)}>Add to cart</button>
        </div>    
      </div>     
    </>
  )
}

const ColorCircle = ({clickFunction, col , ii, kup}) => {

  const [colorTrue, setColorTrue] = useState(false)

  useEffect(() => {
    // Update colorTrue when kup is equal to ii
    setColorTrue(kup === ii);
    if ( kup == ii) {
      setColorTrue(true)
    } else {
      setColorTrue(false)
    }
  }, [kup, ii]);


  return (
    <div className={`color-selector-circle ${colorTrue ? 'active' : ''}`} onClick={clickFunction} style={{backgroundColor:col, }}></div>
  )
}

const SizeRectangle = ({clickFunction, ii, kup, letter, si}) => {

  const [colorTrue, setColorTrue] = useState(false)

  useEffect(() => {
    // Update colorTrue when kup is equal to ii
    setColorTrue(letter === si);
    if ( si == letter) {
      setColorTrue(true)
    } else {
      setColorTrue(false)
    }
  }, [si, letter]);


  return (
    <div className={`size-selector ${colorTrue ? 'active' : ''}`} onClick={clickFunction}>{letter}</div>
  )
}
