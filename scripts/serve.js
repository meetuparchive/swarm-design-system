const browserSync = require('metalsmith-browser-sync');
const metalsmithBuild = require('./_base').metalsmithBuild;
const handleBuild = require('./_base').handleBuild;

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
