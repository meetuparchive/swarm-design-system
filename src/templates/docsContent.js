import React from 'react';
import Flex from 'meetup-web-components/lib/layout/Flex';
import FlexItem from 'meetup-web-components/lib/layout/FlexItem';

class DocsPage extends React.PureComponent {
	render() {
		const {
			data,
			...other
		} = this.props;

		const docsContent = data.markdownRemark;
		return (
			<Flex><FlexItem>
				<div dangerouslySetInnerHTML={{ __html: docsContent.html }} />
			</FlexItem></Flex>
		)
	}
}

export const query = graphql`
	query docsContentQuery($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
			}
		}
	}
`;

export default DocsPage;
