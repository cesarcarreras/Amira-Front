import React, {useEffect, useState} from 'react'
import {allProductsEP} from '@services/product-ws'
import { Banner, Footer, Navbar, Newsletter, ProductBanner, ProductCard, ShopCart } from '@components'
import { Badge, Box, Flex, useToast } from '@chakra-ui/react'
import bgPicture from '@assets/images/background-products.jpg'


export default function Products() {

    const toast = useToast()

    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || [])

    const [products, setProducts] = useState([])

    let countCartItems = cartItems.length

    useEffect(() => {
        allProductsEP()
        .then(({data}) => setProducts([...data.products]))
        .catch(err => console.log(err))
    }, [])

    const onAdd = (product) => {
        toast({
            position: 'top-right',
            title: "Producto añadido al carrito",
            status: 'success',
            duration: 1000,
        })
        if(localStorage.getItem("cartItems")){
            let newCart = JSON.parse(localStorage.getItem("cartItems"))
            const exist = newCart.find( x => x._id === product._id)
            if(exist){
                let updatedCartQTY = []
                let addQTY = newCart.find(x => x._id === exist._id)
                addQTY.qty = addQTY.qty + 1
                updatedCartQTY.push(addQTY)
                newCart = newCart.map(obj => updatedCartQTY.find(o => o._id === obj._id) || obj);
                localStorage.removeItem("cartItems")
                countCartItems++
                localStorage.setItem("cartItems", JSON.stringify(newCart))
                setCartItems(newCart)
            } else {
                newCart.push({...product, qty : 1})
                localStorage.setItem("cartItems", JSON.stringify(newCart))
                setCartItems(newCart)
            }
        } else {
            localStorage.setItem("cartItems", JSON.stringify([{...product, qty: 1}]))
            setCartItems([{...product, qty: 1}])
        }
    }


    const onRemove = (product) => {
            let newCart = JSON.parse(localStorage.getItem("cartItems"))

            const exist = newCart.find( x => x._id === product._id)
            console.log(exist.qty)

            if(exist.qty >= 1){
                let updatedCartQTY = []
                let removeQTY = newCart.find(x => x._id === exist._id)
                removeQTY.qty = removeQTY.qty - 1
                updatedCartQTY.push(removeQTY)
                newCart = newCart.map(obj => updatedCartQTY.find(o => o._id === obj._id) || obj);
                localStorage.removeItem("cartItems")
                countCartItems--
            } else {
                localStorage.removeItem("cartItems")
                setCartItems([])
            }
            countCartItems--
    }

    const removeAll = () => {
        localStorage.removeItem("cartItems")
        setCartItems([])
        toast({
            position: 'top-right',
            title: "Carrito se vació correctamente",
            status: 'success',
            duration: 2000,
        })
    }


    return (
        <>
        <Flex>
            <Navbar/>
            <ShopCart onAdd={onAdd} onRemove={onRemove} removeAll={removeAll} cartItems={cartItems} countCartItems={cartItems.length}/>
            <Box >
            {countCartItems ? (
                <Badge colorScheme="red" color="white" borderRadius="full" >{countCartItems}</Badge>
            ) : ('')}
            </Box>
        </Flex>
            <ProductBanner bgImage={bgPicture} />

            <Flex p={6} m="10px" wrap="wrap" justifyContent="space-around" alignItems="center" alignContent="center">
            { products.map(product => {
                return <ProductCard
                    key={product._id}
                    product={product}
                    onAdd={onAdd}
                    onRemove={onRemove}
                />
              })}
              </Flex>
            <Newsletter/>
            <Footer/>
        </>
    )
}
