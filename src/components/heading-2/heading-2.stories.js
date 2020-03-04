import component from './heading-2';
import componentHTML from './heading-2.html';

console.log(component);

export default {
	title: 'Components/Typography/Heading-2'
};

export const Default = () => componentHTML({
	text: 'Heading 2',
});