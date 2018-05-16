const path1 = __dirname + '/lib/public/js/drawGameTable.js';

const name1 = 'drawGameTable.js';


module.exports = {
	entry: path1,
	output: {
		path: __dirname + '/lib/public/js/bundled/',
		filename: name1
	},
	watch: true
}