import React from 'react'
import Menu from './components/Menu'
import NavBar from './components/NavBar'
import styles from "./App.module.scss"

const App = () => {
  return (
    <div className={styles.container}>
      <Menu></Menu>
      <div className={styles.main}>
        <NavBar></NavBar>
        <div className={styles.wrapper}>Videos</div>
      </div>
    </div>
  )
}

export default App