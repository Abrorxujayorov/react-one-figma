import React from 'react'
import Hero_lift from './heroLift/hero_lift'
import Hero_right from './heroright/hero_right'
import './hero.scss'
const Hero = () => {
  return (
    <div className='hero'>
      <Hero_lift />
      <Hero_right />
    </div>
  )
}

export default Hero
