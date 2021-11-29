import React from "react";
import './badge.css';
import Zoom from "react-reveal";

const Badge = ({title, issuedBy, img, verificationLink}) => {

    const verifyCertif = () => {
        window.open(verificationLink, "_blank")
    }


    return (
        <Zoom>
            <div className="container badge mt-3">
                <div className="row">
                    <div className="col-sm col-md-4"><img src={img} width={160}/></div>
                    <div className="col-sm col-md-8 mt-auto mb-auto">
                        <div className=" badge-title">{title}</div>
                        <div className=" badge-description mt-2">Issued by {issuedBy}</div>
                        <button type="button" className="btn btn-outline-light mt-4" onClick={verifyCertif}>Verify Certificate</button>
                    </div>
                </div>
            </div>
        </Zoom>
    )
}

export default Badge