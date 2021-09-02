import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Sidebar from '../components/SideBarTest/SideBarTest'
import Routes from './Routes.js'

export default function AuthApp(){
    const setRoutes = () => (
        Routes.map(({path, Component}) => <Route key={path} exact path={path} component={Component}/>)
    )

    return(
        <>
        <Sidebar/>
        <Switch>
            {setRoutes()}
            <Redirect to="/dashboard/404" />
        </Switch>
        </>
    )
}