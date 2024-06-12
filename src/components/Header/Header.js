import logo from '../../logo.svg'
import logo_small from '../../static/logo_small.svg'
import steam from '../../static/steam_header.svg'
import game from '../../static/game_header.svg'
import './Header.css'
import HeadButton from "../HeadButton/HeadButton";
import SearchBar from "../SearchBar/SearchBar";
import {Navigate} from "react-router-dom";
import {useEffect, useState} from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export default function Header() {
    const [clicked, setClicked] = useState(false)
    const {width} = useWindowDimensions()

    return <div className="header_container">
        <div className="header">
        <img src={(width < 850 ? logo_small:logo)} alt="GabePay" onClick={()=>setClicked(true)}/>
        <HeadButton icon={steam} size={(width < 850 ? {w: 25, h: 25} : {w: 35, h: 35})} to="/steam">Пополнить <br/>Steam</HeadButton>
        <HeadButton icon={game} size={(width < 850 ? {w: 27, h: 20} : {w: 40, h: 30})} to="/games">Другие <br/>Сервисы</HeadButton>
        <SearchBar/>
        {clicked && <Navigate to='/'/>}
        </div>
    </div>

}