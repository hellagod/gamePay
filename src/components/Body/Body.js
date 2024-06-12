import HelloBlock from "../HelloBlock/HelloBlock";
import Benefits from "../Benifits/Benefits";
import GamesBlock from "../GamesBlock/GamesBlock";
import QuestionsBlock from "../QuestionsBlock/QuestionsBlock";
import './Body.css'
import Recommendation from "../Recommendation/Recommendation";
import gradBack2 from "../../static/gradient-background-2.svg";
import gradBack3 from "../../static/gradient-background-3.svg";
import Subscribe from "../Subscribe/Subscribe";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Body() {
    return <div style={{position: "relative", height: "fit-content"}}>
        <Header/>
        <HelloBlock/>
        <GamesBlock/>
        <Benefits/>
        <div style={{overflow: "hidden", maxWidth: "100vw", position: "relative"}}>
            <img src={gradBack2} className="questions-gradient" alt=""/>
            <QuestionsBlock/>
            <Recommendation/>
            <Subscribe/>
            <img src={gradBack3} className="subscribe-gradient" alt=""/>
            <Footer/>
        </div>
    </div>
}