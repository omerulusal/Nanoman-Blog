"use client"
import React from 'react'
import { SessionProvider } from "next-auth/react"
const AuthProvider = ({ children }) => {
    return (
        <SessionProvider>{children}</SessionProvider>
    )
}

export default AuthProvider

/*

!!! NOT: Kullanıcının oturum acıp acmadıgını SessionProvider ile kontrolu saglanacak.Bunun icin bu Providerı layout.js dosyasına sarmaladım.

*/