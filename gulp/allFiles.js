'use strict';

const path = {
    release: {
        localDomain: 'test.rktv-local/',
        mainPath : './dist',
        stylePath: './dist/css',
        templatePath: './dist',
        imagesPath: './dist/img/',
        scriptsPath: './dist/js/',
        fontsPath: './dist/fonts/'
    },
    app: {
        styleWatch: './dev/pages/**/*.scss',
        styleFiles: './dev/*.scss',
        phpWatch: './dev/pages/**/*.php',
        phpFiles: './dev/pages/*.php',
        imagesFiles: './dev/general/img/**/*.*',
        fontsFiles: './dev/general/fonts/**/*.*',
        scriptsOrdered : [
            './dev/general/js/vendor/jquery/*.js',
            './dev/general/js/vendor/bootstrapJS/*.js',
            './dev/general/js/libs/**/*.js',
            './dev/general/js/ui_elements.js',
            './dev/pages/**/*.js',
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

