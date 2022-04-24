import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "./css/styles.css";

const Navtop = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navigation">
      <Navbar color="none" light expand="md">
        <Nav className="container-fluid">
          <NavbarBrand className="navbrand" href="/">
            <span class="navtext">CAPERCAST</span>
          </NavbarBrand>
          <NavbarToggler onClick={toggle}/>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#newsletter">
                  <span class="Options">MAILING LIST 📨</span>
                </NavLink>
                
              </NavItem>
              <NavItem>
              <NavLink href="https://mehulrastogi.notion.site/Resources-for-Student-Entrepreneurs-via-Capercast-7cfb2c4c9026453aac5a681b60bb802f">
                  <span class="Options">RESOURCES</span>
                </NavLink>
                </NavItem>
            </Nav>
          </Collapse>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navtop;
