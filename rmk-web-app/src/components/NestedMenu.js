import React, { Component } from "react"

export default class NestedMenu extends Component {
    render() {
        return (
            <ul>
                <ul className="nested-menu">
                    <li className="nested-menu-item ">
                        <a>Residential</a>
                    </li>
                    <li className="nested-menu-item ">
                        <a>Commercial</a>
                    </li>
                    <li className="nested-menu-item ">
                        <a>Utility</a>
                    </li>
                </ul>
            </ul>
        )
    }
}