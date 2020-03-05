import { html } from 'lit-html';

export default ({text, modifier}) => html`<p class="headline-1 ${ modifier || '' }">${text}</p>`;