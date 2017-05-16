import MetalSmith from 'metalsmith';
import markdown from 'metalsmith-markdown-remarkable';
import layouts from 'metalsmith-layouts';
import browserSync from 'metalsmith-browser-sync';

export const DEST = './build';

const METADATA = {
	head: {
		title: "Swarm Design System",
		description: "Meetup design system",
		generator: "Metalsmith"
	}
}

// TODO: add highlter function to remarkable via plugin option

MetalSmith(__dirname)
	.metadata(METADATA)
	.source('./content')
	.destination(DEST)
	.clean(true)
	.use(markdown('full', {}))
	.use(layouts({
		directory: './templates',
		engine: 'handlebars',
	}))
	.use(browserSync({
		server: DEST,
		files: ['./content/**/*.md']
	}))
	.build((err, files) => {
		if (err) { throw err; }
	});

