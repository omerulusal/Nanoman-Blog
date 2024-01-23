"use client"
import { signIn, useSession } from 'next-auth/react'
import './_login.scss'
import { useRouter } from 'next/navigation'

const LoginPage = () => {

    const router = useRouter()
    const { status } = useSession()//useSession ile kullanıcı oturumunu kontrol edilir
    if (status === "loading") {
        return <div className='loading'>Loading...</div>
    }
    if (status === "authenticated") {
        return router.push("/")
        //kullanıcı oturumu actıysa anasayfaya yonlendirir
    }
    return (
        <div className='login'>
            <div className="lWrapper">
                <div className='lButton' onClick={() => signIn('google')}>
                    Sign in with Google
                </div>
                <div className='lButton' onClick={() => signIn('github')} >
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

/*

kullanıcı butona tıklayınca signIn fonksiyonu tetiklenir ve 
kullanıcıyı belirtilen servise oturum acması icin yonlendirir.

*/