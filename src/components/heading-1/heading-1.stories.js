import component from './heading-1';
import componentHTML from './heading-1.html';

console.log(component);

export default {
	title: 'Components/Typography/Heading-1'
};

export const Default = () => componentHTML({
	text: 'Heading 1',
});

export const Red = () => componentHTML({
	text: 'Heading 1 red',
	modifier: '-red'
});