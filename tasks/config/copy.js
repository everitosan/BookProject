/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(grunt) {

	grunt.config.set('copy', {
		dev: {
			files: [{
				expand: true,
				cwd: './assets',
				src: ['**/*.!(coffee|less|jade)'],
				dest: '.tmp/public'
			}, {
				expand: true,
				cwd: './vendor',
				src: [
						 'angular/angular.js',
						 'angular-route/angular-route.js',
						 'angular-animate/angular-animate.js',
						 'd3/d3.js',
						 'snap.svg/dist/snap.svg.js',
						 'jquery/dist/jquery.js',
						 'greensock-js/src/uncompressed/TweenMax.js',
						 'angular-directive.g-signin/*.js',
						 'angular-bootstrap/ui-bootstrap-tpls.js',
						 'marked/marked.min.js',
						 'angular-md/dist/angular-md.js',
						 'masonry/dist/masonry.pkgd.min.js',
						 'imagesloaded/imagesloaded.pkgd.min.js',
						 ],
				dest: '.tmp/public/js/vendor'
			}]
		},
		build: {
			files: [{
				expand: true,
				cwd: '.tmp/public',
				src: ['**/*'],
				dest: 'www'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
};
