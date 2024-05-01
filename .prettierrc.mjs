// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
   plugins: ['prettier-plugin-astro', '@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
   tailwindConfig: './tailwind.config.mjs',
   htmlWhitespaceSensitivity: 'ignore',
   printWidth: 150,
   tabWidth: 3,
   pluginSearchDirs: false,
   trailingComma: 'all',
   singleQuote: true,
   semi: true,
   importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
   importOrderSeparation: true,
   importOrderSortSpecifiers: true,
};
