module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        nodeunit: {
            all: ['tests/**/*.test.js']
        },
		concat: {
			css: {
				src: 'src/css/*/*.css',
				dest: 'src/css/concat.css'
			}
		},
		// Minification CSS
		cssmin: {
			css:{
				src: 'src/css/concat.css',
				dest: 'src/lib/css/app.min.css'
			}
		},
		// Minification JS
		uglify: {
			dist: {
				src: ['src/js/*/*.js'],
				dest: 'src/lib/js/app.min.js'
			}
		},
        watch: {
            test: {
                files: ['tests/*/*.js'],
                tasks: ['nodeunit']
            },
			css: {
                files: ['src/css/*/*.css'],
                tasks: ['concat:css', 'cssmin']
            },
			js: {
                files: ['src/js/*/*.js'],
                tasks: ['uglify']
            }
        }
    });
};