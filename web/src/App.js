import React, { useState, useEffect } from 'react'
import api from './services/api'
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

import DevItem from './components/DevItem/index'
import DevForm from './components/DevForm/index'
/** 
 * Component = Block isolate of HTML, CSS and JS, which don`t interfer of restant of aplication
 * State = informations which a component Dad pass to component Son
 * Property = Informations maintain for component(Imutability)
*/

function App() {
  const [developers, setDevelopers] = useState([])

  
  

  useEffect(() => {
    async function loadDevelopers() {
      const response = await api.get('/listdevelopers')

      setDevelopers(response.data)
    }
    loadDevelopers()
  }, [])

  async function handleAddDev(data) {

    const response = await api.post('/developers', data)

    setDevelopers([...developers, response.data])
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {developers.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          )
          )
          }
        </ul>
      </main>
    </div>
  )
}

export default App;
