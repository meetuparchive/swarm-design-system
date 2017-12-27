import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Flex from 'meetup-web-components/lib/layout/Flex';
import FlexItem from 'meetup-web-components/lib/layout/FlexItem';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

import parseCategoryData from '../utils/parseCategoryData.js';

import '../../static/assets/graphik.css';
import '../../scss/main.scss';

const iconSpriteStyle = { display: 'none' };
const iconSprite = require('raw-loader!swarm-icons/dist/sprite/sprite.inc');

class TemplateWrapper extends React.PureComponent {

	render() {
		const {
			children,
			data,
			location
		} = this.props;

		const docCategories = parseCategoryData(data.allMarkdownRemark.edges);

		return(
			<div>
				<div style={iconSpriteStyle} dangerouslySetInnerHTML={{__html: iconSprite}} />
				<Helmet
					title="Swarm Design System"
					meta={[
						{ name: 'description', content: 'Guidelines and documentation about designing products at Meetup HQ' }
					]}
				/>

				<Flex
					noGutters
					direction='column'
					style={{minHeight: '100vh'}}>
					<FlexItem shrink>
						<Nav categories={docCategories} location={location} />
					</FlexItem>

					<FlexItem>
						{children()}
					</FlexItem>

					<FlexItem shrink>
						<Footer />
					</FlexItem>
				</Flex>

			</div>
		);
	}

};

TemplateWrapper.propTypes = {
	children: PropTypes.func,
};

export const query = graphql`
	query siteQuery {
		allMarkdownRemark(sort: { fields: [frontmatter___order], order: ASC }) {
			edges {
				node {
					fields {
						slug
						topLevelDir
						subDir
					}
				}
			}
		}
	}
`;

export default TemplateWrapper;
