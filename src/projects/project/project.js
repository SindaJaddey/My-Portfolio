import React from "react";
import './project.css';

const Project = ({title, description, techStack}) => {
    return(
        <div className="container mt-2 mb-4 project">
            <div className="row">
                <div className="col mt-1 project-title">{title}</div>
            </div>
            <div className="row">
                <div className="col mt-3 project-description">{description}</div>
            </div>
            <div className="row">
                <div className="col mt-4 mb-2"><i className="project-stack">Used Technical Stack: </i>{techStack.join(', ')}</div>
            </div>
        </div>
    )
}

export default Project