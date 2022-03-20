import CountDown from "components/CountDown/CountDown";
import { TitleComponent } from "components/TitleComponent/TitleComponent";
import React from "react";
import {
  Button,
  Columns,
  Container,
  Content,
  Form,
  Icon,
} from "react-bulma-components";
import presaleImg from "../../../assets/images/h3.svg";
import bg from "../../../assets/images/bgpresale.svg";

export const Presale = () => {
  return (
    <>
      <section id="presale">
        <Container>
          <TitleComponent borderAlign="center">Presale</TitleComponent>
          <div
            className="countdown-board"
            style={{ backgroundImage: `url(${bg}` }}
          >
            <Columns>
              <Columns.Column size={6}>
                <Content size={"medium"}>
                  <h1 className="text-center">Presale Starting in</h1>
                  <p className="text-center">Super Bounty Up to 100%</p>
                </Content>
                <CountDown />
              </Columns.Column>
              <Columns.Column size={6}>
                <Form.Field>
                  <Form.Label size={"medium"}>BNB Orders</Form.Label>
                  <Form.Control>
                    <Form.Input color="success" />

                    <Icon align="right" color={"success"} size="small">
                      <i className="fas fa-check" />
                    </Icon>
                  </Form.Control>
                </Form.Field>

                <Button.Group>
                  <Button color={"primary"}>BUY TOKEN</Button>
                  <Button color={"primary"}>CLAIM NOW</Button>
                  <Button color={"primary"}>ADD WALLET</Button>
                </Button.Group>

                <Content>
                  <p>
                    (*) 0.01 BNB = 10.000 GBDOGE <br /> (*) 0.1 BNB = 100.000
                    GBDOGE <br /> (*) 1.0 BNB = 1.000.000 GBDOGE <br /> (*)
                    Claim 3.000 GBDOGE
                  </p>
                </Content>
              </Columns.Column>
            </Columns>
          </div>
          <Columns>
            <Columns.Column size={6}>
              <Form.Field>
                <Form.Label size={"medium"}>Referral Rewards</Form.Label>
                <Form.Control>
                  <Form.Input size={"medium"} color="success" />
                  <Icon align="left" size="small" color={"success"}>
                    <i className="fas fa-user" color="success" />
                  </Icon>
                  <Icon align="right" size="small">
                    <i className="fas fa-check" />
                  </Icon>
                </Form.Control>
              </Form.Field>
              <Button.Group size={"medium"}>
                <Button color={"success"} rounded>
                  Get Referral Link
                </Button>
                <Button outlined rounded color={"success"}>
                  Copy
                </Button>
              </Button.Group>
              <Content>
                <p>
                  - Invite everyone to get 100% referral bonus for each Airdrop
                  and Presale.
                  <br />- Get 30% BNB & 20% GBDOGE per referral.
                </p>
              </Content>
            </Columns.Column>
            <Columns.Column size={6}>
              <img src={presaleImg} alt="" />
            </Columns.Column>
          </Columns>
        </Container>
      </section>
    </>
  );
};
