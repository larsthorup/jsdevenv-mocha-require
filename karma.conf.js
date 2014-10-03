module.exports = function (config) {
    config.set({
        browserStack: {
        },
        customLaunchers: {
            bs_win8_firefox: {
                base: 'BrowserStack',
                os: 'Windows',
                device: null,
                browser_version: '31.0',
                browser: 'firefox',
                os_version: '8.1'
            },
            bs_iphone5: {
                base: 'BrowserStack',
                device: 'iPhone 5',
                os: 'ios',
                os_version: '6.0'
            }
        },
        basePath: '',
        frameworks: ['mocha', 'requirejs'],
        files: [
            'src/test/karma-test-main.js',
            {pattern: 'src/**/*.*', included: false}
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
