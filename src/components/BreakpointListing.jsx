import React from 'react';

import breakpointData from 'swarm-constants/properties/layout/breakpoints.json';

import Bounds from 'meetup-web-components/lib/layout/Bounds';
import Card from 'meetup-web-components/lib/layout/Card';
import Chunk from 'meetup-web-components/lib/layout/Chunk';
import Section from 'meetup-web-components/lib/layout/Section';

const BreakpointListing = () => {
	const { breakpoint } = breakpointData.layout;

	return(
		<Bounds className="__docs_bounds--runningText">
			<Section hasSeparator className="border--none flush--left flush--right flush--top">
				<Chunk>
					<Card
						initialHeight
						className="flush--all"
					>
						<table className="span--100 flush--bottom">
							<thead>
								<tr>
									<th>Breakpoint</th>
									<th>Viewpoort width range</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="text--bold">Medium</td>
									<td>{`${breakpoint.m.value} or larger`}</td>
								</tr>
								<tr>
									<td className="text--bold">Large</td>
									<td>{`${breakpoint.l.value} or larger`}</td>
								</tr>
								<tr>
									<td className="text--bold">Huge</td>
									<td>{`${breakpoint.xl.value} or larger`}</td>
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
