import React from 'react';
import './Skill.css';

function Skills() {
    return (

        <section className='skill-section' id="skills">
            <div className="text-center">
                <h4 className="display-5">Profession Skillset.</h4>
                <hr className='w-75 mx-auto' />
            </div>

            <div className="container skill-container w-75 mx-auto">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="skills" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="skills" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="skills" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="skills" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="skills" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="skills" />
              <img src="./image/redux.svg" alt="skills"/>
              <img src="./image/heroku.png" alt="skills"/>
              <img src="./image/github--v3.png" alt="skills"/>
              <img src="./image/material-ui.png" alt="skills"/>
              <img src="./image/postman-modified.png" alt="skills"/>
              <img src="./image/bootstrap.svg" alt="skills"/>
              <img src="./image/express-modified.png" alt="skills"/>
            </div>
        </section>
    )
}

export default Skills
