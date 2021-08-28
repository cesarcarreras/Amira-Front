import React from 'react'
import {Banner} from '@components'
import {NavBar} from '@components'
import {Featured} from '@components'

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