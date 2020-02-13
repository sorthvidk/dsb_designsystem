import component from './heading-1';
import componentHTML from './heading-1.html';

export default {
	title: '2. Components|Typography/Heading/H1'
};

export const Heading1 = () => componentHTML({
	text: 'Heading 1',
});

export const Heading1Red = () => componentHTML({
	text: 'Heading 1 red',
	modifier: '-red'
});