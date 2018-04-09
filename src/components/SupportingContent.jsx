import React from 'react';

import ColorListing from '../components/color/ColorListing';
import BreakpontListing from '../components/BreakpointListing';

const SupportingContent = (props) => {
	switch (props.supportingContent) {
		case 'colorListing':
			return <ColorListing />;
		case 'breakpointListing':
			return <BreakpontListing />;
	}
};

export default SupportingContent;
