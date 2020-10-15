'use strict';

const projectName = 'index';

const templatePath = './dist/';
const phpFiles = './dev/pages/' + projectName + '/*.php';

import * as templateFile from './tasks/template.js';

exports.build = () => {
    templateFile.template(phpFiles, templatePath)
};