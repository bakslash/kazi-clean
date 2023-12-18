/* prettier-ignore */
/* eslint-disable */
import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'



const _nav = [
  {
    component: CNavItem,
    name: 'Admin',
    to: '/',
  
   
  },
 
  {
    component: CNavItem,
    name: 'Add Orders',
    to: '/admin/add-order',
  },
  {
    component: CNavItem,
    name: 'View Orders',
    to: '/admin/orders',
  },
  {
    component: CNavItem,
    name: 'Add customers',
    to: '/admin/add-customers',
  },
  {
    component: CNavItem,
    name: 'View customers',
    to: '/admin/customers',
  },
  {
    component: CNavItem,
    name: 'Reports',
    to: '/admin/report',
  },
  {
    component: CNavItem,
    name: 'Inventory',
    to: '/admin/inventory',
  },
 
  
  
  

]






export default _nav
