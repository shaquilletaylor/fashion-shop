import React from 'react'
import Announcement from './Announcement/Announcement'
import LuxCarousel from './Carousel/LuxCarousel'
import Categories from './Categories/Categories'
import Footer from './Footer/Footer'
import ImageHeader from './ImageHeader/ImageHeader'
import NavBar from './NavBar/NavBar'
import Products from './Products/Products'
import SocialImages from './ShopSocial/SocialImages'
import SocialBar from './SocialBar/SocialBar'

const Homepage = () => {
    return (
        <div>
            <Announcement />
            <NavBar />
            <ImageHeader />
            <Categories />
            <Products />
            <LuxCarousel />
            <SocialBar />
            <SocialImages />
            <Footer />
        </div>
    )
}

export default Homepage
