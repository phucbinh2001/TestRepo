import { TitleComponent } from "components/TitleComponent/TitleComponent";
import React from "react";
import { Columns, Container, Content } from "react-bulma-components";
import planetImg from "../../../assets/images/planet-item.svg";
import dogImg from "../../../assets/images/dog-item.svg";
import backgroundImg from "../../../assets/images/background-item.svg";

export const AboutProject = () => {
  return (
    <section className="center-content" id="about">
      <Columns>
        <Columns.Column size={5}>
          <div id="animation">
            <img
              src={planetImg}
              alt=""
              id="planet"
              className="animate__animated animate__bounce"
            />
            <img src={dogImg} alt="" id="dog" />
            <img src={backgroundImg} alt="" id="background" />
          </div>
        </Columns.Column>
        <Columns.Column size={6}>
          <TitleComponent borderAlign={"left"}>
            About GREEN BABYDOGE
          </TitleComponent>
          <Content>
            <p>
              Many dog meme coins have been launched after Dogecoin like GREEN
              BABYDOGE and Akita, but none of them have had the power to be
              eco-friendly and to protect the environment by supporting the main
              activists in this field as well as the good causes that matter the
              most to us all through its strong green community.
            </p>

            <p>
              A wise man by the name of Elon once said: "who controls memes,
              controls the Universe". We will be happy enough to make the world
              greener with the power of the memes.
            </p>
          </Content>
        </Columns.Column>
      </Columns>
    </section>
  );
};
