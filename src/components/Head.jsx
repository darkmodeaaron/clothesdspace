import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import '../styles/Head.css'

import whiteCartImg from '../assets/cart-white.png'
import blackCartImg from '../assets/cart-black.png'

function Head({hCState}) {

    const [headerState, setHeaderState] = useState(false)
    const [dimState, setDimState] = useState(false)
    const [clothingState, setClothingState] = useState(false)
    const [accessoriesState, setAccessoriesState] = useState(false)

    const headerOver = () => {
        if (headerState == true) {
            return
        } else {
            setHeaderState(!headerState)
        }
    }

    const headerOut = () => {
        if (clothingState || accessoriesState == true) {
            return
        } else {
            setHeaderState(!headerState)
        }
    }

    const clothingClicked = () => {
        setClothingState(!clothingState)
        setDimState(true)
        if (accessoriesState == true) {
            setAccessoriesState(false)
        }
        if (dimState == true && clothingState == true) {
            setDimState(false)
        }
    }

    const accessoriesClicked = () => {
        setAccessoriesState(!accessoriesState)
        setDimState(true)
        if (clothingState == true) {
            setClothingState(false)
        }
        if (dimState == true && accessoriesState == true) {
            setDimState(false)
        }

    }

    const dimClicked = () => {
        setDimState(!dimState)
        setClothingState(false)
        setAccessoriesState(false)
        setHeaderState(false)
    }

    useEffect(() => {
        if (hCState == false) {
            setHeaderState(true)
        }
    })

  return (
    <>
        <header>
            <section className={`desktop-header ${headerState ? 'active' : ''}`} onMouseEnter={headerOver} onMouseLeave={headerOut}>
                <div className='desktop-header-left'>
                    <NavSection headerState={headerState} dropdownState={clothingState} dropdownClick={clothingClicked} data={clothingData} stat={hCState}/>
                    <NavSection headerState={headerState} dropdownState={accessoriesState} dropdownClick={accessoriesClicked} data={accessoriesData} stat={hCState}/>
                </div>
                <Link to={'/'}><div className='desktop-header-center'><h1 className={`header-logo-text ${headerState ? 'dark' : ''}`}>clothesdspace</h1></div></Link>
                <div className='desktop-header-right'>
                    <div className="cart-img-wrapper"><img src={headerState ? blackCartImg : whiteCartImg} alt="" /></div>
                </div>
            </section>
            <div className={`dim ${dimState ? 'active' : ''}`} onClick={dimClicked}></div>
        </header>
    </>
  )
}

function NavSection({headerState, dropdownState, dropdownClick, data, stat}) {

    const dataTitle = data.title
    const dataSubs = data.subs

    const titleRef = useRef()

    useEffect(() => {
        // Ensure titleRef.current is defined before manipulating style
        if (dropdownState) {
            titleRef.current.style.textDecoration = 'underline'
        } else {
            titleRef.current.style.textDecoration = 'none'
        } 
      }, [dropdownState]);


    return (
        <>
            <div className='nav-section'>
                <h3 ref={titleRef} className={`section-title ${headerState ? 'dark' : ''}`} onClick={dropdownClick}>{dataTitle} </h3>
                <div className={`dropdown-section ${dropdownState ? 'active' : ''}  `}>
                    {
                        dataSubs.map((item, idx) => {
                            return <SubSection key={idx} data={item} stat2={stat}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}

function SubSection({data}) {

    const subTitle = data.subTitle
    const subs = data.subs


    return (
        <>
            <div className='sub-section'>
                <h1 className='sub-title'>{subTitle}</h1>
                <div className='subs'>
                {
                    subs.map((item, idx) => {
                        return <h3 className='sub' key={idx}>{item}</h3>
                    })
                }
                </div>
            </div>
        </>
    )
}

const clothingData = {
    title: 'Clothing',
    subs: [
        {
            subTitle: 'Outerwear',
            subs: ['Jackets', 'Fleece']
        },
        {
            subTitle: 'Tops',
            subs: ['T-shirts', 'Shirts', 'Sweatshirts', 'Jumpers', 'Knits']
        },
        {
            subTitle: 'Bottoms',
            subs: ['Trousers', 'Chinos', 'Jeans', 'Shorts']
        },
        {
            subTitle: 'Footwear',
            subs: ['Trainers', 'Boots', 'Shoes']
        },
    ]
}

const accessoriesData = {
    title: 'Accessories',
    subs: [
        {
            subTitle: 'Hats',
            subs: ['Beanies', 'Caps']
        },
        {
            subTitle: 'Bags',
            subs: ['Backpacks', 'Duffel bags', 'Shoulder bags', 'Tote bags']
        },
        {
            subTitle: 'Else',
            subs: ['Belts', 'Scarfs', 'Wallets', 'Gloves']
        }
    ]
}

export default Head