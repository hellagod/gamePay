import './HeadButton.css'
import {useState} from "react";
import {Navigate} from "react-router-dom";
export default function HeadButton({icon, children, size: {w,h}, to}){
    const [clicked, setClicked] = useState(false)
    return <div className="header_button" onClick={()=>setClicked(true)}>
        <div style={{maskImage: `url(${icon})`, WebkitMaskImage: `url(${icon})`, width: `${w}px`,
            height: `${h}px`}}/>
        <span>{children}</span>
        {clicked && <Navigate to={to}/>}
    </div>
}