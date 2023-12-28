import React from 'react'
import Link from 'next/link'
import './_authLinks.scss'
const AuthLinks = () => {

    const status = "notauthenticated"
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
        </>
    )
}

export default AuthLinks