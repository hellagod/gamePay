import PaymentInput from "../PaymentInput/PaymentInput";
import './PaymentInputAmount.css'

export default function PaymentInputAmount({value, setValue, label, error}) {
    return <div className="payment-input-amount-container">
        <PaymentInput value={value} setValue={setValue} label={label} error={error} className='payment-input-amount-text' postfix=' ₽'/>
        <div className="payment-input-amount-choose">
            {['100', '500', '700', '1000'].map(p => <div className="payment-input-amount-item" onClick={e => setValue({...value, value: p})}>{p} ₽</div>)}
        </div>
    </div>
}