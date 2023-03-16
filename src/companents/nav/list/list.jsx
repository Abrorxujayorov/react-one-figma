import React from 'react'
import './list.scss'
const List = ({link, text}) => {
  return (
    <ul className='list'>
        <li className='list__item'><a href="#" className='list__link'>О компании</a></li>
        <li className='list__item'><a href="#" className='list__link'>Портфолио</a></li>
        <li className='list__item'><a href="#" className='list__link'>Услуги</a></li>
        <li className='list__item'><a href="tel:+998999929900" className='list__link'>Контакты</a></li>
    </ul>
  )
}
export default List