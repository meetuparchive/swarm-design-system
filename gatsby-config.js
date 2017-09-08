const path = require('path');

module.exports = {
	siteMetadata: {
		title: `Gatsby Default Starter`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'categories',
				path: path.resolve('./src/content')
			},
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [],
			},
		}
	],
}
