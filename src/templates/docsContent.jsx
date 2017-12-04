import React from 'react';
import Link, {withPrefix} from 'gatsby-link';

import Parser from 'html-react-parser';

import cx from 'classnames';
import IFrameEmbed from '../components/IFrameEmbed';
import FeedbackSection from '../components/FeedbackSection';

import Bounds from 'meetup-web-components/lib/layout/Bounds';
import Card from 'meetup-web-components/lib/layout/Card';
import Chunk from 'meetup-web-components/lib/layout/Chunk';
import Flex from 'meetup-web-components/lib/layout/Flex';
import FlexItem from 'meetup-web-components/lib/layout/FlexItem';
import Section from 'meetup-web-components/lib/layout/Section';
import Stripe from 'meetup-web-components/lib/layout/Stripe';

class DocsPage extends React.PureComponent {
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
			data,
			pathContext
		} = this.props;

		const docsContent = data.markdownRemark;
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

		const parserOptions = {
			replace: (domNode) => {
				if (domNode.name === 'iframe') {
					const { src, id } = domNode.attribs;
					return (
						<IFrameEmbed id={id && id} src={src} />
					);
				}
				if (domNode.name === 'img') {
					const { src, alt, title } = domNode.attribs;
					const hasNoPathPrefix = withPrefix('') === '/';
					const cleanedSrc = hasNoPathPrefix ? `${withPrefix('')}${src.substr(src.indexOf('/') + 1)}` : `${withPrefix('')}${src}`;

					return (
						<img src={cleanedSrc} alt={alt} title={title} />
					);
				}
			}
		};

		const CategoryLinks = (props) => {
			return (
				<ul>
					{
						Object.keys(props.category).map((category, i) => {
							const linkList = props.category[category].map((link, i) => {
								return(
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
							});

							return(
								<li>
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
										<Section
											hasSeparator
											className='border--none'
										>
											<Bounds className='runningText __docs_bounds--runningText'>
												<Chunk>
													<div className='contentContainer'>
														{ Parser(docsContent.html, parserOptions) }
													</div>
												</Chunk>
											</Bounds>
										</Section>
										<FeedbackSection />
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
