'use strict';

const projectName = 'footer';

const templatePath = './dist/inc/';
const phpFiles = './dev/pages/' + projectName + '/*.php';

import * as templateFile from './tasks/template.js';

exports.build = () => {
    templateFile.template(phpFiles, templatePath)
};


