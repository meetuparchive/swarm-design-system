import React from 'react';

import Stripe from 'meetup-web-components/lib/layout/Stripe';
import Section from 'meetup-web-components/lib/layout/Section';

import ColorCategory from './ColorCategory';

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
						<Stripe key={`categorizedColors-${i}`} className="border--none">
							<Section
								hasSeparator
								className="border--none flush--left flush--right"
							>
								<h3 className="text--sectionTitle margin--left margin--right">{category}</h3>
								<ColorCategory category={categorizedColors[category]} />
							</Section>
						</Stripe>
					);
				})
			}
		</div>
	);
};

export default ColorListing;
