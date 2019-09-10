
const path = require('path');
const { styles, theme } = require('./styleguide.styles');

// Where to find the root SASS file for loading styles across the page
const SASS_INDEX = path.join(__dirname, './src/App.scss');

// Output path of deployable assets after `npm run deploy`
const BUILD_PATH = path.join(__dirname, './build');

module.exports = {
    title: 'UI Components',
    usageMode: 'expand',
    styleguideDir: BUILD_PATH,
    skipComponentsWithoutExample: true,
    styles,
    theme,
    require: [
        // Bake in global SASS styles together, rather than using the webpack-method
        // of directly importing into each component's .js file. This is because our
        // group isn't using CSS modules (yet)
        SASS_INDEX
    ],
    sections: [
        {
            name: '',
            content: 'src/readme.md'
        },
        {
            name: 'Components',
            content: 'src/components/readme.md',
            components: 'src/components/**/*.js'
        },
    ]
};
