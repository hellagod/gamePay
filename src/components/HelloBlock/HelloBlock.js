import './HelloBlock.css'
import back from '../../static/gabe.png'
import Ticker from "../Ticker/Ticker";
import MenuItem from "../MenuItem/MenuItem";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export default function HelloBlock() {
    const {width} = useWindowDimensions()

    return <div className="hello-block-container" style={{
        backgroundImage: `url(${back})`, backgroundSize: "cover",
        height: "100vh", position: 'relative'
    }}>
        <div className="hello-block">
            <div className="gabe-pay">
                <div className="bl-pay"/>
                <div className="gabe-pay-title">
                    Gabe
                    <span> Pay</span>
                    {" "}– {width >= 850 ? "" : "лучший "}сервис <br/> для пополнения <br/> Steam и любимых игр
                </div>
                <div className="pay-now-button">
                    <div className="pay-now">Пополнить Сейчас</div>
                </div>
            </div>
            {width < 850 ?
                <div className="menu">
                    <MenuItem to='/games'><br/>Множество<br/>доступных<br/>игр</MenuItem>
                    <MenuItem to='/steam'><br/>Мгновенное<br/>пополнение<br/>Steam</MenuItem>
                    <MenuItem><br/><br/>Наш Telegram<br/><br/></MenuItem>
                </div>
                :
                <div className="menu">
                    <MenuItem to='/games'><br/>Множество<br/>доступных игр</MenuItem>
                    <MenuItem to='/steam'><br/>Мгновенное<br/>пополнение Steam</MenuItem>
                    <MenuItem><br/><br/>Наш Telegram</MenuItem>
                </div>
            }
        </div>
        <Ticker/>
    </div>

}