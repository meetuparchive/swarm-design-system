const path = require('path');

module.exports = {
	siteMetadata: {
		title: 'Swarm Design System'
	},
	pathPrefix: '/swarm-design-system',
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-react-helmet',
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
};
