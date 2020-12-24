'use strict';

const projectName = 'footer';

const templatePath = './build/inc/';
const phpFiles = './src/pages/' + projectName + '/*.php';

import * as templateFile from './tasks/template.js';

exports.build = () => {
    templateFile.template(phpFiles, templatePath)
};


