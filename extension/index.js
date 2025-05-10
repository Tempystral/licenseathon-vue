"use strict";
/* eslint-disable @typescript-eslint/no-require-imports */
// This must go first so we can use module aliases!
require('module-alias').addAlias('@licenseathon-vue', require('path').join(__dirname, '.'));
const nodecg_1 = require("./util/nodecg");
module.exports = (nodecg) => {
    /**
     * Because of how `import`s work, it helps to use `require`s to force
     * things to be loaded *after* the NodeCG context is set.
     */
    (0, nodecg_1.set)(nodecg);
    require('./example');
};
