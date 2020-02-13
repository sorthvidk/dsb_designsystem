import { html } from 'lit-html';

export default ({text, modifier}) => html`<div class="spinner ${ modifier }">${text}</div>`;