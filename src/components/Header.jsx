import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

export default function Header() {
  return (
    <div>
      <ul className='headers'>
        <li><Link to='/'>Anasayfa</Link></li>
        <li><Link to='/users'>Kullanıcılar</Link></li>
        <li><Link to='/posts'>Postlar</Link></li>
        <li><Link to='/comments'>Yorumlar</Link></li>
      </ul>
    </div>
  )
}
