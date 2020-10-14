'use strict';

const projectName = 'index';

const templatePath = './release/';
const phpFiles = './app/pages/' + projectName + '/*.php';

import * as templateFile from './tasks/template.js';

exports.build = () => {
    templateFile.template(phpFiles, templatePath)
};