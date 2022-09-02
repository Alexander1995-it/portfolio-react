import React from 'react';
import style from './MyContacts.module.css'

const MyContacts = () => {
    return (
        <div className={style.myContactsBlock}>
            <span>Instagram</span>
            <span>VK</span>
            <span>LinkedIn</span>
            <span>Facebook</span>
        </div>
    );
};

export default MyContacts;