import React from 'react';
import PropTypes from 'prop-types';

class IFrameEmbed extends React.Component {

	componentDidMount() {
		// This has to happen after mount so GH Pages deployment doesn't fail
		// because it doesn't have `window`
		const iFrameResize = require('../utils/iframe-resize');

		iFrameResize(
			{
				checkOrigin: false,
				heightCalculationMethod: 'max',
				log: false
			},
			this.iframe
		);
	}

	render() {
		return (
			<div style={{lineHeight: 0}}>
				<iframe
					ref={ el => this.iframe = el }
					src={this.props.src}
					id={this.props.id}
					width="100%"
					frameBorder={0}>
				></iframe>
			</div>
		);
	}

}

IFrameEmbed.propTypes = {
	id: PropTypes.string,
	src: PropTypes.string
};

export default IFrameEmbed;
