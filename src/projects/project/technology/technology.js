import React from "react";
import './technology.css';

const Technology = ({name, image}) => {
    return (
        <div className="container mt-sm-2 technology">
            <div className="row">
                {image ? <div className="col-3"><img src={image} width={30}/></div> : null}
                <div className="col px-2 mx-0">{name}</div>
            </div>
        </div>
    )
}

export default Technology