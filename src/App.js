import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
//import RequireAuth from "./RequireAuth";
//import UserService from './services/UserService'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
// const Add = React.lazy(() => import('./views/pages/NewOrder'))
// const View = React.lazy(() => import('./views/pages/Orders'))
// const Report = React.lazy(() => import('./views/pages/Report'))
// const Inventory = React.lazy(() => import('./views/pages/Inventory'))
// const Client = React.lazy(() => import('./views/pages/AddCustomers'))

//const Expenses = React.lazy(() => import('./views/pages/Expenses'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/" name="Login Page" element={
            <Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/404" name="Pdem" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route path="/admin/*" name="Admin" element={
              //  <RequireAuth loggedIn={UserService.isLoggedIn}>
 <DefaultLayout />
             
           
            } />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App
