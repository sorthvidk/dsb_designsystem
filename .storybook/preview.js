import { addParameters, addDecorator } from '@storybook/html';
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';
// import { addReadme } from 'storybook-readme/html';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
// // import { render } from 'lighterhtml';
import { render, TemplateResult } from 'lit-html';
// import { classMap } from 'lit-html/directives/class-map';
import { withHTML } from '@whitespace/storybook-addon-html/html';

import './../src/index.scss';

addDecorator((story) => {
	//if (component instanceof TemplateResult) {
	const el = document.createElement('div'); // this element probably can br reused.
	render(story(), el);
	return el.children[0];
	//}
	//return story();
});
addDecorator(withA11y);
// addDecorator(addReadme);
addDecorator(withKnobs);
addDecorator(withHTML({
	prettier: {
		printWidth: 160,
		tabWidth: 2,
		useTabs: false,
	},
}));

addParameters({
	// options: {
	// 	storySort: (a, b) =>
	// 		a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, {
	// 			numeric: true
	// 		}),
	// },
	options: {
		showRoots: true,
	},
	viewport: {
		viewports: INITIAL_VIEWPORTS,
	},
});