import component from './headline-1';
import componentHTML from './headline-1.html';

console.log(component);

export default {
	title: 'Components/Typography/Headline-1'
};

export const Default = () => componentHTML({
	text: 'Heading 1',
});

export const Red = () => componentHTML({
	text: 'Heading 1 red',
	modifier: '-red'
});