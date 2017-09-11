const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`);

const getSlugParents = (slug) => {
	const slugParentString = slug.substring(1, slug.length-1);
	return slugParentString.split('/');
}

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
	const { createNodeField } = boundActionCreators;

	if (node.internal.type === `MarkdownRemark`) {
		const slug = createFilePath({ node, getNode, basePath: `pages` });
		const slugParentsArr = getSlugParents(slug);

		createNodeField({
			node,
			name: `slug`,
			value: slug,
		});

		createNodeField({
			node,
			name: `topLevelDir`,
			value: slugParentsArr[0],
		});

		createNodeField({
			node,
			name: `subDir`,
			value: slugParentsArr.length > 2 ? slugParentsArr[1] : '',
		});
	}
}

exports.createPages = ({ graphql, boundActionCreators }) => {
	const { createPage } = boundActionCreators;

	return new Promise((resolve, reject) => {
		graphql(`{
			allMarkdownRemark {
				edges {
					node {
						fields {
							slug
							topLevelDir
							subDir
						}
					}
				}
			}
		}`
	).then(result => {
			result.data.allMarkdownRemark.edges.map(({ node }) => {
				createPage({
					path: node.fields.slug,
					component: path.resolve(`./src/templates/docsContent.js`),
					context: {
						// Data passed to context is available in page queries as GraphQL variables.
						slug: node.fields.slug,
						topLevelDir: node.fields.topLevelDir,
						subDir: node.fields.subDir,
					},
				});
			});
			resolve();
		})
	})
}
