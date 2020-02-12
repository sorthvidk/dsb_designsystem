import { html } from 'lit-html';
import Spinner from '../spinner/spinner.html';

export default ({title, text, modifier, badge, badgeStyle}) => html`
    <custom-hero class="hero ${ modifier }" style="background: url(images/dsb_hero.jpg);">
        <header-1 class="header-1">${ title }</header-1>
        <header-2 class="header-2">${ text }</header-2>
        ${ badge && Spinner({text: badge, modifier: badgeStyle}) }
    </custom-hero>
`;