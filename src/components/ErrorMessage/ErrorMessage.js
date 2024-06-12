import './ErrorMessage.css'

export default function ErrorMessage({hidden, setShowError}) {
    return <div className="error-message-container" hidden={hidden}
                onMouseEnter={() => setShowError(true)}
                onMouseLeave={() => setShowError(false)}
    >
        <svg className="error-message-vector" width="8" height="7" viewBox="0 0 8 7" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 6.5L8 0H0L4.5 6.5Z" fill="#E9E9EB"/>
        </svg>
        <div className="error-message">
            <div className="error-message-text"> Необходимо заполнить поле</div>
        </div>
    </div>
}