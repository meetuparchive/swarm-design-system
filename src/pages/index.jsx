import React from 'react';
import Link from 'gatsby-link';

import Bounds from 'meetup-web-components/lib/layout/Bounds';
import Card from 'meetup-web-components/lib/layout/Card';
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
						<Chunk>
							<h1 className="__docs_text--displayHero">Designing for social transformation</h1>
							<div className="runningText __docs_runningText--noHyphens">
								<p className="text--big text--normal __docs_lineHeight--default">The Swarm Design System is a living ecosystem to help our teams craft online experiences to bring people together offline</p>
							</div>
						</Chunk>
						<Chunk>
							<a href="#get-started" className="button">Get started</a>
						</Chunk>
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
								category='Design'
								blurb='Guidelines for product design at Meetup. Includes our design team’s processes and principles as well as visual design details'
								link='/design'
								linkText='Start designing'
							/>,
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
								category='Web Components'
								blurb='A set of UI components ready for use by designers and engineers to quickly ship new products and features.'
								link='/components'
								linkText='Get components'
							/>,
						]}
						className='__docs_overviewCards'
					/>
				</Section>

				{ /* This content actually _does_ need to be added

				<Section className='border--none'>
					<Chunk>
						<h2 className='text--sectionTitle'>Getting started</h2>
					</Chunk>
					<Chunk className='runningText'>
						<p>Instead of rethinking the foundation of each new Meetup experience, the Swarm Design System allows teams to focus on transforming lives through new ideas and experiments. Here you’ll find resources for creating a unified, consistent experience with purpose, design guidelines, content style, and best practices for all platforms, channels, and devices, helping us to quickly create one-off tests and solutions.</p>
					</Chunk>
				</Section>
				*/ }

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

			</Bounds>
		</Stripe>
	</div>
);

export default IndexPage;
