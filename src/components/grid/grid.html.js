import { html } from "lit-html";
import { repeat } from "lit-html/directives/repeat";

const amount = 24;
const items = Array(amount).fill("");

export const allWidths = () => html`
  <div>
    ${repeat(
      items,
      (i, index) => html`
        <div class="grid">
          <div class="col-${index + 1}">
            <p class="standard-p">.col-${index + 1}</p>
          </div>
        </div>
      `
    )}
  </div>
`;

export const allOffsets = () => html`
  <div>
    ${repeat(
      items,
      (i, index) => html`
        <div class="grid">
          <div class="col-4 offset-${index + 1}">
            <p class="standard-p">.offset-${index + 1}</p>
          </div>
        </div>
      `
    )}
  </div>
`;

export const allClasses = () => html`
  <div class="grid">
    <div class="col-24 col-s-12 col-m-6">
      <p class="standard-p">Column</p>
    </div>
    <div class="col-24 col-s-12 col-m-6">
      <p class="standard-p">Column</p>
    </div>
    <div class="col-24 col-s-12 col-m-6">
      <p class="standard-p">Column</p>
    </div>
    <div class="col-24 col-s-12 col-m-6">
      <p class="standard-p">Column</p>
    </div>
  </div>
`;
