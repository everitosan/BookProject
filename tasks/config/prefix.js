/**
 * Prexix CSS files.
 *
 * ---------------------------------------------------------------
 *
 * Only the `.tmp/styles/public/importer.css` is compiled.
 * 
 *
 * For usage docs see:
 * 		grunt-autoprefixer autoprefix
 */
module.exports = function(grunt) {

	grunt.config.set('autoprefixer', {
		dev: {
			files: [{
				expand: true,
				cwd: '.tmp/public/styles/',
				src: ['importer.css'],
				dest: '.tmp/public/styles/',
				ext: '.css'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-autoprefixer');
};
