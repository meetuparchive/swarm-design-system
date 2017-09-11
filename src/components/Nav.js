import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import Chunk from 'meetup-web-components/lib/layout/Chunk';
import Flex from 'meetup-web-components/lib/layout/Flex';
import FlexItem from 'meetup-web-components/lib/layout/FlexItem';
import Section from 'meetup-web-components/lib/layout/Section';
import Stripe from 'meetup-web-components/lib/layout/Stripe';
import {Tabs, TabsTab} from 'meetup-web-components/lib/interactive/Tabs';

class Nav extends React.PureComponent {
	render() {
		const {
			categories,
			location,
			...other
		} = this.props;

		const currentPath = location.pathname;

		return (
			<Stripe collection>

				<Section className='border--none'>
					<Flex
						flex--wrap
						align='center'
						justify='spaceBetween'
						direction='column'
						switchDirection='medium'
					>
						<FlexItem shrink>
							<Flex>
								<FlexItem shrink className='display--block atMedium_display--none'>
									<Chunk className='js_hamburger'><span>☰</span></Chunk>
								</FlexItem>
								<FlexItem>
									<Flex
										align='center'
									>
										<FlexItem
											shrink
											className='display--block atMedium_display--none'
										>
											<Chunk className='js_hamburger'><span>☰</span></Chunk>
										</FlexItem>
										<FlexItem className='flush--left'>
											<Chunk>
												<h1 className="text--pageTitle">Swarm Design System</h1>
											</Chunk>
										</FlexItem>
									</Flex>
								</FlexItem>
							</Flex>
						</FlexItem>
						<FlexItem
							shrink
							className='js_mainNav flush--left display--none atMedium_display--block'
						>
							<nav className='padding--bottom'>
								<Tabs noBorder>
									{ Object.keys(categories).map((category, index) => {
										const categoryLink = categories[category][0].node.fields.slug; // :TODO: fix this hack

										return (
											category !== 'resources' &&
												<TabsTab isSelected={currentPath.includes(category)}><Link to={`${categoryLink}`}>{category}</Link></TabsTab>
										)
									}
									)}
								</Tabs>
							</nav>
						</FlexItem>

					</Flex>

				</Section>
			</Stripe>
		);
	}
}

export default Nav;
