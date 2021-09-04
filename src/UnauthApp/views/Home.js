import React, {useEffect, useState} from 'react'
import {Banner, Navbar, Featured, ProductCard, Footer, Newsletter} from '@components'
import { Flex } from '@chakra-ui/react'
import { allProductsEP } from '@services/product-ws'
import bgPicture from '@assets/images/tropical-green-leaves-background-min.jpg'

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
            <Navbar/>
            <Banner
                bgImage={bgPicture}
            />
            <Featured/>
            <Flex p={6} m="10px" wrap="wrap" justifyContent="space-around" alignItems="center" alignContent="center">
            { filteredProducts.map(product => (
                <ProductCard
                    key={product.id}
                    title={product.title}
                    description={product.description}
                    img={product.img}
                />
            ))}
            </Flex>
            <Newsletter/>
            <Footer/>
        </>
    )
}

export default Home