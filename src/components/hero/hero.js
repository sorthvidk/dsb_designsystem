import './_hero.scss';
import Spinner from '../spinner/spinner.js';
import Header1 from '../header-1/header-1.js';
import Header2 from '../header-2/header-2.js';

export default class Hero extends HTMLElement {
    constructor(...args) {
        super(...args);
        // your constructor stuff
        console.log('Hero component: ', this)
    }
}
customElements.define('custom-hero', Hero);