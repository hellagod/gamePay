import './GamePayment.css'
import Header from "../Header/Header";
import gradBack2 from "../../static/gradient-background-2.png";
import Footer from "../Footer/Footer";
import PaymentBlock from "../PaymentBlock/PaymentBlock";
import gradBack1 from "../../static/gradient-background-1.png";
import PaymentInput from "../PaymentInput/PaymentInput";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import PaymentInputSelector from "../PaymentInputSelector/PaymentInputSelector";
import QuestionsBlock from "../QuestionsBlock/QuestionsBlock";
import gamesData from "../../utils/games";

export default function SteamPayment() {
    const {gameId} = useParams();
    const [game, setGame] = useState(gamesData[0])
    const [isQuite, setIsQuite] = useState(true)

    console.log(gameId)
    const [state, setState] = useState({
        login: {value: "", isError: false, validate: v => v.length !== 0}, product: {value: "", isError: false},
        email: {value: "", isError: false, validate: v => v.length !== 0}, promoCode: {value: "", isError: false}
    })

    useEffect(() => {
        window.scroll(0, 0)
    }, []);

    useEffect(() => {
        if (!isQuite) {
            console.log(state)
            let validate = v => v.validate(v.value)
            let prove = v => !validate(v) !== v.isError

            if (prove(state.login) || prove(state.email))
                setState(s => ({
                    ...s,
                    login: {...s.login, isError: !validate(s.login)},
                    email: {...s.email, isError: !validate(s.email)}
                }))
        }
    }, [isQuite, state]);

    return <div style={{position: "relative", height: "fit-content"}}>
        <Header/>
        <div style={{overflow: "hidden", maxWidth: "100vw", position: "relative"}}>
            <img src={gradBack1} className="payment-gradient" alt=""/>
            <img src={gradBack2} className="payment-questions-gradient" alt=""/>
            <PaymentBlock name={game.title} title={game.title} icon={game.icon} onPay={()=> setIsQuite(false)}>
                <>
                    <PaymentInput isInfo={true} label="Player Tag" error="Необходимо заполнить"
                                  value={state.login}
                                  setValue={v => setState(state => ({...state, login: v}))}/>
                    <PaymentInputSelector label="Сумма" value={state.product}
                                          setValue={v => setState(state => ({...state, product: v}))}/>
                    <PaymentInput label="Email" error="Необходимо заполнить" validate={v => v.length !== 0}
                                  value={state.email}
                                  setValue={v => setState(state => ({...state, email: v}))}/>
                </>
                <>
                    <div className="payment-right-text">Player Tag: <span>{state.login.value}</span></div>
                    <div className="payment-right-text">Товар: <span>{state.product.value}</span></div>
                    <div className="payment-right-text">Почта: <span>{state.email.value}</span></div>
                    <div className="payment-right-promo-code">
                        <PaymentInput label="Промокод" value={state.promoCode}
                                      setValue={v => setState(state => ({...state, promoCode: v}))}/>
                    </div>
                </>
            </PaymentBlock>
            <Footer/>
        </div>
    </div>
}



