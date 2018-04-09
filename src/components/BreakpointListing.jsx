import React from 'react';

import Bounds from 'meetup-web-components/lib/layout/Bounds';
import Card from 'meetup-web-components/lib/layout/Card';
import Chunk from 'meetup-web-components/lib/layout/Chunk';
import Section from 'meetup-web-components/lib/layout/Section';

const BreakpointListing = () => {
	return(
		<Bounds className="__docs_bounds--runningText">
			<Section hasSeparator className="border--none flush--left flush--right flush--top">
				<Chunk>
					<Card
						initialHeight
						className="flush--left flush--right"
					>
						<table className="span--100">
							<tbody>
								<tr>
									<td className="text--bold">default</td>
									<td>{'< 440px'}</td>
								</tr>
								<tr>
									<td className="text--bold">small</td>
									<td>{'> 440px'}</td>
								</tr>
								<tr>
									<td className="text--bold">medium</td>
									<td>{'> 640px'}</td>
								</tr>
								<tr>
									<td className="text--bold">large</td>
									<td>{'> 840px'}</td>
								</tr>
								<tr>
									<td className="text--bold">huge</td>
									<td>{'> 1024px'}</td>
								</tr>
							</tbody>
						</table>
					</Card>
				</Chunk>
			</Section>
		</Bounds>
	);
};

export default BreakpointListing;
