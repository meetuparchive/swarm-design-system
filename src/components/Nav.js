import React from 'react';
import Link from 'gatsby-link';

import Chunk from 'meetup-web-components/lib/layout/Chunk';
import Flex from 'meetup-web-components/lib/layout/Flex';
import FlexItem from 'meetup-web-components/lib/layout/FlexItem';
import Section from 'meetup-web-components/lib/layout/Section';
import Stripe from 'meetup-web-components/lib/layout/Stripe';
import {Tabs, TabsTab} from 'meetup-web-components/lib/interactive/Tabs';

class Nav extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			showNav: true
		};

		this.toggleNav = this.toggleNav.bind(this);
	}

	toggleNav() {
		this.setState({
			showNav: !this.state.showNav
		});
	}

	render() {
		const {
			categories,
			location,
		} = this.props;

		const currentPath = location.pathname;
		const isLandingPage = currentPath === '/';

		return (
			<Stripe
				collection={!isLandingPage}
				inverted={isLandingPage}
			>

				<Section className="border--none">
					<Flex
						wrap
						align="center"
						justify="spaceBetween"
						direction="column"
						switchDirection="medium"
					>
						<FlexItem> { /* shrink */ }
							<Flex align="center">
								<FlexItem
									shrink
									className="display--block atMedium_display--none"
								>
									<Chunk
										onClick={this.toggleNav}
									>
										☰
									</Chunk>
								</FlexItem>
								<FlexItem className="flush--left">
									<Flex
										align="center"
										rowReverse="medium"
									>
										{ !isLandingPage &&
											<FlexItem>
												<Chunk>
													{ /*
														:TODO:
														Instead of hiding/showing with classes, hide/show using the HOC, withMatchMedia
													*/ }
													<h1 className="text--pageTitle display--none atMedium_display--block">Swarm Design System</h1>
													<h1 className="text--pageTitle display--block atMedium_display--none">SDS</h1>
												</Chunk>
											</FlexItem>
										}
										<FlexItem
											shrink
											className="__docs_logoWrapper"
										>
											<Chunk><Link to="/">
												<img src="/assets/swarmLogo.svg" alt="M" />
											</Link></Chunk>
										</FlexItem>
									</Flex>
								</FlexItem>
							</Flex>
						</FlexItem>
						<FlexItem
							shrink
							className="js_mainNav flush--left display--none atMedium_display--block"
						>
							<Chunk>
								<Tabs noBorder>
									{
										Object.keys(categories).map((category, index) => {
											const categoryLink = categories[category][''][0].node.fields.slug; // :TODO: fix this hack. All it does is link to the first page instead of creating a proper route for the top-level category

											return (
												category.toUpperCase() !== 'RESOURCES' &&
													<TabsTab isSelected={currentPath.includes(category)}><Link to={`${categoryLink}`}>{category}</Link></TabsTab>
											);
										})
									}
								</Tabs>
							</Chunk>
						</FlexItem>

					</Flex>

				</Section>
			</Stripe>
		);
	}
}

export default Nav;
