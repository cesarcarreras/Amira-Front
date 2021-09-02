import React from 'react'
import { NotFound } from '@components'
import NavItem from '../components/SideBarTest/NavItemTest'
import { Home, Products, Profile } from './views'


export default [
    {
        path: '/dashboard/home',
        label: 'Dashboard',
        type: 'menu',
        Component: () =>(
        <NavItem>
          <Home/>
        </NavItem>
        )
    },
    {
        path: '/dashboard/products',
        label: 'Products',
        type: 'menu',
        Component: () =>(
        <NavItem>
          <Products/>
        </NavItem>
        )
    },
    {
        path: '/dashboard/404',
        label: 'Not found',
        type: 'none',
        Component: () =>(
            <NotFound/>
        )
    },
    {
        path: '/dashboard/profile',
        label: 'Profile',
        type: 'menu',
        Component: () =>(
            <NavItem>
            <Profile/>
          </NavItem>
        )
    }
]