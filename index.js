import MetalSmith from 'metalsmith';
import markdown from 'metalsmith-markdown';
import inPlace from 'metalsmith-in-place';
import permalinks from 'metalsmith-permalinks';

const METADATA = {
	head: {
		title: "Swarm Design System",
		description: "Meetup design system",
		generator: "Metalsmith"
	}
}

MetalSmith(__dirname)
	.metadata(METADATA)
	.source('./content')
	.destination('./build')
	.clean(true)
	.use(markdown({
		smartypants: true,
		gfm: true,
		tables: true,
	}))
	.use(permalinks())
	.use(inPlace({
		pattern: './templates/**/*',
		rename: true,
	}))
	.build((err, files) => {
		if (err) { throw err; }
	});
