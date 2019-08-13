import React from "react"
import Logo from "../Logo.png"

export default function Header({ title, subtitle, dark, id }) {
    return (
        <div className={"section" + (dark ? "section-dark" : "")}>
            <div className="section-content" id={id}>
                <div className="row">
                    <div className="logo-container">
                        <img className="logo" alt="R&S Solar Consulting, LLC." src={Logo} />
                    </div>
                    <h1 className="title">{title}</h1>
                </div>
                <p>{subtitle}</p>
            </div>
        </div>
    );
}