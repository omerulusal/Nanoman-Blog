"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import './_authLinks.scss'
const AuthLinks = () => {

    const status = "notauthenticated"
    const [open, setOpen] = useState(false)
    console.log(open)
    return (
        <>
            {status === "notauthenticated" ? (
                <Link className='page' href={"/login"}>Login</Link>
            ) : (
                <>
                    <Link href={"/write"} className='page' >Write</Link>
                    <span className='page'>Logout</span>
                </>
            )}
            <div className='burger' onClick={() => setOpen(!open)}>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>
            {
                open && (
                    <div className='responsiveMenu' >
                        <Link className='link' href={"/"}>Homepage</Link>
                        <Link className='link' href={"/"}>Contact</Link>
                        <Link className='link' href={"/"}>About</Link>
                        {status === "notauthenticated" ? (
                            <Link className='page' href={"/login"}>Login</Link>
                        ) : (
                            <>
                                <Link href={"/write"} className='page' >Write</Link>
                                <span className='page'>Logout</span>
                            </>
                        )}
                    </div>
                )
            }
        </>
    )
}

export default AuthLinks

/*
Eger open state'i true ise responsiveMenu icindeki Linkler acilacaktir.
Bunun acılıp acılmamasının kontrolu burger deki onclick e baglıdır.
Bu burger menu ise sayfa 640 px e dusunce gorunecektir.

*/