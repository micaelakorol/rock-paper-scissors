import React from 'react'
import './styles/App.css'
import {Helmet} from 'react-helmet'
import Functionalities from './components/Functionalities'

const App = () => {
  return (
    <div>
         <Helmet>
        <link rel="icon" href={require('./images/favicon.png')} />
            </Helmet> 
      <Functionalities/>
      </div>
  )
}

export default App