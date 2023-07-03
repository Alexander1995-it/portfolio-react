import React from 'react';
import style from './WatchBtn.module.css'

const WatchBtn = ({children, onClick}) => {
    return (
        <div className={style.WatchBtn} onClick={() => onClick()}>
            <span>{children}</span>
        </div>
    );
};

export default WatchBtn;