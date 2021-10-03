import React from "react";
import './work-exp.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {Typography} from "@mui/material";
import Zoom from "react-reveal";
import Fade from "react-reveal";
import Arrow from "../arrow/arrow";

const WorkExperience = () => {
    const windowWidth = window.innerWidth
    const experiences = [
        {
            enterprise: "PetaResearch",
            title: "Cloud Engineering Intern",
            duration: "Jul. 2021 – Aug. 2021, Tunisia",
            bullets: [
                "Implemented Infrastructure as Code - IaC to manage, track and maintain deployed AWS services.",
                "Wrote Python scripts for data connectivity to the deployed databases and data streaming services in AWS.",
                "Implemented multi-threading using Python for data connectivity to AWS Kinesis Streams.",
                "Implemented auto-scaling mechanism for AWS Kinesis Stream using AWS CloudWatch alarms.",
                "Designed and deployed a serverless ETL pipeline that consumes user input."
            ]
        },
        {
            enterprise: "iPrecision",
            title: "Software Engineering Intern",
            duration: "Jul. 2020 – Sept. 2020, Tunisia",
            bullets: [
                "Participated in the product development process of a system that monitors and controls electronic shelf labels for supermarkets.",
                "Put together RESTful APIs for the back-end that served data to the front-end.",
                "Conducted unit and integration testing on the back-end’s APIs with 60% code coverage.",
                "Set up a CI/CD pipeline and enabled e-mail notifications of build results and output logs.",
            ]
        },
    ]
    return(
        <Zoom>
            <div className="container pt-3" id="work-experience">
                <Fade bottom>
                    <div className="row mt-5">
                        <div className="col-sm-12 col-md-5 title">Work Experience</div>
                        <div className="col-sm-12 col-md-7 bar mt-auto mb-auto"/>
                    </div>
                </Fade>
                <div className="row">
                    { windowWidth > 768 ?<Fade bottom>
                        <Timeline position={'alternate'}>
                    {experiences.map(experience =>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="warning"/>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h5" component="span" style={{'color': "#45433E"}}>
                                    {experience.enterprise} | {experience.title}<br/> {experience.duration}
                                </Typography>
                                <Typography style={{'color': "#45433E"}}>
                                    <ul>
                                    {experience.bullets.map(bullet => <li>{bullet}</li>)}
                                    </ul>
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>)}
                        </Timeline>
                        </Fade>:
                        experiences.map(experience =>
                            <div className="container mt-2 mb-5 experience">
                                <Fade bottom>
                                    <div className="row">
                                        <div className="col-sm-12 experience-enterprise">{experience.enterprise}</div>
                                        <div className="col-sm-12 experience-title">{experience.title}</div>
                                        <div className="col-sm-12 experience-duration">{experience.duration}</div>
                                    </div>
                                    <div className="row">
                                        {experience.bullets.map(bullet => <li className="col-sm-12 mt-2 experience-bullet">{bullet}</li>)}
                                    </div>
                                </Fade>
                            </div>)}
                </div>
            </div>

        </Zoom>
    )
}

export default WorkExperience