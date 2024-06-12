import './PaymentInputSelector.css'
import {useEffect, useState} from "react";

export default function PaymentInputSelector({value, setValue, label}) {
    const [data, setData] = useState([
        {id: "0", value: "1400 + 1400 (INT)"},
        {id: "1", value: "1400 + 1400 (INT)"},
        {id: "2", value: "1400 + 1400 (INT)"},
        {id: "3", value: "1400 + 1400 (INT)"},
        {id: "4", value: "1400 + 1400 (INT)"},
        {id: "5", value: "1400 + 1400 (INT)"},
    ])
    const [active, setActive] = useState(false)

    return <div className={`custom-select ${active ? 'active' : ''}`}>
        <button className="select-button" onClick={() => setActive(!active)}>
            {(!value.value ?
                    <span className="selected-value">{label}</span> :
                    <span className="selected-value active">{value.value}</span>
            )}
            <svg className={(active ? 'active' : '')} width="22" height="10" viewBox="0 0 22 10" fill="none">
                <path d="M1 1L11.5423 9L21 1" stroke="#9EA3C1" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>
        </button>
        <ul className="select-dropdown" role="listbox" id="select-dropdown">
            {data.map(e => <li key={e.id}>
                <input type="radio" id={e.id}/>
                <label className={`${value.id === e.id ? 'active' : ''}`} htmlFor={e.id} onClick={() => {
                    setValue((value.id === e.id ? {} : e))
                    setActive(false)
                }}>{e.value}</label>
            </li>)}

        </ul>
    </div>
}