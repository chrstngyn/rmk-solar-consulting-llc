import React from "react"

export default function SolarEnergyAndYou({title, subtitle1, p1, subtitle2, p2, subtitle3, p3, dark, id}) {
    return (
        <div className={"section" + (dark ? "section-dark" : "")}>
            <div className="section-content" id={id}>
                <h1>{title}</h1>
                <h3>{subtitle1}</h3>
                <p>{p1}</p>
                <h3>{subtitle2}</h3>
                <p>{p2}</p>
                <h3>{subtitle3}</h3>
                <p>{p3}</p>
            </div>
        </div>
    );
}