// module.exports = {
export default {
      '*.{ts,tsx,js,jsx}': 'eslint --cache --fix',
      '*.md': 'prettier --write',
      // '*.{css,scss}': 'stylelint --cache --fix',
      '*.{ts,tsx}': () => 'tsc --skipLibCheck --noEmit',

};
