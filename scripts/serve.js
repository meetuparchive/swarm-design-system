import browserSync from 'metalsmith-browser-sync';
import {
	metalsmithBuild,
	handleBuild
} from './_base';

metalsmithBuild
	.use(browserSync({ // uses root-relative paths
		server: './build',
		files: [
			'./src/**/**.*',
		]
	}))
	.build(handleBuild);
