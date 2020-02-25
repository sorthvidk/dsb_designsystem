import { html } from "lit-html";

export default ({ text, icon }) => html`
    <div class="button">
      ${icon} ${text}
    </div>
`;
