import React from 'react';

import ColorListing from '../components/color/ColorListing';

const SupportingContent = (props) => (
	props.supportingContent === 'colorListing' &&
		<ColorListing />
);

export default SupportingContent;
