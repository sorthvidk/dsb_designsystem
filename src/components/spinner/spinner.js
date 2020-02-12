import { html } from 'lit-html';

class Spinner extends HTMLElement {
    constructor(...args) {
        super(...args);
        // your constructor stuff
        console.log('Spinner component: ', this)
    }
}
export default customElements.define('custom-spinner', Spinner);