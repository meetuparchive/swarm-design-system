import MetalSmith from 'metalsmith';
import markdown from 'metalsmith-markdown';
import templates from 'metalsmith-react-templates';
import permalinks from 'metalsmith-permalinks';
import collections from 'metalsmith-collections';

const METADATA = {
	head: {
		title: "Swarm Design System",
		description: "Meetup design system",
		generator: "Metalsmith"
	}
}

const COLLECTIONS = {
	brand: './content/brand/*.md',
	copy: './content/copy/*.md',
	articles: './content/articles/*.md',
	tools: './content/tools/*.md'
}

MetalSmith(__dirname)
	.metadata(METADATA)
	.source('./content')
	.destination('./build')
	.clean(true)
	.use(collections(COLLECTIONS))
	.use(markdown({
		smartypants: true,
		tables: true
	}))
	.use(permalinks())
	.use(templates({
		baseFile: 'base.html',
		isStatic: true,
		directory: 'templates'
	}))
	.build((err, files) => {
		if (err) { throw err; }
	});
