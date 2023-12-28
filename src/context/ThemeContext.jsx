"use client"
import { createContext, useEffect, useState } from "react"
export const ThemeContext = createContext()

const getFromLocalStroage = () => {
    if (typeof window !== undefined) {
        const value = localStorage.getItem("theme")
        // localStorage'a theme adlı bir anahtarının varlığını kontrol edilir
        return value || "light"
        // eger anahtarın varlığı yoksa 'light' olarak ayarlanır
    }
}
export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return getFromLocalStroage()
    })

    const toogle = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])
    return (
        <ThemeContext.Provider value={{ theme, toogle }}>
            {children}
        </ThemeContext.Provider>
    )
}

