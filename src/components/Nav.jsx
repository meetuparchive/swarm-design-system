import React from 'react';
import Link, {withPrefix} from 'gatsby-link';

import cx from 'classnames';

import Chunk from 'meetup-web-components/lib/layout/Chunk';
import Dropdown from 'meetup-web-components/lib/interactive/Dropdown';
import Flex from 'meetup-web-components/lib/layout/Flex';
import FlexItem from 'meetup-web-components/lib/layout/FlexItem';
import Section from 'meetup-web-components/lib/layout/Section';
import Stripe from 'meetup-web-components/lib/layout/Stripe';
import {Tabs, TabsTab} from 'meetup-web-components/lib/interactive/Tabs';

import logo from '../../static/assets/swarmLogo.svg';

class Nav extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			dropdownToggled: false
		};

		this.toggleDropdownNav = this.toggleDropdownNav.bind(this);
	}

	toggleDropdownNav() {
		this.setState(() => ({ dropdownToggled: !this.state.dropdownToggled }));
	}

	render() {
		const {
			categories,
			location,
		} = this.props;

		const currentPath = location.pathname;
		const isLandingPage = currentPath === withPrefix('') || currentPath === withPrefix('/');
		const pathRegex = new RegExp(withPrefix('/'), 'g');
		const cleanedCurrentPath = currentPath.replace(pathRegex ,'');
		const topLevelCategories = Object.keys(categories).filter(Boolean).reverse();
		const navDropdownTrigger = (
			<div className="margin--right text--big">☰</div>
		);
		const navDropdownContent = (
			<ul className="list padding--top">
			{
				topLevelCategories.map((category) => {
					const categoryLink = `/${category.toLowerCase()}`;
					const isSelected = cleanedCurrentPath.toUpperCase().includes(category.toUpperCase());

					return (
						category.toUpperCase() !== 'RESOURCES' &&
							<li
								className={cx(
									'list-item padding--left padding--right',
									{'text--bold': isSelected}
								)}
								onClick={this.toggleDropdownNav}
							>
								<Chunk>
									<Link to={`${categoryLink}`}>{category}</Link>
								</Chunk>
							</li>
					);
				})}
			</ul>
		);

		return (
			<Stripe
				collection={!isLandingPage}
				inverted={isLandingPage}
			>

				<Section hasSeparator className="border--none">
					<Flex
						wrap
						align="center"
						justify="spaceBetween"
						direction="column"
						switchDirection="medium"
					>
						<FlexItem>
							<Chunk>
								<Flex align="center">
									<FlexItem
										shrink
										className="display--block atMedium_display--none"
									>
										<Dropdown
											noPortal
											align="left"
											isActive={this.state.dropdownToggled}
											manualToggle={this.toggleDropdownNav}
											trigger={navDropdownTrigger}
											content={navDropdownContent}
										/>
									</FlexItem>
									<FlexItem className="flush--left">
										<Flex
											align="center"
											rowReverse="medium"
										>
											{ !isLandingPage &&
												<FlexItem>
													{ /*
														:TODO:
														Hide with matchMedia instead?
													*/ }
													<h1 className="text--pageTitle display--none atMedium_display--block"><Link to="/">Swarm Design System</Link></h1>
													<h1 className="text--pageTitle display--block atMedium_display--none"><Link to="/">SDS</Link></h1>
												</FlexItem>
											}
											<FlexItem
												shrink
												className="__docs_logoWrapper"
											>
												<Link to="/">
													<img src={logo} alt="Meetup logo" className="media--l" />
												</Link>
											</FlexItem>
										</Flex>
									</FlexItem>
								</Flex>
							</Chunk>
						</FlexItem>
						<FlexItem shrink className="flush--left span--100 atMedium_width--auto display--none atMedium_display--block">
							<Chunk>
								<Tabs noBorder>
									{
										topLevelCategories.map((category) => {
											const categoryLink = `/${category.toLowerCase()}`;

											return (
												category.toUpperCase() !== 'RESOURCES' &&
													<TabsTab isSelected={cleanedCurrentPath.toUpperCase().includes(category.toUpperCase())}><Link to={`${categoryLink}`}>{category}</Link></TabsTab>
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
