import component from './spinner';
import componentHTML from './spinner.html';


export default {
	title: '2. Components|Spinner'
};

export const Default = () => componentHTML({
	text: 'SPINNER'
});
export const Fancy = () => componentHTML({
	text: 'FANCY SPINNER',
	modifier: '-fancy'
});












