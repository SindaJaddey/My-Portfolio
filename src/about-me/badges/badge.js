import React from "react";
import './badge.css';

const Badge = ({img, verificationLink}) => {

    const verifyCertif = () => {
        window.open(verificationLink, "_blank")
    }


    return (
        <div className="container mt-1 badge">
            <div className="row">
                <div className="col-4 im"><img src={img} width={210}/></div>
                <div className="col-8 des mt-auto mb-auto">
                    <div className="badge-title">AWS Certified Developer – Associate</div>
                    <div className="badge-description mt-2">Issued by Amazon Web Services Training and Certification</div>
                    <button type="button" className="btn btn-outline-light mt-4" onClick={verifyCertif}>Verify Certificate</button>
                </div>
            </div>
        </div>
    )
}

export default Badge