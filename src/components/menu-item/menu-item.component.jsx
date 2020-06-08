import React from 'react'
import { withRouter } from 'react-router-dom';

import './menu-itm.styles.scss'

const shopNow = 'SHOP NOW';

const MenuItem = ({ title , imageUrl , size , history , match , linkUrl }) => (

    <div
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        className={`${size} menu-item`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>{shopNow}</span>
        </div>
    </div>
)

export default withRouter(MenuItem);