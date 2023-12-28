"use client"
import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext } from 'react'

const ThemeProvider = ({children}) => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={theme}>
            {children}
        </div>
    )
}

export default ThemeProvider
/*
Bu provider, ThemeContext'te tanımlanan 'theme' state'ini kullanır.
Bu komponent, 'theme' state'ini kullanarak tema rengini belirler.
Tema rengini tum sayfalara uyarlamak icin layout.js dosyasına sarmaladım.
*/