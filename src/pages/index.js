import React from 'react';
import Link from 'gatsby-link';

import Bounds from 'meetup-web-components/lib/layout/Bounds';
import Card from 'meetup-web-components/lib/layout/Card';
import Flex from 'meetup-web-components/lib/layout/Flex';
import FlexItem from 'meetup-web-components/lib/layout/FlexItem';
import Chunk from 'meetup-web-components/lib/layout/Chunk';
import GridList from 'meetup-web-components/lib/layout/GridList';
import Section from 'meetup-web-components/lib/layout/Section';
import Stripe from 'meetup-web-components/lib/layout/Stripe';

const OverviewCard = (props) => (
	<Card className="display--flex flex--column">
		<div className="chunk">
			<div className={`__docs_landingCardIllo __docs_landingCardIllo--${props.category} keepAspect keepAspect--2-1`}></div>
		</div>
		<div className="chunk">
			<h3 className="text--big">{props.category}</h3>
		</div>
		<div className="chunk">
			<p>{props.blurb}</p>
		</div>
		<div className="chunk __docs_flexMarginAlign--bottom">
			<Link to={props.link} className="button button--fullWidth">{props.linkText}</Link>
		</div>
	</Card>
);

const UseCase = (props) => (
	<div className="padding--all">
		<Chunk className="padding--left padding--right">
			<h4 className="text--sectionTitle">{props.user}</h4>
		</Chunk>
		<Chunk className="padding--left padding--right">
			<div className="runningText">
				{props.blurb}
			</div>
		</Chunk>
	</div>
);

const IndexPage = () => (
	<div>
		<Stripe inverted className='border--none'>
			<Bounds>
				<Section className='border--none'>
					<div className="__docs_landingHeader">
						<h1 className="__docs_text--displayHero">Swarm <br /> Design System</h1>
						<div className="runningText">
							<p><span className="text--bold">What is it for?</span> We’re aiming to shift the focus from design and development to managing and marketing a design system. As we develop a single underlying system that allows for a unified experience across platforms and device sizes, we create a living ecosystem for product teams to ship a consistent user experience.</p>
						</div>
					</div>
				</Section>
			</Bounds>
		</Stripe>
		<Stripe>
			<Bounds>
				<Section className='border--none'>
					<GridList
						autoHeightWithWrap
						columns={{
							default: 1,
							medium: 2,
							large: 4
						}}
						items={[
							<OverviewCard
								category='Brand'
								blurb='Information about the Meetup brand including our mission, voice and tone, and brand assets.'
								link='/brand'
								linkText='Learn more'
							/>,
							<OverviewCard
								category='Content'
								blurb='Guidelines on the tone of voice to personify the brand and personality of Meetup, while keeping the product easy to navigate and understand.'
								link='/guidelines'
								linkText='Review guidelines'
							/>,
							<OverviewCard
								category='Design'
								blurb='Guidelines for product design at Meetup. Includes our design team’s processes and principles as well as visual design details'
								link='/design'
								linkText='Start designing'
							/>,
							<OverviewCard
								category='Web Components'
								blurb='A set of UI components ready for use by designers and engineers to quickly ship new products and features.'
								link='/components'
								linkText='Get components'
							/>,
						]}
						className='__docs_overviewCards'
					/>
				</Section>

				<Section className='border--none'>
					<Chunk className='align--center'>
						<h2 className="text--sectionTitle">Who is it for?</h2>
					</Chunk>
					<Chunk>
						<GridList
							autoHeightWithWrap
							className='flush--left flush--right __docs_whoFor'
							columns={{
								default: 1,
								medium: 2
							}}
							items={[
								<UseCase
									user='Designers'
									blurb={
										<div>
											<p>Guidelines to learn the Meetup product design patterns and principles</p>
											<p>Components section to familiarize with the existing components to be incorporated into designs</p>
										</div>
									}
								/>,
								<UseCase
									user='Writers, Producers, and Transcreators'
									blurb={
										<div>
											<p>Guidelines to learn the Meetup brand and content style</p>
											<p>Examples of tone of voice to personify the brand and personality of Meetup, while keeping the product easy to navigate and understand</p>
										</div>
									}
								/>,
								<UseCase
									user='Engineers'
									blurb={
										<div>
											<p>Accessibility, internationalization, and platform engineering guidelines</p>
											<p>Documentation for using design-ready, stable components and tools</p>
										</div>
									}
								/>,
								<UseCase
									user='Product Managers'
									blurb={
										<div>
											<p>Save time and ship faster by knowing all Meetup product design and development patterns and principles</p>
											<p>Understand the design and development process at Meetup at a glance</p>
											<p>Resource for creating within an existing component base to increase speed and agility</p>
										</div>
									}
								/>
							]}
						/>
					</Chunk>
				</Section>

				<Section hasSeparator className='border--none'>
					<Flex
						direction='column'
						switchDirection='large'
					>
						<FlexItem>
							<Chunk className='align--center atLarge_align--left'>
								<h2 className="text--sectionTitle">What does success look like?</h2>
							</Chunk>
							<div className="runningText __docs_bounds--runningText">
								<Chunk>
									<p>We create a visual language and content style guide that utilizes classic principles of good design with the ease of modern user interfaces, creating a consistent system for designers, writers, and engineers to actually use. Our design system records solutions to common design and development tasks to help us ship faster while avoiding bugs, technical debt.</p>
									<p><span className="text--bold">Bottom line:</span> Our value is realized when products ship features using part of our design system.</p>
								</Chunk>
							</div>
						</FlexItem>
						<FlexItem>
							<GridList
								autoHeightWithWrap
								className='flush--left'
								columns={{
									default: 1,
									large: 2
								}}
								items={[
									<Card className="display--flex flex--column">
										<h3 className="text--big margin--bottom">Quantitative</h3>
										<div className="runningText chunk">
											<p>20% less UI defects filed in `mup-web`</p>
											<p>Adoption of SDS tools</p>
											<p>Diversity of pull requests to SDS projects</p>
											<p>30% less lines of custom CSS in `mup-web`</p>
										</div>
									</Card>,
									<Card className="display--flex flex--column">
										<h3 className="text--big margin--bottom">Design feedback</h3>
										<div className="runningText chunk">
											<p>How much time are we spending on visual defects during design review?</p>
											<p>Are there less pain points with designing and building the UX layer of Meetup?</p>
										</div>
									</Card>
								]}
							/>
						</FlexItem>
					</Flex>
				</Section>
			</Bounds>
		</Stripe>
	</div>
);

export default IndexPage;
