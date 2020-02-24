import component from './heading-2';
import componentHTML from './heading-2.html';

console.log(component);

export default {
	title: 'Components/Typography/Heading/H2'
};

export const Heading2 = () => componentHTML({
	text: 'Heading 2',
});