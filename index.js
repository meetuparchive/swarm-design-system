import MetalSmith from 'metalsmith';
import markdown from 'metalsmith-markdown-remarkable';
import layouts from 'metalsmith-layouts';

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
	.destination('./build')
	.clean(true)
	.use(markdown('full', {
		typographer: true
	}))
	.use(layouts({
		directory: './templates/',
		engine: 'handlebars',
	}))
	.build((err, files) => {
		if (err) { throw err; }
	});
