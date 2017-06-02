import browserSync from 'metalsmith-browser-sync';
import {
	metalsmithBuild,
	handleBuild
} from './_base';

metalsmithBuild
	.use(browserSync({ // uses root-relative paths
		server: './build',
		files: [                         // --- WATCH ---
			'./src/content/**/*.md',     // markdown content
			'./src/templates/**/*.*',    // layout templates
			'./src/script/site/**/*.*',  // site script
		]
	}))
	.build(handleBuild);
