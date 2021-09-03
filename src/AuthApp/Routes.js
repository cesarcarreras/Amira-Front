import React from 'react'
import { NotFound } from '@components'
import PageSection from '../components/Layout/PageSection'
import { Home, Products, Profile } from './views'


export default [
    {
        path: '/dashboard/home',
        label: 'Dashboard',
        type: 'menu',
        Component: () =>(
        <PageSection>
          <Home/>
        </PageSection>
        )
    },
    {
        path: '/dashboard/products',
        label: 'Products',
        type: 'menu',
        Component: () =>(
        <PageSection>
          <Products/>
        </PageSection>
        )
    },
    {
        path: '/dashboard/clients',
        label: 'Clients',
        type: 'menu',
        Component: () =>(
            <PageSection>
            <Profile/>
          </PageSection>
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
            <PageSection>
            <Profile/>
          </PageSection>
        )
    }
]