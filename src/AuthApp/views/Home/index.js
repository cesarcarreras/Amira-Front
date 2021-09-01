import React from 'react';
import {Sidebar} from '@components';
import {useAuth} from '../../../utils/AuthContext';

const Home = () => {
    const [{user}] = useAuth()
    return(
        <div>
            <Sidebar
                name = {user.name}
                role = {user.role}
                img = {user.img}
            />
        </div>
    )
};

export default Home