import component from "./button";
import componentHTML from "./button.html";
import icon from "Svg/up-arrow.svg";

console.log(component)

export default {
  title: "Components/Button"
};

export const Default = () => componentHTML({
	icon,
	text: 'Hent køreplan'
});

export const Blue = () => componentHTML({
	modifier: '-blue',
	icon,
	text: 'Hent køreplan'
});

export const Ghost = () => componentHTML({
	modifier: '-ghost',
	icon,
	text: 'Hent køreplan'
});
