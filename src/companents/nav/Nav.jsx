import React from 'react'
import './nav.scss'
import Logo from './logo/logo'
import List from './list/list'
import Navinfi from './navinfo/Navinfi'

const Nav = () => {
  return (
    <div className='nav'>
        <Logo />
        <List />
        <Navinfi />
    </div>
  )
}

export default Nav