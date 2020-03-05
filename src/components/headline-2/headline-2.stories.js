import component from './headline-2';
import componentHTML from './headline-2.html';

console.log(component);

export default {
	title: 'Components/Typography/Headline-2'
};

export const Default = () => componentHTML({
	text: 'Heading 2',
});