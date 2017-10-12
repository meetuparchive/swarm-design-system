import React from 'react';
import Link from 'gatsby-link';

import Chunk from 'meetup-web-components/lib/layout/Chunk';
import Flex from 'meetup-web-components/lib/layout/Flex';
import FlexItem from 'meetup-web-components/lib/layout/FlexItem';
import InlineBlockList from 'meetup-web-components/lib/layout/InlineBlockList';
import Section from 'meetup-web-components/lib/layout/Section';
import Stripe from 'meetup-web-components/lib/layout/Stripe';

const Footer = () => (
	<Stripe inverted>
		<Section>
			<Flex
				align='bottom'
			>
				<FlexItem>
					<Chunk>
						<img alt='Meetup home' src='https://meetup.atlassian.net/s/lhtk5w/b/c/6e3b32004e275dd668e679b828ec105b/_/jira-logo-scaled.png' />
					</Chunk>
					<Chunk>
						<p>Last updated <span className='text--bold'>Jan 01 2018, 6:00 PM</span></p>
					</Chunk>
				</FlexItem>

				<FlexItem shrink>
					<InlineBlockList
						items={[
							<Chunk>
								<a href='mailto:designsystems@meetup.com' className='link'>Submit feedback</a>
							</Chunk>,
							<Chunk>
								<Link to="/resources" className='link'>Design system resources</Link>
							</Chunk>
						]}
					/>
				</FlexItem>
			</Flex>
		</Section>
	</Stripe>
);

export default Footer;
