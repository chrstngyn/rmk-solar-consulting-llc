import React, { Component } from "react"
import { Link, animateScroll as scroll } from "react-scroll"
import NestedMenu from "./NestedMenu";

export default class NavBar extends Component {
    render() {
        return (
            // dropdown menu for available states -> graphical data on state retrieved via csv
            // look at react packages for bar graphs, building graphs, animation, etc.
            // record video
            // samuel martinez

            <nav className="nav" id="navbar">
                <div className="nav-content">
                    <ul className="nav-items">
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="section1"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="section2"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Solar Energy And You
                            </Link>
                            <div className="subnav-1">
                                <li className="subnav-item">
                                    <Link
                                        activeClass="active"
                                        to="section2"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        What is Solar Energy?
                                    </Link>
                                </li>
                                <li className="subnav-item">
                                    <Link
                                        activeClass="active"
                                        to="section2"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        Why does Solar Energy Matter?
                                    </Link>
                                </li>
                                <li className="subnav-item">
                                    <Link
                                        activeClass="active"
                                        to="section2"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        Ready to Invest in Solar Energy?
                                    </Link>
                                </li>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="section3"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Consulting Areas
                            </Link>
                            <div className="subnav">
                                <li className="subnav-item">
                                    <Link
                                        activeClass="active"
                                        to="section3"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        Residential
                                    </Link>
                                </li>
                                <li className="subnav-item">
                                    <Link
                                        activeClass="active"
                                        to="section3"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        Commercial
                                    </Link>
                                </li>
                                <li className="subnav-item">
                                    <Link
                                        activeClass="active"
                                        to="section3"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        Utility
                                    </Link>
                                </li>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="section4"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Provided Services
                            </Link>
                            <div className="subnav-3">
                                <li className="subnav-item">
                                    <Link
                                        activeClass="active"
                                        to="section4"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        Investment
                                    </Link>
                                </li>
                                <li className="subnav-item">
                                    <Link
                                        activeClass="active"
                                        to="section4"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        Payback Period
                                    </Link>
                                </li>
                                <li className="subnav-item">
                                    <Link
                                        activeClass="active"
                                        to="section4"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        Yearly Benefit/Cost
                                    </Link>
                                </li>
                                <li className="subnav-item">
                                    <Link
                                        activeClass="active"
                                        to="section4"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        Return on Investment
                                    </Link>
                                </li>
                                <li className="subnav-item">
                                    <Link
                                        activeClass="active"
                                        to="section4"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        Solar System that Fits You
                                    </Link>
                                </li>
                                <li className="subnav-item">
                                    <Link
                                        activeClass="active"
                                        to="section4"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        Vendor and Installer Connection
                                    </Link>
                                </li>
                                <li className="subnav-item">
                                    <Link
                                        activeClass="active"
                                        to="section4"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        Acquiring Solar Loan
                                    </Link>
                                </li>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="section5"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Solar Terms
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="section6"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Helpful Links
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="section7"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="section8"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}