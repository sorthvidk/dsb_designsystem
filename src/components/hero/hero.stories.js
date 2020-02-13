import component from './hero';
import componentHTML from './hero.html';

export default {
	title: '2. Components|Hero'
};

export const Default = () => componentHTML({
	title: `Billige billetter til Hamburg`,
	text: 'Få det fulde overblik over den aktuelle togtrafik, uforudsete hændelser og planlagte sporarbejder i den kommende tid.',
	badge: '249kr',
	badgeStyle: '-fancy'
});
