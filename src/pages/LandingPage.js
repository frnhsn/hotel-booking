import React from 'react';
import { useRef } from 'react';

import Header from 'parts/Header';
import Hero from 'parts/Hero';
import MostPicked from 'parts/MostPicked';
import landingPageData from 'json/landingPage';
import Categories from 'parts/Categories';
import Testimony from 'parts/Testimony';
import Footer from 'parts/Footer';

export default function LandingPage(props) {
    const refMostPicked = useRef();

    return (
        <div>
            <Header {...props}></Header>
            <Hero
                refMostPicked={refMostPicked} 
                data={landingPageData.hero}></Hero>
            <MostPicked 
                refMostPicked={refMostPicked}
                data={landingPageData.mostPicked} />
            <Categories 
                data={landingPageData.categories} />
            <Testimony></Testimony>
            <Footer></Footer>
        </div>
    )
}

