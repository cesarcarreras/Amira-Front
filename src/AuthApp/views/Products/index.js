import React from 'react';
import { Sidebar } from '@components';
import {useAuth} from '../../../utils/AuthContext';
import { Flex } from '@chakra-ui/react';

const Products = () => {
    const [{user}] = useAuth()
    return(
        <>

        </>
    )
};

export default Products;