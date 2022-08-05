import React from 'react'
import Image from 'next/image'
import Sitename from '../public/sitename.png'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faHome, faInfoCircle, faRegistered } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <Image src={Sitename} />
      </div>
      <div className='navLinks'>
        <Link href={'/'}><span className='navLink'><FontAwesomeIcon icon={faHome} /> Home</span></Link>
        <Link href={'/Register'}><span className='navLink'><FontAwesomeIcon icon={faRegistered} /> Register</span></Link>
        <Link href={'/Login'}><span className='navLink'><FontAwesomeIcon icon={faArrowRightToBracket} /> LogIn</span></Link>
        <Link href={'/Aboutus'}><span className='navLink'><FontAwesomeIcon icon={faInfoCircle} /> About Us</span></Link>
      </div>
    </div>
  )
}

export default Header