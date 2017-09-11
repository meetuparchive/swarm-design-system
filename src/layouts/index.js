import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Flex from 'meetup-web-components/lib/layout/Flex';
import FlexItem from 'meetup-web-components/lib/layout/FlexItem';
import Section from 'meetup-web-components/lib/layout/Section';
import Stripe from 'meetup-web-components/lib/layout/Stripe';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

import '../../scss/main.scss';

class TemplateWrapper extends React.PureComponent {
	render() {
		const {
			children,
			data,
			location,
			...other
		} = this.props;

		const docsArr = data.allMarkdownRemark.edges;

		const docCategories = docsArr.reduce((acc, curr) => {
			acc[curr.node.fields.topLevelDir] = acc[curr.node.fields.topLevelDir] || [];
			acc[curr.node.fields.topLevelDir].push(curr);

			return acc;
		}, Object.create(null));

		return(
			<div>
				<Helmet
					title="Gatsby Default Starter"
					meta={[
						{ name: 'description', content: 'Sample' },
						{ name: 'keywords', content: 'sample, something' },
					]}
				/>

				<Flex direction='column' noGutters>
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
		)
	}

};

TemplateWrapper.propTypes = {
	children: PropTypes.func,
}

export const query = graphql`
	query siteQuery {
		allMarkdownRemark {
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

export default TemplateWrapper
