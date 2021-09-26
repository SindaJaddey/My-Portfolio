import React from "react";
import './contact-me.css';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {Button} from "@material-ui/core";

const ContactMe = () => {

    const linkedinClick = () => {
        window.open("https://www.linkedin.com/in/sinda-jeddey/","_blank")
    }

    const githubClick = () => {
        window.open("https://github.com/SindaJeddey","_blank")
    }

    return(
        <div className="container" id="contact-me">
            <div className="row mt-5">
                <div className="col-4 bar mt-5 mb-auto"/>
                <div className="col-4 contact-me">Contact Me</div>
                <div className="col-4 bar mt-5 mb-auto"/>
            </div>
            <div className="row mt-4">
                <div className="col-4 icon">
                    <Button size="large" href="mailto:sindajeddey@gmail.com" color="primary" style={{ color: '#E5E5E5' }} startIcon={<EmailIcon/>}>sindajeddey@gmail.com</Button>
                </div>
                <div className="col-4 icon">
                    <Button size="large" startIcon={<LinkedInIcon/>} onClick={linkedinClick}>Sinda Jeddey</Button>
                </div>
                <div className="col-4 icon">
                    <Button size="large" startIcon={<GitHubIcon/>} onClick={githubClick}>SindaJeddey</Button>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;