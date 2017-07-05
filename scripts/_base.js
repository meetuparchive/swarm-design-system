import MetalSmith from 'metalsmith';
import markdown from 'metalsmith-markdown-remarkable';
import collect from 'metalsmith-auto-collections';
import layouts from 'metalsmith-layouts';
import sass from 'metalsmith-sass';

const PATH_SRC = '../src/';
const PATH_TEMPLATES = '../src/templates/';
const PATH_DEST = '../build';

const METADATA = {
	head: {
		title: "Swarm Design System",
		description: "Meetup design system",
		generator: "Metalsmith"
	}
}

export const handleBuild = (err, files) => {
	if (err) { throw err; }
};

export const metalsmithBuild = MetalSmith(__dirname)
	.metadata(METADATA)
	.source(PATH_SRC)
	.destination(PATH_DEST)
	.ignore('templates')
	.clean(true)
	.use(markdown('full', {
		html: true
	}))
	.use(layouts({
		directory: PATH_TEMPLATES,
		engine: 'handlebars',
	}))
	.use(sass({
		outputDir: 'css/',
	}));
