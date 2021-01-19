import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

//Pages
import Home from './pages/Home'
import createProduct from './pages/createProduct'



function Routes() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route exact path='/cadastro' component={createProduct} />

    </BrowserRouter>
  )
}

export default Routes