import React from 'react';
import style from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h3 className={style.title}>Skills</h3>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'текущий в currentTarget относится к настоящему. Это самая последняя цель, которая поймала событие, которое пузырилось из других источников.'}/>
                    <Skill title={'CSS'} description={'текущий в currentTarget относится к настоящему. Это самая последн'}/>
                    <Skill title={'React'} description={'Это самая последняя цель'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;