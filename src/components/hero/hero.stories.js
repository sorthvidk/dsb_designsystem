import { text, radios } from "@storybook/addon-knobs";

// import "./hero.scss";
import componentHTML from "./hero.html";
import image from "Images/dsb_hero.jpg";

export default {
  title: "Components/Hero"
};

const config = ({ bg, modifier = "", button = "" } = {}) => ({
  bg,
  modifier,
  headline: text("Headline"),
  copy: text("Paragraph"),
  button: {
    modifier: button,
    text: text("Button text", "Se priser")
  },
  image
});

export const Default = () => componentHTML(config({ button: "-ghost" }));

export const Full = () => componentHTML(config({ modifier: "-full" }));

export const CSSBackground = () =>
  componentHTML(config({ bg: true, modifier: radios("Modifier", {None: '', ['-full']: '-full'}, '') }));
