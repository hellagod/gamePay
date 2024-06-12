import './SteamPayment.css'
import Header from "../Header/Header";
import gradBack2 from "../../static/gradient-background-2.svg";
import Footer from "../Footer/Footer";
import PaymentBlock from "../PaymentBlock/PaymentBlock";
import gradBack1 from "../../static/gradient-background-1.svg";
import Instruction from "../Instruction/Instruction";
import PaymentInput from "../PaymentInput/PaymentInput";
import PaymentInputAmount from "../PaymentInputAmount/PaymentInputAmount";
import {useEffect, useState} from "react";
import pay_steam from '../../static/pay_steam.svg'

export default function SteamPayment() {
    const [state, setState] = useState({
        login: {value: "", isError: ""}, amount: {value: "", isError: ""},
        email: {value: "", isError: ""}, promoCode: {value: "", isError: ""}
    })

    useEffect(() => {
        window.scroll(0,0)
    }, []);

    return <div style={{position: "relative", height: "fit-content"}}>
        <Header/>
        <div style={{overflow: "hidden", maxWidth: "100vw", position: "relative"}}>
            <img src={gradBack1} className="payment-gradient" alt=""/>
            <img src={gradBack2} className="instruction-gradient" alt=""/>
            <PaymentBlock name='Steam' title='Пополнить баланc Steam' icon={pay_steam}>
                <>
                    <PaymentInput isInfo={true} label="Логин Steam" error="Необходимо заполнить"
                                  validate={v => v.length !== 0} value={state.login}
                                  setValue={v => setState(state => ({...state, login: v}))}/>
                    <PaymentInputAmount label="Сумма" error="Необходимо заполнить" value={state.amount}
                                        validate={v => v.length !== 0}
                                        setValue={v => setState(state => ({...state, amount: v}))}/>
                    <PaymentInput label="Email" error="Необходимо заполнить" validate={v => v.length !== 0}
                                  value={state.email}
                                  setValue={v => setState(state => ({...state, email: v}))}/>
                </>
                <>
                    <div className="payment-right-text">Логин Steam: <span>{state.login.value}</span></div>
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



