import MetalSmith from 'metalsmith';
import markdown from 'metalsmith-markdown-remarkable';
import layouts from 'metalsmith-layouts';

const PATH_SRC = '../src/content';
const PATH_DEST = '../build';
const PATH_TEMPLATES = '../src/templates';

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
	.clean(true)
	.use(markdown('full', {}))
	.use(layouts({
		directory: PATH_TEMPLATES,
		engine: 'handlebars',
	}));
