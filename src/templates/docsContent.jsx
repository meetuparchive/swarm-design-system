import React from 'react';
import Link, {withPrefix} from 'gatsby-link';
import cx from 'classnames';
import Parser from 'html-react-parser';

import AccordionPanelGroup from 'meetup-web-components/lib/interactive/AccordionPanelGroup';
import AccordionPanel from 'meetup-web-components/lib/interactive/AccordionPanel';
import Bounds from 'meetup-web-components/lib/layout/Bounds';
import Card from 'meetup-web-components/lib/layout/Card';
import Chunk from 'meetup-web-components/lib/layout/Chunk';
import Flex from 'meetup-web-components/lib/layout/Flex';
import FlexItem from 'meetup-web-components/lib/layout/FlexItem';
import Section from 'meetup-web-components/lib/layout/Section';
import Stripe from 'meetup-web-components/lib/layout/Stripe';

import IFrameEmbed from '../components/IFrameEmbed';
import FeedbackSection from '../components/FeedbackSection';
import parseCategoryData from '../utils/parseCategoryData.js';

class DocsPage extends React.PureComponent {

	render() {
		const {
			data,
			pathContext
		} = this.props;

		const docsContent = data.markdownRemark;
		const docCategories = parseCategoryData(data.allMarkdownRemark.edges);

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
			<Bounds className='__docs_bounds--superWide'>

				<Flex
					noGutters
					direction='column'
					switchDirection='medium'
				>

					<FlexItem growFactor={1}>

						{ /*
							:TODO:
							Hide with matchMedia instead?
						*/ }
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
					}
				}
			}
		}
	}
`;

export default DocsPage;
