module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'requirejs'],
        files: [
            {pattern: 'src/js/**/*.js', included: false},
            {pattern: 'src/test/**/*.js', included: false},
            'src/test/karma-test-main.js'
        ],
        exclude: [
        ],
        preprocessors: {
            'src/js/**/*.js': ['coverage']
        },
        reporters: ['progress', 'junit', 'coverage'],
        coverageReporter: {
            reporters: [
                {type: 'lcov'},
                {type: 'html'},
                {type: 'cobertura'},
                {type: 'text-summary'}
            ]
        },
        port: 9876, // Note: web server port
        colors: true, // Note: enable / disable colors in the output (reporters and logs)
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        captureTimeout: 60000, // Note: If browser does not capture in given timeout [ms], kill it
        singleRun: false
    });
};
