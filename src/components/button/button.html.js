import { html } from "lit-html";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";


export default ({ text, icon }) => html`
  <div class="button">
    ${unsafeHTML(icon)} ${text}
  </div>
`;
