import React from 'react';
import Link from 'gatsby-link';

import cx from 'classnames';

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
			pathContext
		} = this.props;



		const docsContent = data.markdownRemark;
		const docsArr = data.allMarkdownRemark.edges;

		const docCategories = docsArr.reduce((acc, curr) => {
			acc[curr.node.fields.topLevelDir] = acc[curr.node.fields.topLevelDir] || [];
			acc[curr.node.fields.topLevelDir].push(curr);

			return acc;
		}, Object.create(null));

		const CategoryLinks = (props) => {
			const linkArray = props.category;

			return (
				<ul>
					{
						linkArray.map((link, i) => {
							return (
								<li
									className={cx(
										{['text--bold']: pathContext.slug == link.node.fields.slug}
									)}
								>
									<Chunk>
										<Link to={link.node.fields.slug}>{link.node.frontmatter.title}</Link>
									</Chunk>
								</li>
							);
						})
					}
				</ul>
			);
		};

		return (
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
								{
									Object.keys(docCategories).map((category, index) => {
										return(
											category == pathContext.topLevelDir &&
												<div>
													<Chunk>
														<h3 className="text--sectionTitle">{category}</h3>
													</Chunk>
													<Chunk>
														<CategoryLinks category={docCategories[category]} />
													</Chunk>
												</div>
										);
									})
								}
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
												<div className='contentContainer' dangerouslySetInnerHTML={{ __html: docsContent.html }} />
											</Bounds>
										</Section>
									</Card>
								</Chunk>
							</Section>
						</Stripe>
					</FlexItem>

				</Flex>

			</Bounds>
		);
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
