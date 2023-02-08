// .lintstagedrc.js
module.exports = {
    "src/**/*.tsx": ["npm run lint:js", "npm run test:related"],
};