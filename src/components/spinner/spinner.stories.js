import Spinner from './spinner.js';
import SpinnerHTML from './spinner.html.js';


export default {
	title: 'Components/Spinner'
};

export const Default = () => SpinnerHTML({
	text: 'SPINNER'
});
export const Fancy = () => SpinnerHTML({
	text: 'FANCY SPINNER',
	modifier: '-fancy'
});












