import React from 'react';
import cx from 'classnames';
import { readability } from 'tinycolor2';

import Flex from 'meetup-web-components/lib/layout/Flex';
import FlexItem from 'meetup-web-components/lib/layout/FlexItem';

import colorData from '../../utils/colorData';

const rgba2rgb = (RGB_background, RGBA_colorArr) => {
	const alpha = RGBA_colorArr[3];

	return `rgb(
		${parseInt((1 - alpha) * RGB_background[0] + alpha * RGBA_colorArr[0])},
		${parseInt((1 - alpha) * RGB_background[1] + alpha * RGBA_colorArr[1])},
		${parseInt((1 - alpha) * RGB_background[2] + alpha * RGBA_colorArr[2])}
	)`;
};

const ContrastBadge = props => {
	const { contrastRatio } = props;
	const isAccessible = contrastRatio >= 3;

	return(
		<div
			className={cx(
				'__docs_colorContrastBadge inverted text--small wrap--singleLine',
				{'__docs_colorContrastBadge--failed': !isAccessible}
			)}
		>
			{
				`${isAccessible
					? '👍 Pass'
					: '❌ Fail'}
				- ${contrastRatio}`
			}
		</div>
	);
};

const AccessibilityInfo = props => {
	const testColors = colorData.filter(color => (
		color.name == 'primary' ||
		color.name == 'secondary' ||
		color.name == 'tertiary' ||
		color.name == 'primaryInverted' ||
		color.name == 'secondaryInverted' ||
		color.name == 'tertiaryInverted' ||
		color.name == 'red' ||
		color.name == 'orange' ||
		color.name == 'teal' ||
		color.name == 'blue'
	));

	const { baseColor } = props;

	return (
		<div className="margin--bottom">
			<div className="margin--bottom">
				<h4 className="text--big">Contrast ratios</h4>
				<p>Minimum contrast ratio: 3.0</p>
			</div>
			<div className="_docs_accessibilityInfo">
				{
					testColors.map((testColor, i) => {
						const baseColorRGB = rgba2rgb([255,255,255], baseColor);
						const baseColorRGBArray = baseColorRGB.replace(/[^\d,]/g, '').split(',');
						const testColorRGB = rgba2rgb(baseColorRGBArray, testColor.originalValue);
						const contrastRatio = Number.parseFloat(readability(baseColorRGB, testColorRGB)).toFixed(3);

						return (
							<div
								className="__docs_accessibilityInfo-testColor"
								key={`a11yColorInfo-${i}`}
							>
								<h5
									className="text--bold"
									style={{
										color: testColor.colorValues.rgba
									}}
								>
									{testColor.name}
								</h5>
								<Flex align="center">
									<FlexItem shrink>
										<ContrastBadge contrastRatio={contrastRatio} />
									</FlexItem>
								</Flex>
							</div>
						);
					})
				}
			</div>
		</div>
	);
};

export default AccessibilityInfo;
