// .lintstagedrc.js
module.exports = {
    "src/**/*.{js,jsx,ts,tsx}": ["npm run lint:js", "npm run test:related"],
};