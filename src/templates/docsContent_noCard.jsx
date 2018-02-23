import React from 'react';
import Link from 'gatsby-link';
import cx from 'classnames';

import parseCategoryData from '../utils/parseCategoryData.js';

import AccordionPanelGroup from 'meetup-web-components/lib/interactive/AccordionPanelGroup';
import AccordionPanel from 'meetup-web-components/lib/interactive/AccordionPanel';
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
		const docCategories = parseCategoryData(data.allMarkdownRemark.edges);

		const CategoryLinks = (props) => {
			return (
				<ul>
					{
						Object.keys(props.category).map((category, i) => {
							const linkList = props.category[category].map((link, i) => {
								return(
									<li
										key={i}
										className={cx(
											{['text--bold']: pathContext.slug == link.node.fields.slug}
										)}
									>
										<Chunk>
											<Link to={link.node.fields.slug}>{link.node.frontmatter.title}</Link>
										</Chunk>
									</li>
								);
							});

							return(
								<li key={i}>
									{category &&
										<h3 className="text--bold text--secondary margin--bottom margin--top">{category}</h3>
									}
									<ul>{linkList}</ul>
								</li>
							);
						})
					}
				</ul>
			);
		};

		return (
			<Stripe
				collection
				className='__docs_height--full __docs_height--fullVH display--flex __docs_fullVHIframeContainer'
			>
				<Flex
					noGutters
					direction="column"
					switchDirection="medium"
					className="span--100"
				>
					<FlexItem shrink>
						<Stripe className="display--block atMedium_display--none padding--top">
							<Section className="flush--top">
								<AccordionPanelGroup
									accordionPanels={[
										<AccordionPanel
											label={`${pathContext.topLevelDir} > ${docsContent.frontmatter.title}`}
											panelContent={
												<div className="bordered">
													<CategoryLinks category={docCategories[pathContext.topLevelDir]} />
												</div>
											}
										/>
									]}
								/>
							</Section>
						</Stripe>

						<Stripe
							collection
							className='__docs_height--full display--none atMedium_display--block border--none'
						>
							<Section>
								{
									Object.keys(docCategories).map((category, i) => {
										return(
											category == pathContext.topLevelDir &&
												<div key={i}>
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
					<FlexItem>
						<div className='contentContainer span--100' dangerouslySetInnerHTML={{ __html: docsContent.html }} />
					</FlexItem>

				</Flex>
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
						topLevelDir
						subDir
					}
				}
			}
		}
	}
`;

export default DocsPage;
