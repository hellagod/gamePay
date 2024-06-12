import React, {useEffect, useRef, useState} from 'react';
import './Dialog.css'
import dialogImg from '../../static/dialog_img.png'

export default function Dialog({modalIsOpen, setIsOpen}) {
    let modal = useRef()

    useEffect(() => {
        if (modalIsOpen) {
            document.getElementById("fullContent").style.opacity = "0.5";
            modal.current.showModal();
        }
        else {
            document.getElementById("fullContent").style.opacity = "1";
            modal.current.close()
        }
    }, [modalIsOpen])

    return <dialog className="dialog-login" ref={modal} style={{display: (modalIsOpen? 'flex': 'none')}}>
        <div className="dialog-title">Как узнать логин?</div>
        <img className="dialog-img" src={dialogImg} alt=""/>
        <div className="dialog-text">Обратите внимание! <br/> Логин это то, что вы указываете при входе в Steam. Если вы
            укажете <br/> неверный логин, то средства уйдут другому пользователю.
        </div>
        <svg onClick={()=>setIsOpen(false)} className="dialog-close" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29"
             fill="none">
            <path d="M7.30469 21.9824L21.4468 7.84023" stroke="#2A1774" strokeWidth="2" strokeLinecap="round"/>
            <path d="M7.1438 7.53412L21.2859 21.6763" stroke="#2A1774" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    </dialog>
}