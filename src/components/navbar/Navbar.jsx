import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './_navbar.scss'
import ThemeToogle from '../themeToogle/ThemeToogle'
import AuthLinks from '../authLinks/AuthLinks'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="icons">
                <Link href={"https://www.facebook.com"} target='_blank'>
                    <Image src={"/facebook.png"} alt="social" width={20} height={20} />
                </Link>
                <Link href={"https://www.instagram.com"} target='_blank'>
                    <Image src={"/instagram.png"} alt="social" width={20} height={20} />
                </Link>
                <Link href={"https://www.tiktok.com"} target='_blank'>
                    <Image src={"/tiktok.png"} alt="social" width={20} height={20} />
                </Link>
                <Link href={"https://www.youtube.com"} target='_blank'>
                    <Image src={"/youtube.png"} alt="social" width={20} height={20} />
                </Link>
            </div>
            <div className='logo'>
                <Link href={"/"}>
                    <Image src={"/logo.png"} alt="logo" className='logo' width={90} height={50} priority  />
                </Link>
            </div>
            <div className="right">
                <ThemeToogle />
                <div className="pages">
                    <Link className='page' href={"/"}>Homepage</Link>
                    <Link className='page' href={"/"}>Contact</Link>
                    <Link className='page' href={"/"}>About</Link>
                    <AuthLinks />
                </div>
            </div>
        </div>
    )
}

export default Navbar