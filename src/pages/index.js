import React from "react"
import Link from "gatsby-link"

class IndexPage extends React.PureComponent {
	render() {
		const {
			data,
			...other
		} = this.props;

		return (
			<div>
				{data.allMarkdownRemark.edges.map(({ node }) =>
					<div>
						<Link
							to={node.fields.slug}
						>

							{node.frontmatter.title}
						</Link>
					</div>
				)}
			</div>
		);
	}
}

export const query = graphql`
	query indexQuery {
		allMarkdownRemark {
			totalCount
			edges {
				node {
					frontmatter {
						title
					}
					fields {
						slug
					}
				}
			}
		}
	}
`;

export default IndexPage;
