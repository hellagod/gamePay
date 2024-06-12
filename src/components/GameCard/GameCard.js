import './GameCard.css'
import {useState} from "react";
import {Navigate} from "react-router-dom";

export default function GameCard({discount, title, image, to}) {
    const [clicked, setClicked] = useState(false)
    return <div className="game-card" onClick={() => setClicked(true)}>
        <div className="game-disc-img">
            <img className="game-image" src={image} alt=""/>
            <div className="discount">
                {discount}
            </div>
        </div>
        <div className="game-title-container">
            <div className="game-title">{title}</div>
        </div>
        {clicked && <Navigate to={to}/>}
    </div>

}