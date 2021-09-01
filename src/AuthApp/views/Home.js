import React from 'react';
import {Sidebar} from '@components';
import {useAuth} from '../../AuthContext';

export const Home = () => {
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