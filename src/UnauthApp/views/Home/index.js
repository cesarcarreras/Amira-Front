import React from 'react'
import {Banner, Navbar, Featured, Footer, Newsletter, Header} from '@components'
import bgPicture from '@assets/images/banner2.png'

const Home = () => {


    return(
        <>
            <Header />
            <Navbar/>
            <Banner
                bgImage={bgPicture}
            />
            <Featured/>
            <Newsletter/>
            <Footer/>
        </>
    )
}

export default Home