import React from "react";
// import carding from "../images/katie-zaferes.png"
import strimg from "../images/Star 1.png"

export default function Card(props) {


    return (

        <div className="card">
            { props.openSpots===0 && <div className="card--badge">SOLD OUT</div>}  

            <img src={props.img} className="card-img" />
            <div className="card-in-div ">
                <img src={strimg} className="str-img" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount})•</span>
                <span className="gray">{props.country}</span>
            </div>
            <p>Life lessons with {props.title}
            </p>
            <p><span className="bold">From ${props.price}</span>/person</p>
        </div>

    )
}