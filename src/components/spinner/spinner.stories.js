import component from './spinner';
import componentHTML from './spinner.html';

console.log(component)

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












