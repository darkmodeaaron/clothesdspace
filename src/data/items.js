import sweatshirtBlueImg from '../assets/items/sweatshirts/sweatshirtBlue.png'
import sweatshirtBlueImg2 from '../assets/items/sweatshirts/sweatshirtBlue2.png'
import sweatshirtRedImg from '../assets/items/sweatshirts/sweatshirtRed.png'
import sweatshirtRedImg2 from '../assets/items/sweatshirts/sweatshirtRed2.png'

import LsTshirtWhiteImg from '../assets/items/LsTshirts/LsTshirtWhite.png'
import LsTshirtWhiteImg2 from '../assets/items/LsTshirts/LsTshirtWhite2.png'
import LsTshirtBlueImg from '../assets/items/LsTshirts/LsTshirtBlue.png'
import LsTshirtBlueImg2 from '../assets/items/LsTshirts/LsTshirtBlue2.png'

import tshirtOrangeImg from '../assets/items/tshirts/tshirtOrange.png'
import tshirtOrangeImg2 from '../assets/items/tshirts/tshirtOrange2.png'
import tshirtBlueImg from '../assets/items/tshirts/tshirtBlue.png'
import tshirtBlueImg2 from '../assets/items/tshirts/tshirtBlue2.png'

import hoodieBrownImg from '../assets/items/Hoodies/hoodieBrown.png'
import hoodieBrownImg2 from '../assets/items/Hoodies/hoodieBrown2.png'
import hoodieOrangeImg from '../assets/items/Hoodies/orangeHoodie.png'
import hoodieOrangeImg2 from '../assets/items/Hoodies/hoodieOrange2.png'

function LsTshirt(color, image, image2) {
    this.itemPrice = 40.00
    this.color = color
    this.image = image
    this.image2 = image2
    this.itemName = `${this.color} Long Sleeve T-Shirt`
    this.destination = '/LongSleeveTshirts'
}

const LsTshirtWhite = new LsTshirt('white', LsTshirtWhiteImg, LsTshirtWhiteImg2)
const LsTshirtBlue = new LsTshirt('blue', LsTshirtBlueImg, LsTshirtBlueImg2)

function Sweatshirt(color, image, image2) {
    this.itemPrice = 85.00
    this.color = color
    this.image = image
    this.image2 = image2
    this.itemName = `${this.color} Sweatshirt`
    this.destination = '/Sweatshirts'
}

const sweatshirtBlue = new Sweatshirt('Blue', sweatshirtBlueImg, sweatshirtBlueImg2)
const sweatshirtRed = new Sweatshirt('Red', sweatshirtRedImg, sweatshirtRedImg2)

export const sweatshirts = [sweatshirtBlue, sweatshirtRed]

function Tshirt(color, image, image2) {
    this.itemPrice = 45.00
    this.color = color
    this.image = image
    this.image2 = image2
    this.itemName = `${this.color} T-Shirt`
    this.destination = '/Tshirts'
}

const tshirtOrange = new Tshirt('Black', tshirtOrangeImg, tshirtOrangeImg2)
const tshirtBlue = new Tshirt('Blue', tshirtBlueImg, tshirtBlueImg2)

function Hoodie(color, image, image2) {
    this.itemPrice = 70.00
    this.color = color
    this.image = image
    this.image2 = image2
    this.itemName = `${this.color} Hoodie`
    this.destination = '/Hoodies'
}

const HoodieBrown = new Hoodie('Brown', hoodieBrownImg, hoodieBrownImg2)
const HoodieOrange = new Hoodie('Orange', hoodieOrangeImg, hoodieOrangeImg2)

export const latestProducts = [
    sweatshirtBlue,
    LsTshirtWhite,
    HoodieBrown,
    tshirtOrange
]

export const latestProductsTwo = [
    sweatshirtRed,
    tshirtBlue,
    HoodieOrange,
    LsTshirtBlue
]