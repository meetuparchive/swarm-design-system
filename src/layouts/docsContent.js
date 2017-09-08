import React from 'react'
import Link from 'gatsby-link'

const DocsSubnav = () => (
	<div class="flex-item">
		<div class="bounds __docs_bounds--superWide">
			<div class="flex flex--noGutters flex--column atMedium_flex--row">
				<div class="flex-item flex-item--1">
					<div class="stripe stripe--collection __docs_height--full"><div class="section border--none">
						<div class="chunk">
							<h3 class="text--sectionTitle">Section title goes here</h3>
						</div>
						<ul>
							<li>Subnav goes here</li>
						</ul>
					</div></div>
				</div>
				<div class="flex-item flex-item--3">
					<div class="stripe stripe--collection __docs_height--full">
						<div class="section section--hasSeparator border--none">
							<div class="chunk">
								<div class="card __docs_contentContainer __docs_contentContainer--carded">
									<div class="section border--none">
										<div class="runningText bounds __docs_bounds--runningText">
											<p>Actual content renders here</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default DocsSubnav;
