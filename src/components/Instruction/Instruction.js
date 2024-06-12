import './Instruction.css'
import Dialog from "../Dialog/Dialog";
import {useState} from "react";

export default function Instruction() {
    const [modalIsOpen, setIsOpen] = useState(false);
    return <div className="instruction">
        <div className="instruction-title">Инструкция</div>
        <ol className="instruction-text">
            <li>Введите свой логин аккаунта. <span onClick={
                () => setIsOpen(true)
            }>(как узнать логин?)</span></li>
            <li>Введите сумму, на которую хотите пополнить баланс Steam.</li>
            <li>Проверьте, что указали именно логин, а не никнейм.</li>
            <li>Нажмите кнопку «Пополнить».</li>
            <li>Вы перейдете на страницу, где необходимо выбрать метод оплаты.</li>
            <li>После успешной оплаты деньги поступят на баланс аккаунтов течение 2-15 минут. <br/><span>При возникновении
                    вопросов свяжитесь с поддержкой.</span>
            </li>
        </ol>
        <Dialog modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </div>
}