import React, { useState } from "react";
import { Button, Container, Navbar } from "react-bulma-components";
import logo from "../../assets/images/logo.svg";

export const NavbarComponent = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Container>
      <Navbar>
        <Navbar.Brand>
          <img
            alt="Bulma: a modern CSS framework based on Flexbox"
            src={logo}
            // width=""
          />

          <Navbar.Burger onClick={() => setIsActive(!isActive)} />
        </Navbar.Brand>
        <Navbar.Menu className={` ${isActive ? "is-active" : ""}`}>
          <Navbar.Container>
            <Navbar.Item href="#about">ABOUT</Navbar.Item>{" "}
            <Navbar.Item href="#presale">PRESALE</Navbar.Item>{" "}
            <Navbar.Item href="#tokenomics">TOKENOMICS</Navbar.Item>{" "}
            <Navbar.Item href="#">DONATE</Navbar.Item>{" "}
            <Navbar.Item href="#faq">FAQ</Navbar.Item>{" "}
            <Navbar.Item href="#">WHITEPAPER</Navbar.Item>
            <Navbar.Item href="#">HOW TO BUY</Navbar.Item>
            <Navbar.Item href="#">FARM</Navbar.Item>
          </Navbar.Container>
          <Navbar.Container align="right">
            <Navbar.Item href="#presale">
              <Button color={"success"}>PRE SALE</Button>
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    </Container>
  );
};
