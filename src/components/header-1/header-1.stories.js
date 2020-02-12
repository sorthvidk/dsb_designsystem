import component from './header-1';
import componentHTML from './header-1.html.js';

import { html } from 'lit-html';

export default {
	title: '2. Components|Typography|Header 1'
};

export const Header1 = () => componentHTML({
	text: 'Header 1',
});