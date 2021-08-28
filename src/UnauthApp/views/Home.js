import React from 'react'
import Banner from '../../components/Banner'
import Featured from '../../components/Featured'
import NavBar from '../../components/Navbar'

const Home = () => {
    return(
        <>
            <NavBar/>
            <Banner/>
            <Featured/>
        </>
    )
}

export default Home