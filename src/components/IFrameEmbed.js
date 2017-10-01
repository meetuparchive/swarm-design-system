import React from 'react';
import PropTypes from 'prop-types';
import iFrameResize from '../utils/iframe-resize';

class IFrameEmbed extends React.Component {

	componentDidMount() {
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
		/*
			:TODO: add `scrolling="no"` once all iframes are fixed
		*/
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
