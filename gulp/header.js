'use strict';

const projectName = 'header';

const templatePath = './build/inc/';
const phpFiles = './src/pages/' + projectName + '/*.php';

import * as templateFile from './tasks/template.js';

exports.build = () => {
    templateFile.template(phpFiles, templatePath)
};


