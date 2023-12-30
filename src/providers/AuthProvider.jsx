"use client"
import { SessionProvider } from "next-auth/react"
const AuthProvider = ({ children }) => {
    return (
        <SessionProvider>{children}</SessionProvider>
    )
}

export default AuthProvider

/*

!!! NOT: Kullanıcının oturum acıp acmadıgını SessionProvider ile kontrolu saglanacak.
!!! NOT: Bunun icin bu Providerı layout.js dosyasına sarmaladım.

*/