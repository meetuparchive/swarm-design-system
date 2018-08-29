import React from "react";

import Bounds from "meetup-web-components/lib/layout/Bounds";

const FeedbackSection = () => (
	<div className="__docs_giveFeedback padding--all flush--bottom">
		<Bounds className="runningText __docs_bounds--runningText">
			<h3 className="text--sectionTitle">Give feedback</h3>
			<p className="flush--bottom">
				If this page is missing something or if you'd like to make an
				edit, you can:
			</p>
			<ul>
				<li>
					open a PR in the{" "}
					<a
						href="https://github.com/meetup/swarm-design-system"
						title="Swarm Design System"
					>
						Swarm Design System repo
					</a>
				</li>
				<li>file a ticket in JIRA</li>
				<li>
					send us a message in the <strong>#web-platform-ask</strong>{" "}
					Slack channel in Meetup's Slack team
				</li>
			</ul>
		</Bounds>
	</div>
);

export default FeedbackSection;
