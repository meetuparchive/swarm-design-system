import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Flex from 'meetup-web-components/lib/layout/Flex';
import FlexItem from 'meetup-web-components/lib/layout/FlexItem';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

import '../../static/assets/graphik.css';
import '../../scss/main.scss';

class TemplateWrapper extends React.PureComponent {
	constructor(props) {
		super(props);

		this.getSubtopicLinks = this.getSubtopicLinks.bind(this);
	}

	/**
	 * @returns {Object} an object that describes the content of the category
	 * @param {Object} category - the top-level category to get subtopic links for
	 *
	 */
	getSubtopicLinks(category) {
		const subtopicLinks = category.reduce((acc, curr) => {
			acc[curr.node.fields.subDir] = acc[curr.node.fields.subDir] || [];
			acc[curr.node.fields.subDir].push(curr);

			return acc;
		}, Object.create(null));

		return subtopicLinks;
	}

	render() {
		const {
			children,
			data,
			location
		} = this.props;

		const docsArr = data.allMarkdownRemark.edges;
		const docCategories = docsArr.reduce((acc, curr) => {
			let newObj;

			docsArr.reduce((acc, curr) => {
				acc[curr.node.fields.topLevelDir] = acc[curr.node.fields.topLevelDir] || [];
				acc[curr.node.fields.topLevelDir].push(curr);

				newObj = acc;
				return newObj;
			}, Object.create(null));

			Object.keys(newObj).forEach((category, index) => {
				newObj[category] = this.getSubtopicLinks(newObj[category]);
			});

			return newObj;
		}, Object.create(null));

		return(
			<div>
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
