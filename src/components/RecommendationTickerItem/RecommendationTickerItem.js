import './RecommendationTickerItem.css'
import streemer from '../../static/streemer.png'

export default function RecommendationTickerItem() {
    return <div className="rec-tick-item-container">
        <img className="rec-tick-item-icon" src={streemer} alt=""/>
        <div className="rec-tick-item-text-container">
            <div className="rec-tick-item-title">Парадеевич</div>
            <div className="rec-tick-item-text">стример</div>
        </div>
    </div>

}