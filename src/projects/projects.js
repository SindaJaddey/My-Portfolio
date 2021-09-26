import React from "react";
import './projects.css';
import Project from "./project/project";

const Projects = () => {
    const projects = [
        {
            title: "Webipie: From Monolithic to Microservices",
            description: "I got the chance to collaborate in the migration and re-architecture of a monolithic application to microservices and orchestrated the microservices and their communication.",
            stack: ['NestJS', 'MongoDB', 'Docker', 'Kubernetes', 'Skaffold']
        },
        {
            title: "Eullo: Secure Chat Application",
            description: "Eullo is a secure chat application developed with integrated cryptography operations to implement end-to-end encryption enabling secure exchange of messages using asymmetric encryption and RSA key pairs.",
            stack: ['Python', 'Flask', 'LDAP', 'Angular', 'AWS EC2', 'AWS RDS','AWS S3', 'Websocket']
        },
        {
            title: "Kawer: Football Fields Rental Application",
            description: "Kawer is serverless web application for renting football fields by amateurs and also putting football fields up for rent.",
            stack: ['Terraform', 'Angular', 'AWS DynamoDB', 'AWS S3', 'AWS Cognito','AWS Lambda']
        }
    ]
    return(
        <div className="container" id="projects">
            <div className="row mt-5">
                <div className="col-3 title">Projects</div>
                <div className="col-9 bar mt-auto mb-auto"/>
            </div>
            <div className="row">
                {projects.map(project => <Project title={project.title} description={project.description} techStack={project.stack}/>)}
            </div>
        </div>
    )
}

export default Projects