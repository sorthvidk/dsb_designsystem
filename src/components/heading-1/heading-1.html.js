import { html } from 'lit-html';

export default ({text, modifier}) => html`<h1 class="heading-1 ${ modifier || '' }">${text}</h1>`;