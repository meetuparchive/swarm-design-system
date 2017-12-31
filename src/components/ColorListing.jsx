import React from 'react';

import Chunk from 'meetup-web-components/lib/layout/Chunk';
import Flex from 'meetup-web-components/lib/layout/Flex';
import FlexItem from 'meetup-web-components/lib/layout/FlexItem';
import Stripe from 'meetup-web-components/lib/layout/Stripe';
import Section from 'meetup-web-components/lib/layout/Section';

const ColorCategory = (category) => {
	const categoryColorData = category.category;
	return (
		<Chunk>
			{
				categoryColorData.map((colorData, i) => {
					const {rgba, hex, iOS} = colorData.colorValue;
					return(
						<Stripe style={{backgroundColor: rgba}} inverted>
							<Section hasSeparator className='border--none'>
								<Flex>
									<FlexItem shrink className="__docs_colorLabel">RGBA:</FlexItem>
									<FlexItem>{rgba}</FlexItem>
								</Flex>
								<Flex>
									<FlexItem shrink className="__docs_colorLabel">HEX:</FlexItem>
									<FlexItem>{hex}</FlexItem>
								</Flex>
								<Flex>
									<FlexItem shrink className="__docs_colorLabel">iOS:</FlexItem>
									<FlexItem>{iOS}</FlexItem>
								</Flex>
							</Section>
						</Stripe>
					);
				})
			}
		</Chunk>
	);
};

const ColorListing = (colors) => {
	const parseColorData = (data) => {
		let newObj;

		Object.keys(data).reduce((previous, key) => {
			previous[key] = data[key] || [];
			newObj = previous;
			return newObj;
		}, {});

		return newObj;
	};

	const categorizedColors = parseColorData(colors.colors);

	return (
		<div>
			{
				Object.keys(categorizedColors).map((category, i) => {
					return (
						<div>
							<h3 className="text--sectionTitle">{category}</h3>
							<ColorCategory key={i} category={categorizedColors[category]} />
						</div>
					);
				})
			}
		</div>
	);
};

export default ColorListing;
