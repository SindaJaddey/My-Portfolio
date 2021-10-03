import React from "react";
import './arrow.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {IconButton} from "@mui/material";

const Arrow = ({direction}) => {
    return(
        <div className={direction === "down" ? "down bounce mt-5" : "up bounce mt-5"}>
            <IconButton size={'large'} style={{background: "#eeb900", color: "black"}} href={direction === "down" ? "#about-me" : "#home"}>
                {direction === "down" ? <ArrowDownwardIcon fontSize='large'/> : <ArrowUpwardIcon fontSize='large'/>}
            </IconButton>
        </div>
    )
}

export default Arrow