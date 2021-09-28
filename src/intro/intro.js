import React from "react";
import './intro.css';
import Zoom from "react-reveal";

const Intro = () => {
    return(
        <Zoom>
            <div className="container mt-5 pt-5">
                <div className="row greetings mt-1 pt-5">Hello, I'm</div>
                <div className="row name pt-2">Sinda Jeddey</div>
                <div className="row intro-description pt-1 mb-5">I’m a last year software engineering student specialized in DevOps and Cloud Computing and an AWS Certified Developer Associate.</div>
            </div>
        </Zoom>
    )
}

export default Intro