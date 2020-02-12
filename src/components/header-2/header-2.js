import './_header-2.scss';

export default class Header2 extends HTMLElement {
    constructor(...args) {
        super(...args);
        // your constructor stuff
        console.log('Header2 component: ', this)
    }
}
customElements.define('header-2', Header2);