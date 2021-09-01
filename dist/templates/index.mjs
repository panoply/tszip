var e={name:"basic",dependencies:["husky","export-ts","tslib","typescript","size-limit","@size-limit/preset-small-lib"],packageJson:{version:"0.1.0",license:"MIT",main:"./dist/index.cjs",module:"./dist/index.mjs",exports:{"./package.json":"./package.json",".":{import:"./dist/index.mjs",require:"./dist/index.cjs"}},typings:"dist/index.d.ts",files:["dist","src"],engines:{node:">=14"},scripts:{start:"export-ts watch",build:"export-ts build",test:"export-ts test",posttest:"node test/import.mjs && node test/require.cjs",lint:"export-ts lint",prepare:"export-ts build",size:"size-limit",analyze:"size-limit --why"},peerDependencies:{},husky:{hooks:{"pre-commit":"export-ts lint"}},prettier:{printWidth:80,semi:!0,singleQuote:!0,trailingComma:"es5"}}};const s={name:"react",dependencies:[...e.dependencies,"@types/react","@types/react-dom","react","react-dom"],packageJson:{...e.packageJson,peerDependencies:{react:">=16"},scripts:{...e.packageJson.scripts,test:"export-ts test"}}};var t={name:"basic",dependencies:["husky","export-ts","tslib","typescript","size-limit","@size-limit/preset-small-lib"],packageJson:{version:"0.1.0",license:"MIT",main:"./dist/index.cjs",module:"./dist/index.mjs",exports:{"./package.json":"./package.json",".":{import:"./dist/index.mjs",require:"./dist/index.cjs"}},typings:"dist/index.d.ts",files:["dist","src"],engines:{node:">=14"},scripts:{start:"export-ts watch",build:"export-ts build",test:"export-ts test",posttest:"node test/import.mjs && node test/require.cjs",lint:"export-ts lint",prepare:"export-ts build",size:"size-limit",analyze:"size-limit --why"},peerDependencies:{},husky:{hooks:{"pre-commit":"export-ts lint"}},prettier:{printWidth:80,semi:!0,singleQuote:!0,trailingComma:"es5"}}};const i={name:"react",dependencies:[...t.dependencies,"@types/react","@types/react-dom","react","react-dom"],packageJson:{...t.packageJson,peerDependencies:{react:">=16"},scripts:{...t.packageJson.scripts,test:"export-ts test"}}},o={basic:e,react:s,"react-with-storybook":{dependencies:[...i.dependencies,"@babel/core","@storybook/addon-essentials","@storybook/addon-links","@storybook/addon-info","@storybook/addons","@storybook/react","react-is","babel-loader"],name:"react-with-storybook",packageJson:{...i.packageJson,scripts:{...i.packageJson.scripts,storybook:"start-storybook -p 6006","build-storybook":"build-storybook"}}}};export{o as templates};
export default {};
//# sourceMappingURL=index.mjs.map