import React from 'react';

import Stripe from 'meetup-web-components/lib/layout/Stripe';

class DocsPage extends React.PureComponent {
	render() {
		const {
			data,
		} = this.props;

		const docsContent = data.markdownRemark;

		return (
			<Stripe
				collection
				className='__docs_height--full __docs_height--fullVH display--flex __docs_fullVHIframeContainer'
			>
				<div className='contentContainer' dangerouslySetInnerHTML={{ __html: docsContent.html }} />
			</Stripe>
		);
	}
}

export const query = graphql`
	query docsContentQuery_noCard($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
			}
		}
		allMarkdownRemark(sort: { fields: [frontmatter___order], order: ASC }) {
			edges {
				node {
					frontmatter {
						title
					}
					fields {
						slug
					}
				}
			}
		}
	}
`;

export default DocsPage;
