module.exports = {
	entry: __dirname + '/lib/public/js/drawGameTable.js',
	output: {
		path: __dirname + '/lib/public/js/bundled/',
		filename: 'drawGameTable.js'
	},
	watch: true
}