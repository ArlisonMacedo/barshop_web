import React from 'react'
import {Link} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'

import logo from '../../assets/logo.png'
import './styles.css'

function Home (){
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="O lenhador minoxidil" />
          
        </header>
        <main>
          <h1>O LENHADOR MINOXIDIL</h1>
          <p>
            Escolha seu produto e entre em contato com mestre
          </p>
          <Link to="/cadastro">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um novo produto</strong>
          </Link>
        </main>
      </div>
    </div>
  )
}

export default Home