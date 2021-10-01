import React from "react";
import './technology.css';
import Fade from "react-reveal";


const Technology = ({name, image}) => {
    return (
        <Fade bottom>
            <div className="container mt-xs-2 technology">
                <div className="row">
                    {image ? <div className="col-3"><img src={image} width={30}/></div> : null}
                    <div className="col px-2 mx-0">{name}</div>
                </div>
            </div>
        </Fade>

    )
}

export default Technology