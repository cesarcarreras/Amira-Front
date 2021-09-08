import React from 'react'
import { NotFound } from '@components'
import PageSection from '@components/Layout/PageSection'
import { Home, Products, Profile, Checkout, Clients, Orders } from './views'


export default [
    {
        path: '/dashboard/home',
        label: 'Dashboard',
        type: 'menu',
        Component: () =>( <PageSection> <Home/> </PageSection>)
    },
    {
        path: '/dashboard/products',
        label: 'Products',
        type: 'menu',
        Component: () =>( <PageSection> <Products/> </PageSection> )
    },
    {
        path: '/dashboard/clients',
        label: 'Clients',
        type: 'menu',
        Component: () =>( <PageSection> <Clients/> </PageSection> )
    },
    {
        path: '/dashboard/orders',
        label: 'Orders',
        type: 'menu',
        Component: () =>( <PageSection> <Orders/> </PageSection> )
    },
    {
        path: '/dashboard/profile',
        label: 'Profile',
        type: 'menu',
        Component: () =>( <PageSection> <Profile/> </PageSection> )
    },
    {
      path: '/dashboard/checkout',
      label: 'Checkout',
      type: 'none',
      Component: () =>( <PageSection> <Checkout/> </PageSection>)
    },
    {
        path: '/dashboard/confirm_purchase',
        label: 'Profile',
        type: 'none',
        Component: () =>( <PageSection> <Checkout/> </PageSection> )
    },
    {
      path: '/dashboard/404',
      label: 'Not found',
      type: 'none',
      Component: () =>( <NotFound/> )
  }
]