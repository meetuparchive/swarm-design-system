const MetalSmith = require('metalsmith');
const markdown = require('metalsmith-markdown-remarkable');
const layouts = require('metalsmith-layouts');

const PATH_SRC = '../src/content';
const PATH_DEST = '../build';
const PATH_TEMPLATES = '../src/templates';

const handleBuild = (err, files) => {
	if (err) { throw err; }
};

const METADATA = {
	head: {
		title: "Swarm Design System",
		description: "Meetup design system",
		generator: "Metalsmith"
	}
}

const metalsmithBuild = MetalSmith(__dirname)
	.metadata(METADATA)
	.source(PATH_SRC)
	.destination(PATH_DEST)
	.clean(true)
	.use(markdown('full', {}))
	.use(layouts({
		directory: PATH_TEMPLATES,
		engine: 'handlebars',
	}));

exports.handleBuild = handleBuild;
exports.metalsmithBuild = metalsmithBuild;
