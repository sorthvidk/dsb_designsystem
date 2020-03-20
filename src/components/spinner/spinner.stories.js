// import './spinner.scss';
import componentHTML from './spinner.html';

export default {
	title: 'Components/Spinner'
};

export const Default = () => componentHTML({
	text: 'SPINNER'
});
export const Fancy = () => componentHTML({
	text: 'FANCY SPINNER',
	modifier: '-fancy'
});












