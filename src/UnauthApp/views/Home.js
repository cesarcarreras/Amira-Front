import React, {useEffect, useState} from 'react'
import {Banner, NavBar, Featured, ProductCard, Footer, Newsletter} from '@components'
import { Flex } from '@chakra-ui/react'
import { allProductsEP } from '@services/product-ws'


const Home = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        allProductsEP()
        .then(({data}) => setProducts([...data.products]))
        .catch(err => console.log(err))
    }, [])

    const filteredProducts = products.filter((products) => products.featured === true)
    console.log(filteredProducts)

    return(
        <>
            <NavBar/>
            <Banner/>
            <Featured/>
            <Flex p={6} m="10px" wrap="wrap" justifyContent="space-around" alignItems="center" alignContent="center">
            { filteredProducts.map(product => {
                return <ProductCard
                    title={product.title}
                    description={product.description}
                />
              })}
            </Flex>
            <Newsletter/>
            <Footer/>
        </>
    )
}

export default Home