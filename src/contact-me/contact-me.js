import React from "react";
import './contact-me.css';
import Zoom from "react-reveal";
import Fade from "react-reveal";
import {SocialIcon} from "react-social-icons";

const ContactMe = () => {

    const linkedinClick = () => {
        window.open("https://www.linkedin.com/in/sinda-jeddey/","_blank")
    }

    const githubClick = () => {
        window.open("https://github.com/SindaJeddey","_blank")
    }

    return(
        <Zoom>
            <div className="container py-5 my-5 " id="contact-me">
                <Fade>
                    <div className="row mt-5 pt-5">
                        <div className="col-sm col-md-4 contact-me">Contact Me</div>
                        <div className="col-sm col-md-8 bar mt-auto mb-auto"/>
                    </div>
                </Fade>
                <div className="row mt-4 pb-5 mb-5">
                    <div className="col-md-4 icon">
                        <Fade bottom>
                            <SocialIcon title={"sindajeddey@gmail.com"}
                                        url={"mailto:sindajeddey@gmail.com"}
                                        style={{ height: 75, width: 75 }}
                                        bgColor="#eeb900"/>
                        </Fade>
                        <Fade bottom>
                            <div className="col-12 mt-3">sindajeddey@gmail.com</div>
                        </Fade>
                    </div>
                    <div className="col-md-4 icon">
                        <Fade bottom>

                            <SocialIcon title={"Sinda Jeddey"}
                                        onClick={linkedinClick}
                                        network={'linkedin'}
                                        style={{ height: 75, width: 75 }}/>
                        </Fade>
                        <Fade bottom>
                            <div className="col-12 mt-3">Sinda Jeddey</div>
                        </Fade>
                    </div>
                    <div className="col-md-4 icon">
                        <Fade bottom>
                            <SocialIcon title={"SindaJeddey"}
                                        network={'github'}
                                        onClick={githubClick}
                                        style={{ height: 75, width: 75 }}
                                        bgColor="#45433E"/>
                        </Fade>
                        <Fade bottom>
                            <div className="col-12 mt-3">SindaJeddey</div>
                        </Fade>
                    </div>
                </div>
            </div>
        </Zoom>
    )
}

export default ContactMe;