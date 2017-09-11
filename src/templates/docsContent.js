import React from 'react';
import Link from "gatsby-link"

import Bounds from 'meetup-web-components/lib/layout/Bounds';
import Card from 'meetup-web-components/lib/layout/Card';
import Chunk from 'meetup-web-components/lib/layout/Chunk';
import Flex from 'meetup-web-components/lib/layout/Flex';
import FlexItem from 'meetup-web-components/lib/layout/FlexItem';
import Section from 'meetup-web-components/lib/layout/Section';
import Stripe from 'meetup-web-components/lib/layout/Stripe';

class DocsPage extends React.PureComponent {
	render() {
		const {
			data,
			pathContext,
			...other
		} = this.props;

		const docsContent = data.markdownRemark;
		const docsArr = data.allMarkdownRemark.edges;

		const docCategories = docsArr.reduce((acc, curr) => {
			acc[curr.node.fields.topLevelDir] = acc[curr.node.fields.topLevelDir] || [];
			acc[curr.node.fields.topLevelDir].push(curr);

			return acc;
		}, Object.create(null));

		console.log(docCategories);

		return (
			<FlexItem>
				<Bounds className='__docs_bounds--superWide'>

					<Flex
						noGutters
						direction='column'
						switchDirection='medium'
					>

						<FlexItem growFactor={1}>
							<Stripe
								collection
								className='__docs_height--full'
							>
								<Section>
									<Chunk>
										<h3 className="text--sectionTitle">Section name goes here</h3>
									</Chunk>
									<Chunk>
										<ul>
										</ul>
									</Chunk>
								</Section>
							</Stripe>
						</FlexItem>

						<FlexItem growFactor={3}>
							<Stripe
								collection
								className='__docs_height--full'
							>
								<Section
									hasSeparator
									className='border--none'
								>
									<Chunk>
										<Card className='__docs_contentContainer __docs_contentContainer--carded'>
											<Section>
												<Bounds className='runningText __docs_bounds--runningText'>
													<div dangerouslySetInnerHTML={{ __html: docsContent.html }} />
												</Bounds>
											</Section>
										</Card>
									</Chunk>
								</Section>
							</Stripe>
						</FlexItem>

					</Flex>

				</Bounds>
			</FlexItem>
		)
	}
}

export const query = graphql`
	query docsContentQuery($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
			}
		}
		allMarkdownRemark {
			edges {
				node {
					frontmatter {
						title
					}
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

export default DocsPage;
