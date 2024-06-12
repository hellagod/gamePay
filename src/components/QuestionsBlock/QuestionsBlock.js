import Question from "../Question/Question";
import './QuestionsBlock.css'
import {useState} from "react";

let questions = [
    {
        question: "Какие страны можно пополнить?",
        answer: "Пополнение возможно для аккаунтов России, Казахстана, Беларуси. На KZ аккаунт деньги будут зачислены в Тенге - курс плавающий."
    },
    {
        question: "Лимиты и ограничения",
        answer: "Пополнение возможно для аккаунтов России, Казахстана, Беларуси. На KZ аккаунт деньги будут зачислены в Тенге - курс плавающий."
    },
    {
        question: "У меня новый или ранее НЕ пополнявшийся аккаунт",
        answer: "Пополнение возможно для аккаунтов России, Казахстана, Беларуси. На KZ аккаунт деньги будут зачислены в Тенге - курс плавающий."
    },
    {
        question: "Пришла сумма меньше",
        answer: "Пополнение возможно для аккаунтов России, Казахстана, Беларуси. На KZ аккаунт деньги будут зачислены в Тенге - курс плавающий."
    },
    {
        question: "Не пришли деньги на кошелёк Steam",
        answer: "Пополнение возможно для аккаунтов России, Казахстана, Беларуси. На KZ аккаунт деньги будут зачислены в Тенге - курс плавающий."
    },
    {
        question: "Возврат средств",
        answer: "Пополнение возможно для аккаунтов России, Казахстана, Беларуси. На KZ аккаунт деньги будут зачислены в Тенге - курс плавающий."
    }
]
let Line = () => <div className="line"></div>
export default function QuestionsBlock() {
    const [currentOpened, setCurrentOpened] = useState(0)
    return <div className="questions-container">
        <div className="question-block">
            <div className="question-block-title">
                Вопросы и ответы
            </div>
            {questions.map(({question, answer}, index) => <div key={index} style={{
                gap: "20px",
                display: "flex",
                flexDirection: "column"
            }}>
                <Question question={question} current={{currentOpened, setCurrentOpened, index}} >{answer}</Question>
                {index + 1 !== questions.length && <Line/>}
            </div>)}
        </div>
    </div>
}