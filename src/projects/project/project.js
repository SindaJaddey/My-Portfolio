import React from "react";
import './project.css';
import Technology from "./technology/technology";

const Project = ({title, description, techStack}) => {
    const nbRows = techStack.length % 3 === 0 ? techStack.length/3 : techStack.length/3 + 1;

    const rows = [];
    if (techStack.length < 3)
        rows.push(techStack.map(tech => <div className="row mt-3 mb-3"><div className="col"><Technology name={tech.name} image={tech.logo} /></div></div>))
    else {
        for (let i=0; i<nbRows; i++){
            const subTech = techStack.slice(3*i,3*(i+1)).map(tech => <div className="col"><Technology name={tech.name} image={tech.logo} /></div>)
            rows.push(<div className="row mt-3 mb-3">{subTech}</div>)
        }
    }

    return(
        <div className="container mt-2 mb-4 project">
            <div className="row">
                <div className="col mt-1 project-title">{title}</div>
            </div>
            <div className="row">
                <div className="col mt-3 project-description">{description}</div>
            </div>
            {rows}
        </div>
    )
}

export default Project