import './Games.css'
import Header from "../Header/Header";
import gradBack2 from "../../static/gradient-background-2.png";
import Footer from "../Footer/Footer";
import gradBack1 from "../../static/gradient-background-1.png";
import QuestionsBlock from "../QuestionsBlock/QuestionsBlock";
import GamesBlock from "../GamesBlock/GamesBlock";
import {useEffect} from "react";

export default function Games() {
    useEffect(() => {
        window.scroll(0,0)
    }, []);

    return <div style={{position: "relative", height: "fit-content"}}>
        <Header/>
        <div style={{overflow: "hidden", maxWidth: "100vw", position: "relative"}}>
            <img src={gradBack1} className="games-all-gradient" alt=""/>
            <img src={gradBack2} className="games-questions-gradient" alt=""/>
            <div className="space"></div>
            <GamesBlock isFull={true}/>
            <QuestionsBlock/>
            <Footer/>
        </div>
    </div>
}



