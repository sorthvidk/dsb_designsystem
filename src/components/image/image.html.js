import { html } from "lit-html";

import fallbackimage from "Images/dsb_hero.jpg";

export default ({
  modifier = "",
  url = fallbackimage,
  alt = "Lorem Ipsum"
} = {}) => html`
  <img class="image ${modifier}" src="${url}" alt="${alt}" />
`;
