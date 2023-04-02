import React from "react";
import contentimage from "../images/Group 77.png"

export default function Content () {
    return (
        <section className="content-section">
            <img src={contentimage} className="content-img"/>
            <h1 className="content-header">Online Experiences</h1>
            <p className="content-para">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
        </section>
    )
}