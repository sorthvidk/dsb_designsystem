import { html } from 'lit-html';
import './_spinner.scss';

export default class Spinner extends HTMLElement {
    constructor(...args) {
        super(...args);
        // your constructor stuff
        console.log('Spinner component: ', this)
    }
}
customElements.define('custom-spinner', Spinner);