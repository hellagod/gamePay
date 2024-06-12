import './PaymentBlock.css'
import Instruction from "../Instruction/Instruction";

export default function PaymentBlock({children, icon, title}) {

    return <div className="payment-block-container">
        <div className="payment-block">
            <div className="payment-title">
                <img className="payment-title-icon" alt="" src={icon}/>
                <div className="payment-title-text">{title}</div>
            </div>
            <div className="payment">
                <div className="payment-left">
                    <div className="payment-left-title">Пополнение Steam</div>
                    {children[0]}
                </div>
                <div className="payment-right">
                    <div className="payment-right-title">Проверьте данные</div>
                    {children[1]}
                    <div className="payment-right-amount">
                        <div className="payment-right-amount-title">Сумма</div>
                        <div className="payment-right-amount-value">120.00 ₽</div>
                    </div>
                    <div className="payment-right-discount">
                        <del className="payment-right-discount-text">125.00 ₽</del>
                        <div className="payment-right-discount-title">-5%</div>
                    </div>
                    <div className="payment-right-button-container">
                        <div className="payment-right-button">Оплатить 120.0 ₽</div>
                    </div>
                    <div className="payment-right-dog">Нажимая кнопку пополнить, я принимаю <a
                        className="payment-right-dog-link" href='#'> условия <br/>
                        Пользовательского Соглашения</a></div>
                </div>
            </div>
        </div>
        <Instruction/>
    </div>
}