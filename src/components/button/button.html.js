import { html } from "lit-html";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";


export default ({ modifier, text, icon }) => html`
  <button class="button ${modifier || ''}">
    ${icon && unsafeHTML(icon)} ${text}
  </button>
`;
