import React, {useEffect, useState} from 'react'
import {allProductsEP} from '@services/product-ws'
import { Banner, Footer, Navbar, Newsletter, ProductCard, ShopCart } from '@components'
import { Badge, Box, Flex } from '@chakra-ui/react'
import bgPicture from '@assets/images/background-products.jpg'


export default function Products() {

    const [cartItems, setCartItems] = useState([])

    const [products, setProducts] = useState([])

    let countCartItems = cartItems.length

    useEffect(() => {
        allProductsEP()
        .then(({data}) => setProducts([...data.products]))
        .catch(err => console.log(err))
    }, [])

    const onAdd = (product) => {
        const exist = cartItems.find( x => x.id === product.id)
        if(exist){
            setCartItems(cartItems.map( x => x.id === product.id ? {...exist, qty: exist.qty +1} : x ))
            countCartItems++
            console.log(countCartItems+1)
        } else {
            setCartItems([...cartItems, {...product, qty: 1}])
        }
    }

    const onRemove = (product) => {
        const exist = cartItems.find(x => x.id === product.id)
        if(exist.qty === 1){
            setCartItems(cartItems.filter(x => x.id !== product.id))
        } else {
            setCartItems(cartItems.map( x => x.id === product.id ? {...exist, qty: exist.qty -1} : x ))
        }
    }

    return (
        <>
        <Flex>
            <Navbar/>
            <ShopCart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} countCartItems={cartItems.length}/>
            <Box >
            {countCartItems ? (
                <Badge colorScheme="red" color="white" borderRadius="full" >{countCartItems}</Badge>
            ) : ('')}
            </Box>
        </Flex>
            <Banner bgImage={bgPicture} />

            <Flex p={6} m="10px" wrap="wrap" justifyContent="space-around" alignItems="center" alignContent="center">
            { products.map(product => {
                return <ProductCard
                    key={product.id}
                    product={product}
                    onAdd={onAdd}
                />
              })}
              </Flex>
            <Newsletter/>
            <Footer/>
        </>
    )
}
