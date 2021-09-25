import React from "react";
import './work-exp.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {Typography} from "@mui/material";

const WorkExperience = () => {
    return(
        <div className="container" id="#work-experience">
            <div className="row mt-5">
                <div className="col-6 px-5 title">Work Experience</div>
                <div className="col-6 bar mt-auto mb-auto"/>
            </div>
            <div className="row">
                <Timeline position='alternate'>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="warning"/>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h6" component="span" style={{'color': "white"}}>
                                    PetaResearch | Jul. 2021 – Aug. 2021, Tunisia
                                </Typography>
                                <Typography style={{'color': "#E5E5E5"}}>
                                    <ul>
                                        <li>Implemented Infrastructure as Code - IaC to manage, track and maintain deployed AWS services.</li>
                                        <li>Wrote Python scripts for data connectivity to the deployed databases and data streaming services in AWS.</li>
                                        <li>Implemented multi-threading using Python for data connectivity to AWS Kinesis Streams reaching 100% in read throughput for maximum usage of the data streams.</li>
                                        <li>Implemented auto-scaling mechanism for AWS Kinesis Stream to scale up or down depending on throughput using AWS CloudWatch alarms.</li>
                                        <li>Designed and deployed a serverless ETL pipeline that consumes user input.</li>
                                    </ul>
                                </Typography>
                            </TimelineContent>
                            </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="warning"/>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h6" component="span" style={{'color': "white"}}>
                                    iPrecision | Jul. 2020 – Sept. 2020, Tunisia
                                </Typography>
                                <Typography style={{'color': "#E5E5E5"}}>
                                    <ul>
                                        <li>Participated in every step of the product development process of a system that monitors and controls electronic shelf labels for supermarkets from design through development and improvement of features.</li>
                                        <li>Put together RESTful APIs for the back-end that served data to the React front-end.</li>
                                        <li>Conducted unit and integration testing on the back-end’s RESTful APIs with 60% code coverage.</li>
                                        <li>Set up a continuous integration and continuous deployment CI/CD pipeline and enabled e-mail notifications of build results and output logs.</li>
                                    </ul>
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                </Timeline>
            </div>
        </div>
    )
}

export default WorkExperience