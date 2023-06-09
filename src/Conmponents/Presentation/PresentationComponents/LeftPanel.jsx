import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ContextHome } from '../../../ContextHomePage'

export default function LeftPanel() {

    const { listHeight } = useContext(ContextHome);
    const navigate = useNavigate()

    return (
        <div className='left-panel'>
            <ul className='list' ref={listHeight}>
                <h1 className='menu' onClick={() => { navigate('/'); localStorage.removeItem("User") }}>Menu</h1>

                <li>
                    <NavLink to={""}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"presentationslider"}>Sliders</NavLink>
                </li>
            </ul>
        </div>
    )
}
