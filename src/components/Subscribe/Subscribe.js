import './Subscribe.css'
import mega from '../../static/megaphone.png'

export default function Subscribe() {
    return <div className="subscribe-container">
        <div className="subscribe-block">
            <div className="subscribe">
                <div className="subscribe-title">Подпишись на нашего</div>
                <div className="subscribe-subtitle">телграм-бота</div>
                <div className="subscribe-button">Подписаться</div>
            </div>
            <img src={mega} className="mega" alt=""/>
        </div>
    </div>
}