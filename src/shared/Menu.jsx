import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
    const menu = [
        {
            'title': 'All',
            'link': ''
        },
        {
            'title': 'Full Stack Development',
            'link': 1
        },
        {
            'title': 'data science',
            'link': 2
        },
        {
            'title': 'cyber security',
            'link': 3
        },
        {
            'title': 'career',
            'link': 4

        }];
    return (
        <div className='menu-container'>
            <div className='menu-wrapper'>
                {
                    menu.map((menus) => (
                        <NavLink to={`/${menus.link}`} className='menu-link' key={menus.link}>
                            {menus.title.toUpperCase()}
                        </NavLink>
                    ))
                }
            </div>
        </div>

    )
}

export default Menu