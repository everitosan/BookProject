/**
 * Compiles jade files and folders.
 *
 * ---------------------------------------------------------------
 *
 * This grunt task is configured to compile out the contents in the .tmp/public of your
 * sails project.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-jade
 */
module.exports = function(grunt) {

	grunt.config.set('jade', {
		dev: {
			files: [{
				expand: true,
				cwd: './assets',
				src: ['**/*.jade'],
				dest: '.tmp/public',
				ext: '.html'
			}],
		},
		build: {
			files: [{
				expand: true,
				cwd: '.tmp/public',
				src: ['**/*.jade'],
				dest: '.www',
				ext: '.html'
			}],
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jade');
};
