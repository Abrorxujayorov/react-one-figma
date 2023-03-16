import React from 'react'
import './navinfo.scss'
import { BsFillMoonFill } from 'react-icons/bs'
import { WiSunset } from 'react-icons/wi'
const Navinfi = () => {
  return (
    <div className='info'>
    <div className='bgColors'>
        <span className='icon'><WiSunset/></span>
        <span className='icon'><BsFillMoonFill/></span>
    </div>
    <div className='phone'>
       <div className='phone-baza'>
       <span><a href="tel:+777" className='info-link'>+998 90 777 77 77</a></span> <br />
        <span><a href="mailto:xijayorov3@gmail.com" className='info-link'>chotatam@gmail.com</a></span>
       </div>
        <button className='zvanok'>Заказать звонок</button>
    </div>
    </div>
  )
}

export default Navinfi