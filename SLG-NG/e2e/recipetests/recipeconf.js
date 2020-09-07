exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['recipe.spec.js'],

    capabilities: {

        browserName: 'chrome',

        chromeOptions: {
            args: []
        }

    }

}