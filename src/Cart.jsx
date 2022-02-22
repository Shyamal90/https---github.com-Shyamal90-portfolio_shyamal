import React from 'react';
import './Cart.css';

function Cart({techStack,descrip,src,deploy,github}) {
    return (
            <div className="card card_container">
                <img src={src} className="card-img-top card_img" alt="project image"/>
                    <div className="card-body card_body_container">
                        <p className="card-text card_text_container" >{descrip}</p>
                        {/* <p className='techStack'>{techStack}</p> */}
                        <div className="techStack_logo">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="" className='teckStack_icon'/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="" className='teckStack_icon'/>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="" className='teckStack_icon'/>
                            {/* <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="" className='teckStack_icon'/> */}

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
