'use strict';

const path = {
    release: {
        localDomain: 'test.rktv-local/',
        mainPath : './release',
        stylePath: './release/css',
        templatePath: './release',
        imagesPath: './release/img/',
        scriptsPath: './release/js/',
        fontsPath: './release/fonts/'
    },
    app: {
        styleWatch: './app/pages/**/*.scss',
        styleFiles: './app/*.scss',
        phpWatch: './app/pages/**/*.php',
        phpFiles: './app/pages/*.php',
        imagesFiles: './app/general/img/**/*.*',
        fontsFiles: './app/general/fonts/**/*.*',
        scriptsFiles : [
            './app/general/js/vendor/jquery/*.js',
            './app/general/js/vendor/bootstrapJS/*.js',
            //'./app/general/js/libs/**/*.js',
            './app/pages/**/*.js',
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
    scriptsFile.scripts(path.app.scriptsFiles, path.release.scriptsPath),
    imagesFile.images(path.app.imagesFiles, path.release.imagesPath)
};

exports.watch = () => {
    watchFile.watch(
        path.release.localDomain,
        path.app.styleWatch,
        path.app.styleFiles,
        path.release.stylePath,
        path.app.scriptsFiles,
        path.release.scriptsPath,
        path.app.phpWatch,
        path.app.phpFiles,
        path.release.templatePath,
    )
};

