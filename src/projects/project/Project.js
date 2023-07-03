import React from 'react';
import style from './Project.module.css'
import WatchBtn from "../../common/component/WatchBtn/WatchBtn";


const Project = (props) => {
    return (
        <div  className={style.projectBlock}>
            <div style={props.style} className={style.images}>
                <div className={style.btnProject}>
                    <WatchBtn onClick={() => console.log ('1')}>Смотреть</WatchBtn>
                </div>
            </div>
            <div className={style.text}>
                <span className={style.title}>Name project</span>
                <div className={style.description}>{props.description}</div>
            </div>
        </div>
    );
};

export default Project;