import React from 'react';
import './Cart.css';

function Cart({projectName,techStack,descrip,src,deploy,github}) {
    console.log("techStack  ",techStack)
    // let iconData = [
    //     {
    //         src :"https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
    //     },
    //     {
    //         src :"https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
    //     },
    //     {
    //         src :"https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
    //     },
    //     {
    //         src :"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
    //     },
    //     {
    //         src :"./image/express-modified.png"
    //     },
    //     {
    //         src :"https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
    //     },
    //     {
    //         src :"https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
    //     }
    // ]
    return (
            <div className="card card_container">
                <img src={src} className="card-img-top card_img" alt="project image"/>
                    <div className="card-body card_body_container">
                        <h3 className='project__name'>{projectName}</h3>
                        <p className="card-text card_text_container projectDesc" >{descrip}</p>
                        {/* <p className='techStack'>{techStack}</p> */}
                        <div className="techStack_logo">
                            <img src={techStack[0].src} alt="" className='teckStack_icon'/>
                            <img src={techStack[1].src} alt="" className='teckStack_icon'/>
                            <img src={techStack[2].src} alt="" className='teckStack_icon'/>
                            {/* <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="" className='teckStack_icon'/> */}
                            {/* <p className='teckStack__logo'>{techStack}</p> */}
                        </div>
                    </div>
                    <div className='btn_container'>
                        <button className='btn btn-outline-warning '><a href={deploy} className="href" target="_blank">Demo</a></button>
                        <button className='btn btn-outline-warning'><a href={github} className="href" target="_blank">Github</a></button>
                        {/* <button className='btn btn-outline-warning'>Link</button> */}
                    </div>
            </div>
    )
}

export default Cart
