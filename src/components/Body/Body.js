import HelloBlock from "../HelloBlock/HelloBlock";
import Benefits from "../Benifits/Benefits";
import GamesBlock from "../GamesBlock/GamesBlock";
import QuestionsBlock from "../QuestionsBlock/QuestionsBlock";
import './Body.css'
import Recommendation from "../Recommendation/Recommendation";
import gradBack2 from "../../static/gradient-background-2.png";
import gradBack3 from "../../static/gradient-background-3.png";
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
        {/*<div style={{width: '100%', height: '100%', position: 'relative'}}>*/}
        {/*    <div className="Vector46" style={{width: 1297.66, height: 1128.05, left: 245.68, top: 86.71, position: 'absolute', transform: 'rotate(28.84deg)', transformOrigin: '0 0', background: 'rgba(156.66, 84.53, 228.79, 0.60)', boxShadow: '400px 400px 400px ', filter: 'blur(400px)'}}></div>*/}
        {/*    <div className="Vector47" style={{width: 1260.29, height: 1319.71, left: 1591.38, top: 1840.08, position: 'absolute', transform: 'rotate(-154.40deg)', transformOrigin: '0 0', background: 'rgba(14.76, 167.34, 177.08, 0.50)', boxShadow: '400px 400px 400px ', filter: 'blur(400px)'}}></div>*/}
        {/*</div>*/}
    </div>
}