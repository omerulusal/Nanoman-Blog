"use client"
import { signIn, useSession } from 'next-auth/react'
import './_login.scss'

const LoginPage = () => {

    const { data, status } = useSession()
    console.log(data, status)
    return (
        <div className='login'>
            <div className="lWrapper">
                <div className='lButton' onClick={() => signIn('google')}>
                    Sign in with Google
                </div>
                <div className='lButton'>
                    Sign in with GitHub
                </div>
                <div className='lButton'>
                    Sign in with Facebook
                </div>
            </div>
        </div>
    )
}

export default LoginPage