import React from "react";
import './about-me.css';
import image from '../assets/images/sinda2.jpg';
import aws from '../assets/images/aws-developer-associate.png';
import tf from '../assets/images/terraform-associate.png';
import Badge from "./badges/badge";
import Zoom from "react-reveal";
import Fade from "react-reveal";


const AboutMe = () => {
    const languages = ['Python','Java','Javascript'];
    const iac = ['Terraform', 'AWS Cloudformation', 'AWS SAM'];
    const others = ['Docker', 'Kubernetes', '& other AWS services'];

    return (
        <Zoom>
            <div className="container pt-3" id="about-me">
                <Fade bottom>
                    <div className="row mt-5">
                        <div className="col-sm col-md-3 title">About Me</div>
                        <div className="col-sm col-md-9 bar mt-auto mb-auto"/>
                    </div>
                </Fade>
                <div className="row">
                    <Fade bottom>
                        <div className="col-sm-12 col-md-12 col-lg-7 pt-2 about-description">
                            Hi, my name is Sinda Jeddey and I’m a last year software engineering student specialized in <strong>DevOps</strong> and <strong>Cloud Computing</strong>.
                            These fields sparked interest and curiosity in me in the early start of 2019 and from then started my journey.
                            <br/>In May 2021, I got certified as an <strong>AWS Certified Developer Associate</strong>.
                            <br/>
                            <br/>Fast forward to today, I've taken part of multiple projects in which I've held
                            different roles from <strong>fullstack developer</strong> to provisioning and maintaining <strong>cloud infrastructure</strong>.
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="col-sm-12 col-md-12 col-lg-5 img-fluid">
                            <img src={image} height={350} className="image " id="sinda-img"/>
                        </div>
                    </Fade>
                </div>
                <br/>
                <div className="row">
                    <Fade bottom>
                        <div className="row sub-title">Technical Skills:</div>
                    </Fade>
                    <Fade bottom>
                        <div className="col-sm col-md-4">
                            <ul>{languages.map(language => <li className="tech-skills">{language}</li>)}</ul>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="col-sm col-md-4">
                            <ul>{iac.map(el => <li className="tech-skills">{el}</li>)}</ul>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="col-sm col-md-4">
                            <ul>{others.map(el => <li className="tech-skills">{el}</li>)}</ul>
                        </div>
                    </Fade>
                </div>
                <div className="row">
                    <Fade bottom>
                        <div className="row sub-title">Certifications:</div>
                        <Badge title={"AWS Certified Developer – Associate"}
                               issuedBy={"Amazon Web Services Training and Certification"}
                               img={aws} verificationLink={"https://www.credly.com/badges/10d8b0c1-a84a-4942-ae12-c59cb9791dad/public_url "}/>
                        <Badge title={"HashiCorp Certified: Terraform Associate"}
                               issuedBy={"HashiCorp"}
                               img={tf} verificationLink={"https://www.credly.com/badges/051ef02e-b4e3-47b6-b95a-618c9b19d609/public_url "}/>
                    </Fade>
                </div>
            </div>
        </Zoom>
    )
}

export default AboutMe;