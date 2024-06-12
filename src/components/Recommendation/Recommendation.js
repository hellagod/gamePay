import RecommendationTicker from "../RecommendationTicker/RecommendationTicker";
import './Recommendation.css'

export default function Recommendation() {
    return <div className="rec-block">
        <div className="rec-block-text">
            <div className="rec-block-title">Нас рекомендуют</div>
        </div>
        <RecommendationTicker/>
    </div>
}