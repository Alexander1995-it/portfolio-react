import React from 'react';
import style from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";

const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h4 className={style.title}>My works</h4>
                <div className={style.projects}>
                    <Project
                        description={'Here you can find activities to practise your reading skills. Reading will help you to improve your understanding of the language and build your vocabulary.'}/>
                    <Project
                        description={'The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). There are different types of texts and interactive exercises that practise the reading'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;