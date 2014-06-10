module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'requirejs'],
        files: [
            'src/test/karma-test-main.js',
            {pattern: 'src/js/**/*.js', included: false},
            {pattern: 'src/test/**/*.js', included: false}
        ],
        exclude: [
        ],
        preprocessors: {
            'src/js/**/*.js': ['coverage']
        },
        reporters: ['progress', 'junit', 'coverage'],
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
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['Firefox'], // PhantomJS
        captureTimeout: 60000, // Note: If browser does not capture in given timeout [ms], kill it
        singleRun: false
    });
};
