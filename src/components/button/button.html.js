import { html } from "lit-html";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";


export default ({ modifier, text, icon }) => html`
  <div class="button ${modifier || ''}">
    ${unsafeHTML(icon)} ${text}
  </div>
`;
