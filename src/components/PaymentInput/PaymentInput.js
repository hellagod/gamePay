import './PaymentInput.css'
import info from '../../static/info.svg'
import error_icon from '../../static/error.svg'
import {useEffect, useState} from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Dialog from "../Dialog/Dialog";

export default function PaymentInput({
                                         isInfo = false,
                                         value,
                                         setValue,
                                         className = '',
                                         label,
                                         error,
                                         postfix = ''
                                     }) {
    const [icon, setIcon] = useState(error_icon)
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const [showErrorMessageCont, setShowErrorMessageCont] = useState(false)
    const [modalIsOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isInfo)
            setIcon(info)
    }, [isInfo])

    const handleSelection = (e) => {
        const start = e.target.selectionStart;
        const end = e.target.selectionEnd;
        e.target.setSelectionRange(Math.min(start, value.value.length), Math.min(end, value.value.length))

    }

    return <div className={`payment-input ${className} ${value.isError ? 'payment-error' : ''}`}>
        <input type="text" className="payment-input-text" autoComplete="off" required value={value.value + postfix}
               onChange={e => setValue({
                   ...value,
                   value: (postfix.length ? e.target.value.slice(0, -postfix.length) : e.target.value)
               })}
               onKeyDown={handleSelection}/>
        <label className="payment-input-label">{label}</label>
        <label className="payment-input-error" hidden={!value.isError}>{error}</label>
        {(isInfo || value.isError) && (isInfo ?
                <div className={`payment-input-info-icon ${value.isError ? 'payment-error' : ''}`}
                     style={{maskImage: `url(${icon})`, WebkitMaskImage: `url(${icon})`, cursor: "pointer"}}
                     onClick={
                         () => setIsOpen(true)
                     }
                /> :
                <div className={`payment-input-info-icon ${value.isError ? 'payment-error' : ''}`}
                     style={{maskImage: `url(${icon})`, WebkitMaskImage: `url(${icon})`}}
                     onMouseEnter={() => setShowErrorMessage(true)}
                     onMouseLeave={() => setShowErrorMessage(showErrorMessageCont)}
                />
        )}
        {value.isError &&
            <ErrorMessage hidden={!(showErrorMessage || showErrorMessageCont)} setShowError={setShowErrorMessageCont}/>}
        <Dialog modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </div>
}