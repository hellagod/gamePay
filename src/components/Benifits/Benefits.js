import money from '../../static/money.svg'
import shield from '../../static/shield.svg'
import rocket from '../../static/rocket.svg'
import BenefitItem from "../BenefitItem/BenefitItem";
import back from "../../static/benefit_background.png";
import './Benefits.css'

let benefits = [{
    title: "Экономия",
    text: "Господа, убеждённость некоторых оппонентов обеспечивает широкому кругу (специалистов) участие в формировании системы массового участия.",
    number: "01",
    icon: money
}, {
    title: "Надежность",
    text: "Господа, убеждённость некоторых оппонентов обеспечивает широкому кругу (специалистов) участие в формировании системы массового участия.",
    number: "02",
    icon: shield
}, {
    title: "Скорость",
    text: "Господа, убеждённость некоторых оппонентов обеспечивает широкому кругу (специалистов) участие в формировании системы массового участия.",
    number: "03",
    icon: rocket
}]

export default function Benefits() {
    return <div className="benefits">
        <div className="second-background"/>
        <img className="benefits-background" src={back} alt=""/>
        <div className="bef-grad-1"/>
        <div className="bef-grad-2"/>
        <div className="bef-grad-3"/>
        <div className="benefits-content">
            <div className="benefits-title">
                Почему стоит выбрать нас?
            </div>
            <div className="benefits-items">
                {benefits.map((b, index) => <BenefitItem title={b.title} text={b.text} icon={b.icon} number={b.number} key={index}/>)}
            </div>
        </div>
    </div>
}