import React from 'react';
import { Image } from 'react-native';

interface Props {
	isoCode: string;
	size: number;
	style?: any;
	ratio?: '1x1' | '4x3';
}

const CountryFlag = ({ isoCode, size, style, ratio = '4x3' }: Props) => {
	// This switch case is just there because you can't name variables "in" and "do"
	let flagUrl;

	switch (isoCode.toLowerCase()) {
		case 'in':
			flagUrl = `${ratio}/ind.svg`;
			break;
		case 'do':
			flagUrl = `${ratio}/dom.svg`;
			break;
		case '':
			flagUrl = `${ratio}/unknown.svg`;
			break;
		default:
			flagUrl = `${ratio}/${isoCode.toLowerCase()}.svg`;
			break;
	}

	let imageAsset = null;
	import('./flags/' + flagUrl)
		.then((module) => (imageAsset = module.default))
		.catch((error) => console.log('Error loading flag', error));

	return imageAsset ? (
		<Image source={imageAsset} style={[{ width: size * (ratio === '4x3' ? 1.6 : 1), height: size }, style]} />
	) : null;
};

export default CountryFlag;
