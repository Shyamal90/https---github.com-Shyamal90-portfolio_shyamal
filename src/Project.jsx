import React from 'react';
import Cart from './Cart';
import './style/Project.css'

function Project() {
    return (
        <div className='project_main-container' id="projects">
            <h1>Projects</h1>
            <hr className='' />
            <div className='project_container'>
                <Cart src={'image/swiggy-bg.png'} projectName={'Swiggy Clone'} techStack={[
                    {
                        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                    },
                    {
                        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                    },
                    {
                        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                    }
                ]} descrip={`Swiggy is Indian online food ordering and delivery platform.`} deploy={`https://masaiswiggyclone.herokuapp.com/`} github={`https://github.com/swaraj54/swiggy-clone`} />


                <Cart src={'image/homeDepot_bg.png'} projectName={'Home Depot Clone'} techStack={[
                        {
                            src :"https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                        },
                        {
                            src :"https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                        },
                        {
                            src :"https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                        }
                    ]} descrip={`.The Home Depot, Inc., commonly known as Home Depot, is the largest home improvement retailer in the United States. `} deploy={`https://shyamal90.github.io/homeDepot_clone/`} github={`https://github.com/Shyamal90/homeDepot_clone`} />


                    <Cart src={'image/pulsePlus_bg.png'} projectName={'Pulse Plus Clone'} techStack={[
                        {
                            src :"https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                        },
                        {
                            src :"https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                        },
                        {
                            src :"https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                        }
                    ]} descrip={`Pulse plus is a pharmacuitical e-commerce website where customers can easily get the medicine .`} deploy={`https://61ff9721624257b707b4e751--pulsepluspharmacy.netlify.app/`} github={`https://github.com/Rohanverma4/UNIT_2_PROJECT_TESTING`} />
            </div>
        </div>

    )
}

export default Project
