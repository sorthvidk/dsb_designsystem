import component from './button';
import componentHTML from './button.html';
import icon from 'Svg/up-arrow.svg'

console.log(component)

export default {
	title: 'Components/Button'
};

export const Button = () => componentHTML({
	icon: icon,
	text: 'button'
});