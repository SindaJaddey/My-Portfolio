import React from "react";
import './about-me.css';
import image from '../assets/images/sinda.png';
import certif from '../assets/images/aws-developer-associate.png';
import Badge from "./badges/badge";
import Zoom from "react-reveal";


const AboutMe = () => {
    const languages = ['Python','Java','Javascript'];
    const iac = ['Terraform', 'AWS Cloudformation', 'AWS SAM'];
    const others = ['Docker', 'Kubernetes', '& other AWS services'];

    return (
        <Zoom>
            <div className="container pt-1" id="about-me">
                <div className="row mt-5">
                    <div className="col-sm col-md-3 title">About Me</div>
                    <div className="col-sm col-md-9 bar mt-auto mb-auto"/>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-7 pt-2 about-description">
                        Hi, my name is Sinda Jeddey and I’m a last year software engineering student specialized in DevOps and Cloud Computing.
                        These fields sparked interest and curiosity in me in the early start of 2019 and from then started my journey.
                        <br/>I also got certified as an AWS Certified Developer Associate.
                        <br/>I also got the chance to work on multiple web applications in both front-end and back-end development.
                    </div>
                    <div className="col-sm-12 col-md-5">
                        <img src={image} height={300} className="image"/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="row sub-title">Technical Skills:</div>
                    <div className="col-sm col-md-4">
                        <ul>{languages.map(language => <li>{language}</li>)}</ul>
                    </div>
                    <div className="col-sm col-md-4">
                        <ul>{iac.map(el => <li>{el}</li>)}</ul>
                    </div>
                    <div className="col-sm col-md-4">
                        <ul>{others.map(el => <li>{el}</li>)}</ul>
                    </div>
                </div>
                <div className="row">
                    <div className="row sub-title">Certifications:</div>
                    <Badge img={certif} verificationLink={"https://www.credly.com/badges/10d8b0c1-a84a-4942-ae12-c59cb9791dad "}/>
                </div>
            </div>
        </Zoom>
    )
}

export default AboutMe;