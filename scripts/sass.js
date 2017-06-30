import sass from 'node-sass';
import fs from 'fs';

const PATH_SASS_SRC  = 'src/scss/main.scss';
const PATH_SASS_DEST = 'build/main-exported.css'

export default function renderSass() {
	console.log('RENDERING THAT SASS');
	sass.render({
		file: PATH_SASS_SRC,
		outFile: PATH_SASS_DEST, // useful if we decide to add sourcemaps
		importer: function(url, prev, done) {
			done({
				file: url
			});
		},
		outputStyle: 'compressed'
	}, (error, result) => {
		if (!error) {
			fs.writeFile(PATH_SASS_DEST, result.css.toString(), (err) => {
				if(!err){
					// console.log(result.css.toString());
				} else {
					console.log(err);
				}
			});
		}	else {
			console.log(error.message);
		}
	});
}