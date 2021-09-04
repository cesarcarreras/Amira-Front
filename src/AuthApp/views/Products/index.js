import React, {useEffect, useState} from 'react';
import { ProductCard } from '@components';
import { Flex } from '@chakra-ui/react';
import { allProductsEP } from '@services/product-ws';

function Products(){

    const [products, setProducts] = useState([])

    useEffect(() => {
        allProductsEP()
        .then(({data}) => setProducts([...data.products]))
        .catch(err => console.log(err))
    }, [])
    console.log(products)

   return(
       <>
               <h1>Aquí van todos los productos</h1>
        <Flex wrap="wrap" justify="space-between" alignContent="space-between">
            { products.map(product => {
                return <ProductCard
                    key={product.id}
                    title={product.title}
                    description={product.description}
                />
            })}
        </Flex>
        </>
    )
};

export default Products;