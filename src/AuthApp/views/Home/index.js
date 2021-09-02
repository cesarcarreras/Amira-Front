import React from 'react';
import {useAuth} from '../../../utils/AuthContext';

const Home = () => {
    const [{user}] = useAuth()
    return(
        <h1>Hola</h1>
    )
};

export default Home