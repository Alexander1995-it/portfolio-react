import React from 'react'
import style from './Header.module.css'
import Nav from "../nav/Nav";


const Header = () => {
    console.log ('header')
    return (
        <div className={style.header}>
            <Nav/>
        </div>
    )
}

export default Header