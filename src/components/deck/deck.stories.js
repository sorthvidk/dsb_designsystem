import componentHTML from "./deck.html";
import demoContent from "Components/typography/hero-p/hero-p.html";

export default {
  title: "Components/Deck"
};

export const Default = () =>
  componentHTML({
    content: demoContent()
  });

export const Red = () =>
  componentHTML({
    modifier: "-red",
    content: demoContent()
  });

export const Shape = () =>
  componentHTML({
    modifier: "-shape",
    content: demoContent()
  });

export const Narrow = () =>
  componentHTML({
    width: "-two",
    content: demoContent()
  });
