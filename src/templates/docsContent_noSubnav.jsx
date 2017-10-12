import React from 'react';

import Bounds from 'meetup-web-components/lib/layout/Bounds';
import Card from 'meetup-web-components/lib/layout/Card';
import Chunk from 'meetup-web-components/lib/layout/Chunk';
import Section from 'meetup-web-components/lib/layout/Section';
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
				className='__docs_height--full'
			>
				<Bounds narrow>
					<Section
						hasSeparator
						className='border--none'
					>
						<Chunk>
							<Card className='__docs_contentContainer __docs_contentContainer--carded'>
								<Section>
									<Bounds className='runningText __docs_bounds--runningText'>
										<div className='contentContainer' dangerouslySetInnerHTML={{ __html: docsContent.html }} />
									</Bounds>
								</Section>
							</Card>
						</Chunk>
					</Section>
				</Bounds>
			</Stripe>
		);
	}
}

export const query = graphql`
	query docsContentQuery_noNav($slug: String!) {
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
