import React from 'react'
import {ReactComponent as Logo} from '../../utils/crown.svg'
import { Link } from 'react-router-dom'
import './header.styles.scss'
export const Header = () =>(

    <div className = 'header'>
        <Link to = '/'>
            <Logo className = 'logo'/>
        </Link>
            <div className ='options'>
                <Link className = 'option' to = '/shop'>Shop</Link>
                <Link className = 'option' to = '/'>About</Link>
            </div>
    </div>
)

export default Header;

