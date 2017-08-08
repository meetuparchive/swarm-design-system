import fs from 'fs';
import util from 'util';


/**
 * Writes log files of `files` object
 * passed through metalsmith plugins.
 *
 * @param {String} msg - title of log file
 * @usage
 * ```
 * .use(logFiles('BEFORE somePlugin'))
 * .use(somePlugin({ ...options }))
 * .use(logFiles('AFTER somePlugin'))
 * ```
 */
const logFiles = msg => (files, metalsmith, done) => {
	fs.writeFileSync(
		`./${msg.replace(/\s/, '')}.log`,
		util.inspect(files)
	);
	done();
};

export default logFiles;
