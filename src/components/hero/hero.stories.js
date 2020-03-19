import { text } from "@storybook/addon-knobs";

import "./hero.scss";
import componentHTML from "./hero.html";
import image from "Images/dsb_hero.jpg";

export default {
  title: "Components/Hero"
};

const config = ({modifier = '', button = ''} = {}) => ({
  modifier,
  headline: text("Headline", "Billige billetter til Hamburg"),
  copy: text(
    "Paragraph",
    "Få det fulde overblik over den aktuelle togtrafik, uforudsete hændelser og planlagte sporarbejder i den kommende tid."
  ),
  button: {
    modifier: button,
    text: text("Button text", "Se priser")
  },
  image,
});

export const Default = () =>
  componentHTML(config());

export const Half = () =>
  componentHTML(config({modifier: '-half', button: '-ghost'}));
