import './_header-1.scss';

export default class Header1 extends HTMLElement {
    constructor(...args) {
        super(...args);
        // your constructor stuff
        console.log('Header1 component: ', this)
    }
}
customElements.define('header-1', Header1);