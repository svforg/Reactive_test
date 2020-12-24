'use strict';

const projectName = 'index';

const templatePath = './build/';
const phpFiles = './src/pages/' + projectName + '/*.html';

import * as templateFile from './tasks/template.js';

exports.build = () => {
    templateFile.template(phpFiles, templatePath)
};