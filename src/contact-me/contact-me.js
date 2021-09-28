import React from "react";
import './contact-me.css';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {Button} from "@material-ui/core";
import {Zoom} from "react-reveal";
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
            <div className="container pt-1" id="contact-me">
                <div className="row mt-5">
                    <div className="col-4 bar mt-5 mb-auto"/>
                    <div className="col-4 contact-me">Contact Me</div>
                    <div className="col-4 bar mt-5 mb-auto"/>
                </div>
                <div className="row mt-4">
                    <div className="col-4 icon">
                        <SocialIcon title={"sindajeddey@gmail.com"}
                                    url={"mailto:sindajeddey@gmail.com"}
                                    style={{ height: 75, width: 75 }}
                                    bgColor="#eeb900"/>
                        <div className="col-12 mt-3">sindajeddey@gmail.com</div>

                    </div>
                    <div className="col-4 icon">
                        <SocialIcon title={"Sinda Jeddey"}
                                    onClick={linkedinClick}
                                    network={'linkedin'}
                                    style={{ height: 75, width: 75 }}/>
                        <div className="col-12 mt-3">Sinda Jeddey</div>
                    </div>
                    <div className="col-4 icon">
                        <SocialIcon title={"SindaJeddey"}
                                    network={'github'}
                                    onClick={githubClick}
                                    style={{ height: 75, width: 75 }}
                                    bgColor="#45433E"/>
                        <div className="col-12 mt-3">SindaJeddey</div>
                    </div>
                </div>
            </div>
        </Zoom>
    )
}

export default ContactMe;