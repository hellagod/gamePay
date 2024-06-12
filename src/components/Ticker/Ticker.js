import './Ticker.css'
import steam from '../../static/steam.svg'

export default function Ticker() {

    return <div className="section-ticker">
        <div className="scroll">
            <div className="scroll-item">
                {Array(30).fill(1).map((e, index) => <div key={index}>
                    <img className="scroll-item-icon" src={steam} alt="steam"/><span>ПОПОЛНИТЬ STEAM 2024</span>
                </div>)}
                <span></span>
            </div>
            <div className="scroll-item">
                {Array(30).fill(1).map((e, index) => <div key={index}>
                    <img className="scroll-item-icon" src={steam} alt="steam"/><span>ПОПОЛНИТЬ STEAM 2024</span>
                </div>)}
                <span></span>
            </div>
        </div>
    </div>
}