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
    grunt.registerTask('ci', ['lint', 'cover', 'karma:chromeWin7']);

    // lint
    grunt.loadNpmTasks('grunt-contrib-jshint');
    gruntConfig.jshint = {
        options: { bitwise: true, camelcase: true, curly: true, eqeqeq: true, forin: true, immed: true,
            indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, plusplus: true,
            quotmark: true, regexp: true, undef: true, unused: true, strict: true, trailing: true,
            maxparams: 4, maxdepth: 2, maxstatements: 50},
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
        options: {
            basePath: '',
            frameworks: ['mocha', 'requirejs'],
            files: [
                'src/test/karma-test-main.js',
                {pattern: 'src/**/*.*', included: false}
            ],
            junitReporter: {
                outputFile: 'output/test/test-results.xml'
            },
            coverageReporter: {
                reporters: [
                    {type: 'lcov'},
                    {type: 'html'},
                    {type: 'cobertura'},
                    {type: 'text-summary'}
                ],
                dir: 'output/coverage'
            },
            port: 9876, // Note: web server port
            colors: true, // Note: enable / disable colors in the output (reporters and logs)
            logLevel: 'INFO',
            autoWatch: false,
            captureTimeout: 60000, // Note: If browser does not capture in given timeout [ms], kill it
            singleRun: false,
            browserStack: {
            },
            sauceLabs: {
            },
            customLaunchers: {
                'bs_win8_chrome': {
                    base: 'BrowserStack',
                    os: 'Windows',
                    device: null,
                    'browser_version': '39',
                    browser: 'chrome',
                    'os_version': '8.1'
                },
                'sl_win7_chrome': {
                    base: 'SauceLabs',
                    browserName: 'chrome',
                    platform: 'Windows 7',
                    version: '39'
                }
            }
        },
        test: {
            reporters: ['progress', 'junit'],
            browsers: ['PhantomJS'],
            singleRun: true
        },
        cover: {
            preprocessors: {
                'src/js/**/*.js': ['coverage']
            },
            reporters: ['progress', 'coverage'],
            browsers: ['PhantomJS'],
            singleRun: true
        },
        server: {
            reporters: ['progress'],
            browsers: ['Firefox'],
            background: true
        },
        firefox: {
            reporters: ['progress'],
            browsers: ['Firefox'],
            singleRun: true
        },
        chromeWin8: {
            reporters: ['spec'],
            browsers: ['bs_win8_chrome'],
            singleRun: true
        },
        chromeWin7: {
            reporters: ['spec', 'saucelabs'],
            browsers: ['sl_win7_chrome'],
            singleRun: true
        }
    };
    grunt.registerTask('test', ['karma:test']);
    grunt.registerTask('cover', ['karma:cover']);


    // forever
    grunt.loadNpmTasks('grunt-contrib-watch');
    gruntConfig.watch = {
        karma: {
            files: ['src/**/*.js' ],
            tasks: ['karma:server:run']
        }
    };
    grunt.registerTask('live', ['karma:server:start', 'watch:karma']);


    // grunt
    grunt.initConfig(gruntConfig);
};