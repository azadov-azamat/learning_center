import React, {useState} from "react";
import {Button, Container} from "reactstrap";
import {Link} from "react-router-dom";

export default function NavbarJs() {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <div className={"navbarIN"}>
            <Container fluid className={"containerMy zindex-1 d-flex justify-content-between align-items-center"}>
                <Link to={"/home"} className="system_logo">
                    <img
                        src="https://global-uploads.webflow.com/5f871b1a1b56ad12badcc37c/5f871b1a1b56adba66dcc38f_logo.svg"
                        alt="logo"/>
                </Link>
                <ul className={"d-none d-md-flex"}>
                    <li>
                        <a className={"phone_btn"} href={"tel:+998917800110"}>+998 91 780 01 10</a>
                    </li>
                    <li>
                        <Link className={"navLink"} to={"/"}>Reviews</Link>
                    </li>
                    <li>
                        <Link className={"navLink"} to={"/"}>About us</Link>
                    </li>
                    <li>
                        <Button className={"btn_nav"}>Book a free lesson</Button>
                    </li>
                </ul>
                <div onClick={toggle}
                     className={isOpen ? "menu_toggle d-md-none activeToggle" : "menu_toggle d-md-none"}/>
                <div className={isOpen ? "sidebar activeSidebar" : 'sidebar'}>
                    <ul className={isOpen ? "d-flex justify-content-center align-items-center flex-column" : "menu"}>
                        <li>
                            <Link className={"navLink"} to={"/"}>Reviews</Link>
                        </li>
                        <li>
                            <Link className={"navLink"} to={"/"}>About us</Link>
                        </li>
                        <li>
                            <Button className={"btn_nav"}>Book a free lesson</Button>
                        </li>
                        <li>
                            <a className={"phone_btn"} href={"tel:+998917800110"}>+998 91 780 01 10</a>
                        </li>
                        <li>
                            <a className={"social_btn"} href={"mailto:social@kokland.org"}>social@kokland.org</a>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}
