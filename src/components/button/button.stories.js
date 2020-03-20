// import "./button.scss";
import componentHTML from "./button.html";
import icon from "Svg/up-arrow.svg";

export default {
  title: "Components/Button"
};

export const Default = () => componentHTML({
	text: 'Hent køreplan'
});

export const Icon = () => componentHTML({
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
