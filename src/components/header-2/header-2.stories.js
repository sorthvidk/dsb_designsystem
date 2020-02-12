import component from './header-2';
import componentHTML from './header-2.html.js';

import { html } from 'lit-html';

export default {
	title: '2. Components|Typography|Header 2'
};

export const Header2 = () => componentHTML({
	text: 'Header 2',
});