import Sitename from '../public/sitename.png'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faHome, faInfoCircle, faRegistered } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const d = new Date()
    const date = d.getFullYear()

    return (
        <>
            <div className="footer">
                <div className="topbar">
                    <section className="brand">
                        <div className='logo'>
                            <Image src={Sitename} />
                            <p>
                                All Usefull Free Easy-to-Use and Fastest Tools
                            </p>
                        </div>
                    </section>
                    <section className='aboutUsLinks'>
                        <h5>About Us</h5><br />
                        <ul>
                            <li><Link href={'/Blog'}><span className='navLink'>Blog</span></Link></li>
                            <li><Link href={'/Aboutus'}><span className='navLink'>About</span></Link></li>
                        </ul>
                    </section>
                    <section className='links'>
                        <h5>Importent Links</h5><br />
                        <ul>
                            <li><Link href={'/Contact'}><span className='navLink'>Contact Us</span></Link></li>
                            <li><Link href={'/Terms'}><span className='navLink'>Terms of Use</span></Link></li>
                            <li><Link href={'/Privacy'}><span className='navLink'>Privacy policy</span></Link></li>
                        </ul>
                    </section>
                </div>
                <div className="bottombar">
                    <span>© Copyright 2010-{`${date}`} Freetoolsbox.com</span>
                </div>
            </div>
        </>
    )
}
export default Footer