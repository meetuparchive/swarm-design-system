import React from 'react';
import Helmet from 'react-helmet';

import ColorListing from '../components/ColorListing';
import colorData from '../utils/colorData';

import '../../static/assets/graphik.css';
import '../../scss/main.scss';


const ColorPage = (location) => (
	<div>
		<Helmet
			title="Swarm Design System - Colors"
			meta={[
				{ name: 'description', content: 'A dynamically generated list of colors used by Meetup\'s design team' }
			]}
		/>
		<ColorListing colors={colorData} />
	</div>

);

export default ColorPage;
