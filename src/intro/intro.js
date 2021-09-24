import React from "react";
import './intro.css'
import Badge from "./badges/badge";
import aws_developer_associate from "../assets/images/aws-developer-associate.png"

const Intro = () => {
    return(
        <div className="container mt-5 pt-5">
            <div className="row greetings mt-1 pt-5 px-5">Hello, i'm</div>
            <div className="row name pt-2 px-5">Sinda Jeddey</div>
            <div className="row description pt-1 px-5 mb-5">I’m a last year software engineering student specialized in DevOps and Cloud Computing and an AWS Certified Developer Associate.</div>
            <Badge img={aws_developer_associate}/>
        </div>
    )
}

export default Intro