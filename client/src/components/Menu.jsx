import React from 'react'
import styles from "./Menu.module.scss"
import YoutubeLogo from '../images/youtube.png'

import {RiHome5Fill,RiHome5Line} from 'react-icons/ri'

const Menu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <img src={YoutubeLogo} alt="" />
          MeTube2
        </div>
        <div className={styles.item}>
        <RiHome5Fill/>
          HOme
        </div>
      </div>
    </div>
  )
}

export default Menu