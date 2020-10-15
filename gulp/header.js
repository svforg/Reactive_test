'use strict';

const projectName = 'header';

const templatePath = './dist/inc/';
const phpFiles = './dev/pages/' + projectName + '/*.php';

import * as templateFile from './tasks/template.js';

exports.build = () => {
    templateFile.template(phpFiles, templatePath)
};


