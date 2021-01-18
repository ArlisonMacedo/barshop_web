import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import createProduct from './pages/createProduct'

//Pages
import Home from './pages/Home'


function Routes() {
  return (
    <BrowserRouter>
      <Route  exact path='/' component={Home} />
      <Route  exact path='/cadastro' component={createProduct} />
    </BrowserRouter>
  )
}

export default Routes