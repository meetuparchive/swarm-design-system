const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { toTitleCase } = require('./src/utils/toTitleCase.js');

const getSlugParents = (slug) => {
	const slugParentString = slug.substring(1, slug.length-1);
	return slugParentString.split('/');
};

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
	const { createNodeField } = boundActionCreators;

	if (node.internal.type === 'MarkdownRemark') {
		const slug = createFilePath({ node, getNode, basePath: 'pages' });
		const slugParentsArr = getSlugParents(slug);

		createNodeField({
			node,
			name: 'slug',
			value: slug,
		});

		createNodeField({
			node,
			name: 'topLevelDir',
			value: toTitleCase(slugParentsArr[0]),
		});

		createNodeField({
			node,
			name: 'subDir',
			value: toTitleCase(slugParentsArr.length > 2 ? slugParentsArr[1] : ''),
		});
	}
};

exports.createPages = ({ graphql, boundActionCreators }) => {
	const { createPage, createRedirect } = boundActionCreators;

	return new Promise((resolve, reject) => {
		graphql(`{
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							isLanding
						}
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
				const layoutPath = (
					node.fields.slug.match(/^\/resources/) || node.fields.slug.match(/^\/components/)
				) ? './src/templates/docsContent_noSubnav.jsx' : './src/templates/docsContent.jsx';

				if(node.frontmatter.isLanding) {
					createRedirect({
						fromPath: `/${getSlugParents(node.fields.slug)[0]}`,
						redirectInBrowser: true,
						toPath: node.fields.slug,
					})
				}

				createPage({
					path: node.fields.slug,
					component: path.resolve(layoutPath),
					context: {
						// Data passed to context is available in page queries as GraphQL variables.
						slug: node.fields.slug,
						topLevelDir: node.fields.topLevelDir,
						subDir: node.fields.subDir,
					},
				});
			});
			resolve();
		});
	});
};

exports.onCreatePage = async ({ page, boundActionCreators }) => {
	const { createPage } = boundActionCreators;

	return new Promise((resolve, reject) => {
		if (page.path.match(/^\/color/)) {

			page.layout = 'noNav';

			createPage(page);
		}

		resolve();
	});
};
