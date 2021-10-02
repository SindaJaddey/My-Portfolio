import React from "react";
import './arrow.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {IconButton} from "@mui/material";

const Arrow = () => {
    return(
        <div className="arrow bounce mt-5">
            <IconButton size={'large'} style={{background: "#eeb900", color: "black"}} href={"#about-me"}>
                <ArrowDownwardIcon fontSize='large'/>
            </IconButton>
        </div>
    )
}

export default Arrow