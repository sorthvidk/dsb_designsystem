import { html } from "lit-html";

import Deck from "../deck/deck.html";
import Headline from "../typography/headline-1/headline-1.html";
import Text from "../typography/hero-p/hero-p.html";
import Button from "../button/button.html";
import Image from "../image/image.html";

export default ({
  bg = false,
  modifier = "-full",
  headline = "Billige billetter til Hamburg",
  copy = "Få det fulde overblik over den aktuelle togtrafik, uforudsete hændelser og planlagte sporarbejder i den kommende tid.",
  button = {
    text: "Se priser"
  },
  image
} = {}) => html`
  <section class="hero ${modifier || ""}">
    ${Deck({
      modifier: `-shape`,
      content: html`
        <div class="hero__content">
          ${Headline({ text: headline })}
          ${Text({ text: copy })}
          ${Button({ text: button.text, modifier: button.modifier })}
        </div>
        ${bg
          ? html`
              <div
                class="hero__image"
                style="background-image: url(${ image });"
              ></div>
            `
          : Image({modifier: "hero__image", url: image})}
      `
    })}
  </section>
`;
