import React from 'react';
import { Sidebar } from '@components';
import {useAuth} from '../../../utils/AuthContext';

const Products = () => {
    const [{user}] = useAuth()
    return(
        <>
                        <h1>Aquí van los products</h1>
        <Sidebar
        name = {user.name}
        role = {user.role}
        img = {user.img}
    />
        </>
    )
};

export default Products;