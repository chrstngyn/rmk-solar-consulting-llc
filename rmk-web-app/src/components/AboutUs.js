import React from "react"

export default function AboutUs({ title, title1, occupation1, description1, title2, occupation2, description2, dark, id }) {
    return (
        <div className={"section" + (dark ? "section-dark" : "")}>
            <div className="section-content" id={id}>
                <h1>{title}</h1>
                <div class="row">
                    <h1>{title1}</h1>
                    <h2>{occupation1}</h2>
                    <p>{description1}</p>
                </div>
                <div class="row">
                    <h1>{title2}</h1>
                    <h2>{occupation2}</h2>
                    <p>{description2}</p>
                </div>
            </div>
        </div>
    );
}