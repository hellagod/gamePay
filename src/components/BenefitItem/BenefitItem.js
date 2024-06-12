import './BenifitItem.css'

export default function BenefitItem({title, text, number, icon}) {
    return <div className="benefit-item-container">
        <div className="benefit-item-header">
            <img className="benefit-item-icon" src={icon} alt=""/>
            <div className="benefit-item-number">{number}</div>
        </div>
        <div className="benefit-item-content">
            <div className="benefit-item-title">{title}</div>
            <div className="benefit-item-text">
                {text}
            </div>
        </div>
    </div>
}