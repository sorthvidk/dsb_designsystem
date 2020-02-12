import { html } from 'lit-html';

export default ({text, modifier}) => html`<custom-spinner class="custom-spinner ${ modifier }">${text}</custom-spinner>`;