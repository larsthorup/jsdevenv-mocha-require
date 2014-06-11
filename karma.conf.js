module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'requirejs'],
        files: [
            'src/test/karma-test-main.js',
            {pattern: 'src/lib/**/*.js', included: false},
            {pattern: 'src/js/**/*.js', included: false},
            {pattern: 'src/test/**/*.js', included: false}
        ],
        exclude: [
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
        logLevel: config.LOG_INFO,
        autoWatch: false,
        captureTimeout: 60000, // Note: If browser does not capture in given timeout [ms], kill it
        singleRun: false
    });
};
