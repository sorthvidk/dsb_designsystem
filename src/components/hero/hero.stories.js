import component from "./hero";
import componentHTML from "./hero.html";

import image from "Images/dsb_hero.jpg";

console.log(component);

export default {
  title: "Components/Hero"
};

export const Default = () =>
  componentHTML({
    title: "Billige billetter til Hamburg",
    text:
      "Få det fulde overblik over den aktuelle togtrafik, uforudsete hændelser og planlagte sporarbejder i den kommende tid.",
    image: image,
    badge: "249kr",
    badgeStyle: "-fancy"
  });
