import React from "react";
import { Button, Columns, Container, Navbar } from "react-bulma-components";
import logo from "../../assets/images/logo.svg";
import footerImg from "../../assets/images/footerBackground.svg";

export const Footer = () => {
  return (
    <footer style={{ backgroundImage: `url(${footerImg})` }}>
      <section>
        <Container>
          <Columns>
            <Columns.Column size={4}>
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              <Button.Group>
                <Button color={""}>HOW TO BUY</Button>
                <Button color={"primary"}>PRESALE</Button>
              </Button.Group>
            </Columns.Column>
          </Columns>
          <p className="text-center has-text-white">
            Contact: greenbabydoge.org{" "}
          </p>
        </Container>
      </section>
    </footer>
  );
};
