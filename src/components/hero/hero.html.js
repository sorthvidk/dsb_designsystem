import { html } from "lit-html";

import Headline from "../typography/headline-1/headline-1.html";
import Text from "../typography/hero-p/hero-p.html";
import Button from "../button/button.html";

export default ({ modifier, headline, copy, button, image }) => html`
  <div class="hero ${modifier}">
    <img class="hero__image" src="${image}" alt="lorem ipsum" />
    <div class="hero__content">
      ${headline && Headline({ text: headline })}
      ${copy && Text({ text: copy })}
      ${button && Button({ text: button.text, modifier: button.modifier })}
    </div>
  </div>
`;
