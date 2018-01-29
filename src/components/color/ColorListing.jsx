import React from 'react';

import Bounds from 'meetup-web-components/lib/layout/Bounds';
import Stripe from 'meetup-web-components/lib/layout/Stripe';
import Section from 'meetup-web-components/lib/layout/Section';

import ColorCategory from './ColorCategory';
import colorAttributes from 'swarm-constants/dist/js/colorAttributes';

const ColorListing = () => {
	const colorArr = colorAttributes;
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
						<Stripe key={`categorizedColors-${i}`} className="border--none __docs_colorListingContainer">
							<Section
								hasSeparator
								className="border--none flush--left flush--right"
							>
								<Bounds className="__docs_bounds--runningText">
									<h3 className="text--sectionTitle">{category}</h3>
								</Bounds>
								<ColorCategory key={category} category={categorizedColors[category]} />
							</Section>
						</Stripe>
					);
				})
			}
		</div>
	);
};

export default ColorListing;
