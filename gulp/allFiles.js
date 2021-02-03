'use strict';

const path = {
    release: {
        localDomain: 'reactive/',
        mainPath : './build',
        stylePath: './build/css',
        templatePath: './Reactive_test/build',
        imagesPath: './build/img/',
        scriptsPath: './build/js/',
        fontsPath: './build/fonts/'
    },
    app: {
        styleWatch: './src/pages/**/*.scss',
        styleFiles: './src/*.scss',
        phpWatch: './src/pages/**/*.php',
        phpFiles: './src/pages/*.php',
        imagesFiles: './src/general/img/**/*.*',
        fontsFiles: './src/general/fonts/**/*.*',
        scriptsOrdered : [
            './src/general/js/vendor/jquery/*.js',
            './src/general/js/vendor/bootstrapJS/*.js',
            './src/general/js/libs/**/*.js',
            './src/general/js/ui_elements.js',
            './src/pages/**/*.js',
        ]
    }
};

import * as stylesFile from './tasks/styles.js';
import * as scriptsFile from './tasks/scripts.js';
import * as imagesFile from './tasks/images.js';
import * as watchFile from './tasks/watch.js';
import * as fontsFile from './tasks/fonts.js';


exports.build = () => {
    fontsFile.fonts(path.app.fontsFiles, path.release.fontsPath),
    stylesFile.styles(path.app.styleFiles, path.release.stylePath),
    scriptsFile.scripts(path.app.scriptsOrdered, path.release.scriptsPath),
    imagesFile.images(path.app.imagesFiles, path.release.imagesPath)
};

exports.watch = () => {
    watchFile.watch(
        path.release.localDomain,
        path.app.styleWatch,
        path.app.styleFiles,
        path.release.stylePath,
        path.app.scriptsOrdered,
        path.release.scriptsPath,
        path.app.phpWatch,
        path.app.phpFiles,
        path.release.templatePath,
    )
};
