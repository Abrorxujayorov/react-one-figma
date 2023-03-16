import React from 'react'
import Nav from '../../companents/nav/Nav'
import './header.scss'
import Hero from '../../companents/hero/hero'
const Header = () => {
  return (
    <div className='header'>
      <Nav />
      <Hero/>
    </div>
  )
}

export default Header
