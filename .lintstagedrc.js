export default {
      '*.{ts,tsx,js,jsx}': 'eslint --cache --fix',
      '*.md': 'prettier --write',
      '*.{ts,tsx}': () => 'tsc --skipLibCheck --noEmit',

};
