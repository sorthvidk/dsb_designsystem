import { html } from "lit-html";

export default ({ text = '"Du kan køre med os" - DSB' } = {}) =>
  html`
    <p class="hero-p">${text}</p>
  `;
