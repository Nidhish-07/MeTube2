import React from 'react'
import Menu from './components/Menu'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className="flex ">

      <Menu>
        <div>
          <NavBar></NavBar>
          <div>
Videos
          </div>
        </div>
      </Menu>
    </div>
  )
}

export default App