import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Flex from 'meetup-web-components/lib/layout/Flex';
import FlexItem from 'meetup-web-components/lib/layout/FlexItem';

class ColorInfo extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			isCopied: false
		};

		this.setCopied = this.setCopied.bind(this);
	}

	setCopied() {
		this.setState({ isCopied: true });
		setTimeout(() => {
			this.setState({ isCopied: false });
		}, 1000);
	}

	render() {
		const {
			name,
			value,
		} = this.props;

		return (
			<CopyToClipboard
				text={value}
				onCopy={this.setCopied}
				className="_docs_cursor--pointer margin--bottom"
			>
				<Flex>
					<FlexItem shrink className="__docs_colorLabel text--secondary text--bold">{name}:</FlexItem>
					<FlexItem shrink className="__docs_colorValue">
						{value}
						{this.state.isCopied &&
							<div className="text--hint __docs_colorCopyNotif wrap--singleLine">Copied to clipboard</div>
						}
					</FlexItem>
				</Flex>
			</CopyToClipboard>
		);
	}
};

export default ColorInfo;
