import React from 'react';
import cx from 'classnames';
import tinycolor2 from 'tinycolor2';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Chunk from 'meetup-web-components/lib/layout/Chunk';
import Flex from 'meetup-web-components/lib/layout/Flex';
import FlexItem from 'meetup-web-components/lib/layout/FlexItem';
import Stripe from 'meetup-web-components/lib/layout/Stripe';
import Section from 'meetup-web-components/lib/layout/Section';

const isInverted = colorArr => {
	const brightness = tinycolor2(`rgba(${colorArr[0]},${colorArr[1]},${colorArr[2]},${colorArr[3]})`).getBrightness();
	const veryTransparent = colorArr[3] < 0.5;

	return brightness < 160 && !veryTransparent;
}

class ColorInfo extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			isCopied: false
		};

		this.setCopied = this.setCopied.bind(this);
	}

	setCopied() {
		this.setState({ isCopied: true });
		setTimeout(() => {
			this.setState({ isCopied: false })
		}, 1000);
	}

	render() {
		const {
			name,
			value,
		} = this.props;

		return (
			<CopyToClipboard
				text={value}
				onCopy={this.setCopied}
				className="_docs_cursor--pointer margin--bottom"
			>
				<Flex>
					<FlexItem shrink className="__docs_colorLabel text--secondary text--bold">{name}:</FlexItem>
					<FlexItem shrink>{value}</FlexItem>
					{this.state.isCopied &&
						<FlexItem shrink className="text--hint">Copied to clipboard</FlexItem>
					}
				</Flex>
			</CopyToClipboard>
		);
	}
};

const ColorCategory = (category) => {
	const categoryColorData = category.category;

	return (
		<div>
			{
				categoryColorData.map((colorData, i) => {
					const { rgba, hex } = colorData.colorValues;
					const { android, sass, js } = colorData.colorVarNames;
					const { originalValue } = colorData;

					return(
						<Stripe
							style={{backgroundColor: rgba}}
							className={cx({
								inverted: isInverted(originalValue)
							})}>
							<Section hasSeparator className='border--none'>
								<ColorInfo name="RGBA" value={rgba} />
								<ColorInfo name="HEX" value={hex} />
								<ColorInfo name="SASS" value={sass} />
								<ColorInfo name="JS" value={js} />
								<ColorInfo name="Android" value={android} />
							</Section>
						</Stripe>
					);
				})
			}
		</div>
	);
};

const ColorListing = (colors) => {
	const colorArr = colors.colors;
	let newObj;

	const categorizedColors = colorArr.reduce((acc, curr) => {
		acc[curr.type] = acc[curr.type] || [];
		acc[curr.type].push(curr);

		newObj = acc;
		return newObj;
	}, Object.create(null));

	return (
		<div>
			{
				Object.keys(categorizedColors).map((category, i) => {
					return (
						<Stripe className="border--none">
							<Section
								hasSeparator
								className="border--none flush--left flush--right"
							>
								<h3 className="text--sectionTitle margin--left margin--right">{category}</h3>
								<ColorCategory key={i} category={categorizedColors[category]} />
							</Section>
						</Stripe>
					);
				})
			}
		</div>
	);
};

export default ColorListing;
