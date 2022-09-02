import React from 'react';
import style from './Project.module.css'

const Project = (props) => {
    return (
        <div className={style.projectBlock}>
            <div className={style.images}></div>
            <div className={style.text}>
                <span className={style.title}>Name project</span>
                <div className={style.description}>{props.description}</div>
            </div>
        </div>
    );
};

export default Project;