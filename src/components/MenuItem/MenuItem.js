import './MenuItem.css'
import arrow from '../../static/arrow.svg'
import {Navigate} from "react-router-dom";
import {useState} from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export default function MenuItem({children, to}){
    const [clicked, setClicked] =useState(false)

    return <div className="menu-item-container" onClick={() => setClicked(true)}>
        <div className="menu-item">
            <div>
                {children}
            </div>
            <img src={arrow} alt="arrow"/>
        </div>
        {clicked && <Navigate to={to}/>}
    </div>
}