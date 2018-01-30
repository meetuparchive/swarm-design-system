import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../../static/assets/graphik.css';
import '../../scss/main.scss';

const iconSpriteStyle = { display: 'none' };
const iconSprite = require('raw-loader!swarm-icons/dist/sprite/sprite.inc');

class TemplateWrapper extends React.PureComponent {

	render() {
		const {
			children
		} = this.props;

		return(
			<div>
				<div style={iconSpriteStyle} dangerouslySetInnerHTML={{__html: iconSprite}} />
				<Helmet
					title="Swarm Design System"
					meta={[
						{ name: 'description', content: 'Guidelines and documentation about designing products at Meetup HQ' }
					]}
				/>

				{children()}

			</div>
		);
	}

};

TemplateWrapper.propTypes = {
	children: PropTypes.func,
};

export default TemplateWrapper;
