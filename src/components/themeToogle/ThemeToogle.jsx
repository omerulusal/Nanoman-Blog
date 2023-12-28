"use client"
import React, { useContext } from 'react'
import './_themeToogle.scss'
import { ThemeContext } from '@/context/ThemeContext'
const ThemeToogle = () => {
    const { toogle, theme } = useContext(ThemeContext)
    console.log(theme, toogle)
    return (
        <div className="toogle" onClick={toogle} >
            <div className='line' />
            <div className="ico-1" >☀️</div>
            <div className="ico-2" >🌕</div>
            <div className='ball' />
        </div>
    )
}

export default ThemeToogle