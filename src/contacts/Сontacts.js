import React from 'react';
import FormContacts from "./FormContacts/FormContacts";
import style from './Contacts.module.css'
import styleContainer from './../common/styles/Container.module.css'

const Сontacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h5>Contacts</h5>
                <FormContacts/>
                <button>Отправить</button>
            </div>
        </div>
    );
};

export default Сontacts;