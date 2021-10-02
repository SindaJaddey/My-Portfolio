import React from "react";
import './intro.css';
import Zoom from "react-reveal";
import Fade from "react-reveal";

const Intro = () => {
    return(
        <Zoom>
            <div className="container-fluid intro-container" id="intro">
                <div className="container intro">
                    <div className="row align-content-center h-100">
                        <div className="col-md-6 col-sm-12">
                            <h1 className="name"><Fade bottom>Hello! I'm Sinda Jeddey</Fade></h1>
                            <p className="intro-description"><Fade bottom><p>and I'm a <span className="keyword">DevOps</span> and <span className="keyword">Cloud Computing</span> enthusiast!</p> </Fade></p>
                        </div>
                    </div>
                </div>
            </div>
        </Zoom>
    )
}

export default Intro