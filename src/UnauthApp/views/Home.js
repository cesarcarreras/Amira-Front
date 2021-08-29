import React from 'react'
import {Banner} from '@components'
import {NavBar} from '@components'
import {Featured} from '@components'
import {ProductCard} from '@components'

const Home = () => {
    return(
        <>
            <NavBar/>
            <Banner/>
            <Featured/>
            <ProductCard />
        </>
    )
}

export default Home