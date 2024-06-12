import GameCard from "../GameCard/GameCard";
import arrow from '../../static/arrow-right.svg'
import arrowSmall from '../../static/arrow-small.svg'
import './GamesBlock.css'
import gradBack1 from "../../static/gradient-background-1.svg"
import {Navigate} from "react-router-dom";
import {useEffect, useState} from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import gamesData from "../../utils/games";

export default function GamesBlock({isFull = false}) {
    const [clicked, setClicked] = useState(false)
    const {width} = useWindowDimensions();
    const [games, setGames] = useState(gamesData)

    useEffect(() => {
        if (!isFull) {
            if (1201 > width && width > 572) {
                setGames(gamesData.slice(0, 9))
            } else {
                setGames(gamesData.slice(0, 10))
            }
        }
    }, [isFull, width]);

    return <div className="games-container">
        {!isFull && <img src={gradBack1} className="games-gradient" alt=""/>}
        <div className="games-block">
            <div className="games-title">
                <span className="games-title-bl">Пополни </span>
                любимую игру прямо сейчас
            </div>
            <div className="games-grid">
                {games.map((g, index) => <GameCard key={index} title={g.title} discount={`-${g.discount}%`}
                                                   image={g.image} to={g.to}/>)}
            </div>
            {!isFull && <div className="more-button" onClick={() => setClicked(true)}>
                <div className="more-button-text">Смотреть ещё</div>
                <div className="more-button-icon"
                     style={{
                         maskImage: `url(${(width <= 851 ? arrowSmall : arrow)})`,
                         WebkitMaskImage: `url(${(width <= 851 ? arrowSmall : arrow)})`
                     }}/>
            </div>}
            {clicked && <Navigate to='/games'/>}
        </div>
    </div>
}