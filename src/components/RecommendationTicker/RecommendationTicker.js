import RecommendationTickerItem from "../RecommendationTickerItem/RecommendationTickerItem";
import './RecommendationTicker.css'
import steam from "../../static/steam.svg";


export default function RecommendationTicker() {
    return <div className="section-rec-ticker">
        <div className="scroll">
            <div className="group-tick-items">
                {Array(30).fill(1).map((e, index) => <RecommendationTickerItem key={index}/>)}
                <div/>
            </div>
            <div className="group-tick-items">
                {Array(30).fill(1).map((e, index) => <RecommendationTickerItem key={index}/>)}
                <div/>
            </div>
        </div>
    </div>
}