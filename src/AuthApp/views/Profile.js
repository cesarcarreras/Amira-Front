import React from 'react';
import {useAuth} from '../../AuthContext';

export const Profile = () => {

    const [{user}] = useAuth()
    console.log(user)
    return(
        <div>
            <h1>¡Hola, {user.name}!</h1>
            <img src={user.img} />
        </div>
    )
};