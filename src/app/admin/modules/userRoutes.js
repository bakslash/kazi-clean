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
const Expenses = React.lazy(() => import('../../../views/pages/Expenses'))
const Income = React.lazy(() => import('../../../views/pages/Income'))
const Report = React.lazy(() => import('../../../views/pages/Report'))
const Success = React.lazy(() => import('../../../views/pages/Success'))
const ExistingCustomers = React.lazy(() => import('../../../views/pages/ExistingCustomers'))



const Tables = React.lazy(() => import('../../../views/base/tables/Tables'))
// const Validation = React.lazy(() => import('../../../views/forms/validation/Validation'))



const routes = [
  { path: '/', name: 'Home', element: Dashboard  },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard  },
  { path: '/add-customers', name: 'Add Customers', element: AddCustomers  },
  { path: '/customers', name: 'Customers', element: Customers  },
  { path: '/add-order', name: 'New Order', element: NewOrder  },
  { path: '/orders', name: 'Orders', element: Orders  },
  { path: '/expenses', name: 'Expenses', element: Expenses  },
  { path: '/income', name: 'Income', element: Income  },
  { path: '/inventory', name: 'Inventory', element: Inventory  },
  { path: '/report', name: 'Report', element: Report  },
  { path: '/success', name: 'Success', element: Success  },
  { path: '/existing_customer/:id', name: 'Existing Customers', element: ExistingCustomers },

  { path: '/tables', name: 'Tables', element: Tables  },
];

console.log('r',routes);

export default routes
