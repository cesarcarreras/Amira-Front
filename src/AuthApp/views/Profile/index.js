import React from 'react';
import {useAuth} from '../../../utils/AuthContext';

const Profile = () => {

    const [{user}] = useAuth()
    console.log(user)
    return(
        <div>
            <h1>¡Hola, {user.name}!</h1>
            <img src={user.img} alt="User Profile"/>
        </div>
    )
};

export default Profile;