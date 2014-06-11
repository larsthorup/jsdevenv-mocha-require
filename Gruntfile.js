/*global module*/
module.exports = function (grunt) {
    'use strict';

    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json')
    };

    // convenience
    grunt.registerTask('default', ['lint', 'cover']);
    grunt.registerTask('all', ['lint', 'cover']);

    // continuous integration
    grunt.registerTask('ci', ['lint', 'cover']);

    // lint
    grunt.loadNpmTasks('grunt-contrib-jshint');
    gruntConfig.jshint = {
        options: { bitwise: true, camelcase: true, curly: true, eqeqeq: true, forin: true, immed: true,
            indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, plusplus: true,
            quotmark: true, regexp: true, undef: true, unused: true, strict: true, trailing: true,
            maxparams: 3, maxdepth: 2, maxstatements: 50},
        all: [
            'Gruntfile.js',
            'src/**/*.js',
            '!src/lib/**/*',
            '!src/test/lib/**/*'
        ]
    };
    grunt.registerTask('lint', 'jshint');


    // coverage
    grunt.loadNpmTasks('grunt-karma');
    gruntConfig.karma = {
        cover: {
            configFile: 'karma.conf.js',
            preprocessors: {
                'src/js/**/*.js': ['coverage']
            },
            reporters: ['progress', 'junit', 'coverage'],
            browsers: ['PhantomJS'],
            singleRun: true
        },
        server: {
            configFile: 'karma.conf.js',
            reporters: ['progress'],
            browsers: ['Firefox'],
            background: true
        }
    };
    grunt.registerTask('cover', ['karma:cover']);


    // tdd
    grunt.loadNpmTasks('grunt-contrib-watch');
    gruntConfig.watch = {
        karma: {
            files: ['src/**/*.js' ],
            tasks: ['karma:server:run']
        }
    };
    grunt.registerTask('tdd', ['karma:server:start', 'watch:karma']);


    // grunt
    grunt.initConfig(gruntConfig);
};