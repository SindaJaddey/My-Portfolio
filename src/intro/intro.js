import React from "react";
import './intro.css';
import Zoom from "react-reveal";
import Fade from "react-reveal";
import Arrow from "../arrow/arrow";

const Intro = () => {
    console.log(window.innerWidth)
    return(
        <Zoom>
            <div className="container-fluid intro-container" id="home">
                <div className="container intro">
                    <div className="row align-content-center h-100">
                        <div className="col-md-12 col-sm-12 col-xl-12 col-xxl-6">
                            <h1 className="name"><Fade bottom>Hello! I'm Sinda Jeddey</Fade></h1>
                            <p className="intro-description"><Fade bottom><p>and I'm a <span className="keyword">DevOps</span> and <span className="keyword">Cloud Computing</span> enthusiast!</p> </Fade></p>
                            <Arrow direction={"down"}/>
                        </div>
                    </div>
                </div>
            </div>
        </Zoom>
    )
}

export default Intro