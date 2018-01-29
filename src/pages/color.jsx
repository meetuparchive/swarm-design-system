import React from 'react';
import Helmet from 'react-helmet';
import iframeResizer from 'iframe-resizer'; // iframe does not resize if this is not imported here

import ColorListing from '../components/color/ColorListing';
import colorAttributes from 'swarm-constants/dist/js/colorAttributes';

import '../../static/assets/graphik.css';
import '../../scss/main.scss';

const ColorPage = (location) => {
	return (
		<div>
			<Helmet
				title="Swarm Design System - Colors"
				meta={[
					{ name: 'description', content: 'A dynamically generated list of colors used by Meetup\'s design team' }
				]}
			/>
			<ColorListing />
		</div>
	);
};

export default ColorPage;
