import React from 'react';
import cx from 'classnames';
import tinycolor2 from 'tinycolor2';

import Bounds from 'meetup-web-components/lib/layout/Bounds';
import Button from 'meetup-web-components/lib/forms/Button';
import Chunk from 'meetup-web-components/lib/layout/Chunk';
import Flex from 'meetup-web-components/lib/layout/Flex';
import FlexItem from 'meetup-web-components/lib/layout/FlexItem';
import Stripe from 'meetup-web-components/lib/layout/Stripe';
import Section from 'meetup-web-components/lib/layout/Section';

import ColorInfo from './ColorInfo';
import AccessibilityInfo from './AccessibilityInfo';

const isInverted = colorArr => {
	const brightness = tinycolor2(`rgba(${colorArr[0]},${colorArr[1]},${colorArr[2]},${colorArr[3]})`).getBrightness();
	const veryTransparent = colorArr[3] < 0.5;

	return brightness < 160 && !veryTransparent;
};

class ColorCategory extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			showContrastInfo: false
		};

		this.toggleContrastInfo = this.toggleContrastInfo.bind(this);
	}

	toggleContrastInfo(e) {
		e.preventDefault();
		this.setState({ showContrastInfo: !this.state.showContrastInfo });
	}

	render() {
		const { category } = this.props;

		return (
			<div>
				{
					category.map((colorData, i) => {
						const { rgba, hex } = colorData.colorValues;
						const { android, sass, js } = colorData.colorVarNames;
						const { originalValue, name } = colorData;

						return(
							<Stripe
								style={{backgroundColor: rgba}}
								key={`color-${js}`}
								className={cx({
									inverted: isInverted(originalValue)
								})}>
								<Bounds className="__docs_bounds--runningText">
									<Section hasSeparator className="border--none flush--left flush--right">
										<Chunk><h3 className="text--big">{name}</h3></Chunk>
										<Flex align="bottom" justify="spaceBetween">
											<FlexItem shrink>
												<ColorInfo name="RGBA" value={rgba} />
												<ColorInfo name="HEX" value={hex} />
												<ColorInfo name="SASS" value={sass} />
												<ColorInfo name="JS" value={js} />
												<ColorInfo name="Android" value={android} />
											</FlexItem>
											<FlexItem shrink>
												<Chunk>
													<Button
														neutral
														onClick={this.toggleContrastInfo}
													>
														{`${this.state.showContrastInfo ? 'Hide' : 'Show'} color contrast info`}
													</Button>
												</Chunk>
											</FlexItem>
										</Flex>
									</Section>

									{ this.state.showContrastInfo &&
										<Section className="border--top flush--left flush--right">
											<Chunk>
												<AccessibilityInfo baseColor={originalValue} />
											</Chunk>
										</Section>
									}
								</Bounds>
							</Stripe>
						);
					})
				}
			</div>
		);
	}
};

export default ColorCategory;
