import React from "react";
import './intro.css';
import Zoom from "react-reveal";
import Fade from "react-reveal";

const Intro = () => {
    return(
        <Zoom>
            <div className="container-fluid intro" id="intro">
                <div className="row align-content-center h-100 justify-content-center">
                    <div className="col-md-8 col-sm-12 name"><Fade bottom>Hello! I'm Sinda Jeddey</Fade></div>
                    <div className="col-md-8 col-sm-12 mt-5 intro-description"><Fade bottom><p>and I'm a <span className="keyword">DevOps</span> and <span className="keyword">Cloud Computing</span> enthusiast!</p> </Fade></div>
                </div>
            </div>
        </Zoom>
    )
}

export default Intro