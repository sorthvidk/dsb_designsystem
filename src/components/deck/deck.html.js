import { html } from "lit-html";

export default ({
  modifier = "",
  width = "-one",
  content = "Default deck content"
}) => html`
  <div class="deck ${modifier}">
    <div class="deck__inner">
      <div class="w ${width}">
        ${content}
      </div>
    </div>
  </div>
`;
