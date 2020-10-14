'use strict';

const projectName = 'header';

const templatePath = './release/inc/';
const phpFiles = './app/pages/' + projectName + '/*.php';

import * as templateFile from './tasks/template.js';

exports.build = () => {
    templateFile.template(phpFiles, templatePath)
};


