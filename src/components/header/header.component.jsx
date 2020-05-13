import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/4.3 crown.svg.svg';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <div className='logo-container'>
            <Link to='/'>
                <Logo />
            </Link>
        </div>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            <Link className='option' to='/signin'>
                SIGNIN
            </Link>
            <Link className='option' to='/cart'>
                <i className="fa fa-shopping-bag"></i>
            </Link>
        </div>

    </div>
)

export default Header;
