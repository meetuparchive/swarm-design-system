import MetalSmith from 'metalsmith';
import Handlebars from 'handlebars';
import collections from 'metalsmith-collections';
import collectionsConfig from './_collectionsConfig';
import handlebarsHelpers from './utils/_handlebarsHelpers';
import permalinks from 'metalsmith-permalinks';
import markdown from 'metalsmith-markdown-remarkable';
import layouts from 'metalsmith-layouts';
import sass from 'metalsmith-sass';

const PATH_SRC = '../src/';
const PATH_TEMPLATES = '../src/templates/';
const PATH_PARTIALS = `${PATH_TEMPLATES}partials/`;
const PATH_DEST = '../build';

for (const key in handlebarsHelpers) {
	Handlebars.registerHelper(key, handlebarsHelpers[key]);
}

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
	.use(collections(collectionsConfig))
	.use(permalinks({
		pattern: ':collection/:title',
		relative: true
	}))
	.use(layouts({
		directory: PATH_TEMPLATES,
		engine: 'handlebars',
		partials: PATH_PARTIALS
	}))
	.use(sass({
		outputDir: 'css/',
	}));

