import React from 'react';
import style from './FormContacts.module.css'

const FormContacts = () => {
    return (
        <div className={style.formContacts}>
            <input type="text"/>
            <input type="text"/>
            <textarea/>
        </div>
    );
};

export default FormContacts;