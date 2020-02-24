import { html } from "lit-html";

import H1 from "../heading-1/heading-1.html";
import H2 from "../heading-2/heading-2.html";
import Spinner from "../spinner/spinner.html";

export default ({ title, text, image, modifier, badge, badgeStyle }) => html`
  <div class="hero ${modifier || ""}" style="background-image: url(${image});">
    ${title && H1({ text: title, modifier: "-red" })} ${text && H2({ text })}
    ${badge && Spinner({ text: badge, modifier: badgeStyle })}
  </div>
`;
