import './Footer.css'
import logo from '../../static/logo_footer.svg'
import telegram from '../../static/telegram.svg'
import vk from '../../static/vk.svg'
import {useState} from "react";
import {Navigate} from "react-router-dom";

export default function Footer() {
    const [clicked, setClicked] = useState(false)
    return <div className="footer-container">
        <div className="footer-block">
            <div className="footer-row">
                <div className="footer-menu">
                    <div className="footer-menu-column">
                        <div className="footer-text footer-link" onClick={()=>setClicked(true)}>Пополнить баланс Steam</div>
                        <div className="footer-text footer-link">Другие сервисы</div>
                    </div>
                    <div className="footer-menu-column">
                        <div className="footer-text footer-link">Вопросы</div>
                        <div className="footer-text footer-link">Связаться с нами</div>
                    </div>
                </div>
                <div className="footer-messengers-container">
                    <div className="footer-messengers">
                        <div className="footer-text">Наши соц. сети</div>
                        <div className="footer-icon" style={{maskImage: `url(${vk})`, WebkitMaskImage: `url(${vk})`}}/>
                        <div className="footer-icon" style={{maskImage: `url(${telegram})`, WebkitMaskImage: `url(${telegram})`}}/>
                    </div>
                </div>
            </div>
            <div className="footer-row">
                <img className="footer-logo" src={logo} alt=""/>
                <div className="footer-politics">
                    <div className="footer-text footer-link">Пользовательское соглашение</div>
                    <div className="footer-text footer-link">Политика Конфиденциальности</div>
                </div>
            </div>
        </div>
        {clicked && <Navigate to='/steam'/>}
    </div>
}