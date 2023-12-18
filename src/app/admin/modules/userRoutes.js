import React from 'react'
// import {  Route, Routes } from 'react-router-dom'

// import RequireAuth from "../../../RequireAuth";
// import UserService from '../../../services/UserService'

const Dashboard = React.lazy(() => import('../../../views/dashboard/Dashboard'))
const Orders = React.lazy(() => import('../../../views/pages/Orders'))
const AddCustomers = React.lazy(() => import('../../../views/pages/AddCustomers'))
const Customers = React.lazy(() => import('../../../views/pages/Customers'))
const NewOrder = React.lazy(() => import('../../../views/pages/NewOrder'))
const Inventory = React.lazy(() => import('../../../views/pages/Inventory'))
//const Expenses = React.lazy(() => import('../../../views/pages/Expenses'))
const Report = React.lazy(() => import('../../../views/pages/Report'))
const Success = React.lazy(() => import('../../../views/pages/Success'))



const Tables = React.lazy(() => import('../../../views/base/tables/Tables'))
// const Validation = React.lazy(() => import('../../../views/forms/validation/Validation'))

// const Charts = React.lazy(() => import('../../../views/charts/Charts'))

const routes = [

  

  { path: '/', exact: true, name: 'Admin' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/add-customers', name: 'customers', element: AddCustomers },
  { path: '/customers', name: 'customers', element: Customers },
  { path: '/add-order', name: 'Orders', element: NewOrder },
  { path: '/orders', name: 'Orders', element: Orders },
  { path: '/inventory', name: 'Orders', element: Inventory },
  { path: '/report', name: 'Orders', element: Report },
  { path: '/success', name: 'Orders', element: Success },
  { path: '/tables', name: 'Tables', element: Tables },
 
 
  // { path: '/base', name: 'Base', element: Cards, exact: true },
  // { path: '/base/accordion', name: 'Accordion', element: Accordion },
  // { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  // { path: '/base/cards', name: 'Cards', element: Cards },
  // { path: '/base/carousels', name: 'Carousel', element: Carousels },
  // { path: '/base/collapses', name: 'Collapse', element: Collapses },

 
]

console.log('r',routes);

export default routes
