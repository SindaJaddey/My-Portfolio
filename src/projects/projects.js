import React from "react";
import './projects.css';
import Project from "./project/project";
import Zoom from "react-reveal";
import Fade from "react-reveal";
import NestJS from '../assets/images/nestjs.png';
import Docker from '../assets/images/docker.png';
import Kubernetes from '../assets/images/kuberntes.png';
import Skaffold from '../assets/images/skaffold.png';
import Mongo from '../assets/images/mongo.png';
import Python from '../assets/images/python.png';
import Angular from '../assets/images/angular.png';
import EC2 from '../assets/images/ec2.png';
import RDS from '../assets/images/rds.svg';
import S3 from '../assets/images/s3.svg';
import Socket from '../assets/images/socket.gif';
import Flask from '../assets/images/flask.png';
import LDAP from '../assets/images/logo-ldap.svg';
import Terraform from '../assets/images/terraform.png';
import Lambda from '../assets/images/aws-lambda.png';
import DDB from '../assets/images/DynamoDB.png';
import Cognito from '../assets/images/cognito.png';

const Projects = () => {
    const projects = [
        {
            title: "Webipie: From Monolithic to Microservices",
            description: "I got the chance to collaborate in the migration and re-architecture of a monolithic application to microservices and orchestrated the microservices and their communication.",
            stack: [
                {name: 'NestJS', logo: NestJS},
                {name:'MongoDB',logo: Mongo},
                {name:'Docker',logo: Docker},
                {name:'Kubernetes', logo:Kubernetes},
                {name:'Skaffold', logo: Skaffold}
            ]
        },
        {
            title: "Eullo: Secure Chat Application",
            description: "Eullo is a secure chat application developed with integrated cryptography operations to implement end-to-end encryption enabling secure exchange of messages using asymmetric encryption and RSA key pairs.",
            stack: [
                {name: 'Python', logo: Python},
                {name: 'Flask', logo:Flask },
                {name: 'LDAP', logo: LDAP},
                {name: 'AWS EC2', logo: EC2},
                {name: 'AWS RDS', logo: RDS},
                {name: 'Socket.io', logo: Socket},
                {name: 'Angular', logo: Angular},
                {name: 'AWS S3', logo: S3}
            ]
        },
        {
            title: "Kawer: Football Fields Rental Application",
            description: "Kawer is serverless web application for renting football fields by amateurs and also putting football fields up for rent.",
            stack: [
                {name: 'Terraform', logo: Terraform},
                {name: 'AWS Lambda', logo: Lambda},
                {name: 'AWS Cognito', logo: Cognito},
                {name: 'AWS DynamoDB', logo: DDB},
                {name: 'Angular', logo: Angular},
                {name: 'AWS S3', logo: S3}
            ]
        }
    ]
    return(
        <Zoom>
            <div className="container pt-1" id="projects">
                <Fade bottom>
                    <div className="row mt-5">
                        <div className="col-sm col-md-3 title">Projects</div>
                        <div className="col-sm col-md-9 bar mt-auto mb-auto"/>
                    </div>
                </Fade>
                <div className="row mt-2">
                    {projects.map(project => <Project title={project.title} description={project.description} techStack={project.stack}/>)}
                </div>
            </div>
        </Zoom>

    )
}

export default Projects