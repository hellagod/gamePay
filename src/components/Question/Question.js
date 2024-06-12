import './Question.css'
import {useEffect, useRef, useState} from "react";
import AnimateHeight from 'react-animate-height';

export default function Question({question, children, current: {currentOpened, setCurrentOpened, index}}) {
    const [isClosed, setIsClosed] = useState(true);
    const [height, setHeight] = useState(0)
    const ref = useRef(null)

    useEffect(()=>{
        if (currentOpened !== index){
            setIsClosed(true)
        }
    }, [currentOpened, index])
    
    useEffect(() => {
        setHeight(!isClosed ? 'auto' : 0)
        if (!isClosed){
            setTimeout(()=>setCurrentOpened(index), 10)
        }
    }, [index, isClosed, setCurrentOpened])


    return <div className="question-container" style={{}}>
        <div className="question-title" onClick={e => setIsClosed(!isClosed)}>
            <div className="question-title-text">{question}</div>
            <div className={`circle ${(isClosed ? 'closed' : 'opened')}`}
                 onClick={e => setIsClosed(!isClosed)}>
                <div className="horizontal"></div>
                <div className="vertical"></div>
            </div>
        </div>
        <AnimateHeight
            id="example-panel"
            duration={200}
            height={height}
        >
            <div className="question-answer" ref={ref}>
                {children}
            </div>
        </AnimateHeight>
    </div>
}