import React from 'react';
import style from './Footer.module.css'
import styleContainer from './../common/styles/Container.module.css'
import MyContacts from "./myContacts/MyContacts";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h6 className={style.title}>Alezander Shylzhytskiy</h6>
                <MyContacts/>
            <span className={style.copyright}>2022 Все права защищены</span>
            </div>

        </div>
    );
};

export default Footer;