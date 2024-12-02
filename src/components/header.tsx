import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


function Header() {
  return (
  <header>
    <div className='navbar'>
    <h1 className='logo'>ADVENTURE</h1>
    
    <nav>
      <ul className='nav-links'>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="#tour">Tours</Link></li>
      <li><Link href="#Explore">Explore</Link></li>
      <li><Link href="/connect">Connect</Link></li>
      </ul>
    
    </nav>
    </div>
</header>

  )
}

export default Header
