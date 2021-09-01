"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("sade/lib/index.js"),t=require("glob-promise/lib/index.js"),s=require("rollup"),r=require("chalk/source/index.js"),n=require("jest"),o=require("eslint/lib/api.js"),a=require("chalk/source/index.js"),i=require("path"),l=require("execa/index.js"),c=require("shelljs/shell.js"),p=require("ora/index.js"),u=require("semver/index.js"),d=require("fs-extra/lib/index.js"),f=require("camelcase/index.js"),m=require("execa/index.js");require("ansi-escapes/index.js"),require("ora/index.js");var g=require("jpjs/dist/jpjs.js"),h=require("resolve.exports"),y=require("rollup-plugin-terser"),x=require("@babel/core/lib/index.js"),w=require("@rollup/plugin-commonjs/dist/index.js"),j=require("@rollup/plugin-json/dist/index.js"),b=require("@rollup/plugin-node-resolve"),v=require("rollup-plugin-sourcemaps"),E=require("typescript/lib/typescript.js"),k=require("@babel/parser/lib/index.js"),S=require("@babel/traverse/lib/index.js"),q=require("pascal-case/dist/index.js"),$=require("@babel/core/lib/index.js"),C=require("@rollup/plugin-babel/dist/index.js"),F=require("lodash.merge"),D=require("@optimize-lodash/rollup-plugin/dist/index.js"),O=require("fs"),J=require("tiny-glob/index.js"),P=require("fs-extra/lib/index.js"),I=require("enquirer/lib/prompts/input.js"),R=require("enquirer/lib/prompts/select.js"),_=require("progress-estimator/src/index.js"),M=require("fs/promises"),T=require("child_process");function N(e){return e&&"object"==typeof e&&"default"in e?e:{"default":e}}function z(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(s){if("default"!==s){var r=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(t,s,r.get?r:{enumerable:!0,get:function(){return e[s]}})}})),t.default=e,t}require("@babel/helper-module-imports/lib/index.js");var A=N(e),L=N(t),B=N(r),W=N(n),U=N(a),Y=N(i),Z=N(l),V=N(c),K=N(p),Q=N(u),G=N(d),H=N(f),X=N(m),ee=N(h),te=N(w),se=N(j),re=N(b),ne=N(v),oe=N(E),ae=N(S),ie=N(F),le=N(J),ce=N(P),pe=z(P),ue=N(I),de=N(R),fe=N(_);const me=console.error.bind(console);function ge(e){const t=e.error||e,s=`${t.name?t.name+": ":""}${t.message||t}`,r=t.plugin?"rpt2"===t.plugin?`(typescript) ${s}`:`(${t.plugin} plugin) ${s}`:s;if(me(U.default.bold.red(r)),t.loc&&(me(),me(`at ${t.loc.file}:${t.loc.line}:${t.loc.column}`)),t.frame)me(),me(U.default.dim(t.frame));else if(e.stack){const e=t.stack.replace(r,"");me(U.default.dim(e))}me()}const he=e=>H.default((e=>e.replace(/^@.*\//,""))(e).toLowerCase().replace(/((^[^a-zA-Z]+)|[^\w.-])|([^a-zA-Z0-9]+$)/g,"")),ye=e=>e.toLowerCase().replace(/(^@.*\/)|((^[^a-zA-Z]+)|[^\w.-])|([^a-zA-Z0-9]+$)/g,""),xe=G.default.realpathSync(process.cwd()),we=function(e){return Y.default.resolve(xe,e)},je={appPackageJson:we("package.json"),tsconfigJson:we("tsconfig.json"),testsSetup:we("test/setupTests.ts"),appRoot:we("."),appSrc:we("src"),appErrorsJson:we("errors/codes.json"),appErrors:we("errors"),appDist:we("dist"),appConfig:we("export-ts.config.js"),jestConfig:we("jest.config.js"),progressEstimatorCache:we("node_modules/.cache/.progress-estimator")};let be;async function ve(){if(be)return be;try{await X.default("yarnpkg",["--version"]),be="yarn"}catch(e){be="npm"}return be}const Ee=e=>U.default.bold(U.default.cyan(e)),ke=async function(e){const t=await ve(),s={install:"npm"===t?"npm install":"yarn install",build:"npm"===t?"npm run build":"yarn build",start:"npm"===t?"npm run start":"yarn start",test:"npm"===t?"npm test":"yarn test"};return`\n  ${B.default.green("Awesome!")} You're now ready to start coding.\n  \n  I already ran ${Ee(s.install)} for you, so your next steps are:\n    ${Ee(`cd ${e}`)}\n  \n  To start developing (rebuilds on changes):\n    ${Ee(s.start)}\n  \n  To build for production:\n    ${Ee(s.build)}\n\n  To test your library with Jest:\n    ${Ee(s.test)}\n    \n  Questions? Feedback? Please let me know!\n  ${B.default.green("https://github.com/ctjlewis/export-ts/issues")}\n`},Se=G.default.realpathSync(process.cwd()),qe=function(e){return Y.default.resolve(Se,e)},$e={appPackageJson:qe("package.json"),tsconfigJson:qe("tsconfig.json"),testsSetup:qe("test/setupTests.ts"),appRoot:qe("."),appSrc:qe("src"),appErrorsJson:qe("errors/codes.json"),appErrors:qe("errors"),appDist:qe("dist"),appConfig:qe("export-ts.config.js"),jestConfig:qe("jest.config.js"),progressEstimatorCache:qe("node_modules/.cache/.progress-estimator")};function Ce(e){const t={},s=Object.keys(e);for(const r of s)t[e[r]]=r;return t}function Fe(e){switch(e.type){case"StringLiteral":case"Literal":return e.value;case"BinaryExpression":if("+"!==e.operator)throw new Error("Unsupported binary operator "+e.operator);return Fe(e.left)+Fe(e.right);default:throw new Error("Unsupported type "+e.type)}}const De=G.default.realpathSync(process.cwd()),Oe=function(e){return Y.default.resolve(De,e)},Je={appPackageJson:Oe("package.json"),tsconfigJson:Oe("tsconfig.json"),testsSetup:Oe("test/setupTests.ts"),appRoot:Oe("."),appSrc:Oe("src"),appErrorsJson:Oe("errors/codes.json"),appErrors:Oe("errors"),appDist:Oe("dist"),appConfig:Oe("export-ts.config.js"),jestConfig:Oe("jest.config.js"),progressEstimatorCache:Oe("node_modules/.cache/.progress-estimator")},Pe={sourceType:"module",plugins:["classProperties","flow","jsx","trailingFunctionCommas","objectRestSpread"]};async function Ie(e){if(!e||!e.errorMapFilePath)throw new Error("Missing options. Ensure you pass an object with `errorMapFilePath`.");if(!e.name||!e.name)throw new Error("Missing options. Ensure you pass --name flag to export-ts");const t=e.errorMapFilePath;let s;try{const e=await G.default.readFile(t,"utf-8");s=JSON.parse(e)}catch(e){s={}}const r=Object.keys(s);let n;function o(e){const t=k.parse(e,Pe);ae.default(t,{CallExpression:{exit(e){var t;e.get("callee").isIdentifier({name:"invariant"})&&(t=Fe(e.node.arguments[1]),s.hasOwnProperty(t)||(s[t]=""+n++))}}})}return n=0===r.length?0:Math.max.apply(null,r)+1,s=Ce(s),async function(r){o(r),await async function(){const r=q.pascalCase((e=>H.default((e=>e.replace(/^@.*\//,""))(e).toLowerCase().replace(/((^[^a-zA-Z]+)|[^\w.-])|([^a-zA-Z0-9]+$)/g,"")))(e.name));await G.default.ensureDir(Je.appErrors),await G.default.writeFile(t,JSON.stringify(Ce(s),null,2)+"\n","utf-8"),await G.default.writeFile(Je.appErrors+"/ErrorDev.js","\nfunction ErrorDev(message) {\n  const error = new Error(message);\n  error.name = 'Invariant Violation';\n  return error;\n}\n\nexport default ErrorDev;\n      ","utf-8"),await G.default.writeFile(Je.appErrors+"/ErrorProd.js",`\nfunction ErrorProd(code) {\n  // TODO: replace this URL with yours\n  let url = 'https://reactjs.org/docs/error-decoder.html?invariant=' + code;\n  for (let i = 1; i < arguments.length; i++) {\n    url += '&args[]=' + encodeURIComponent(arguments[i]);\n  }\n  return new Error(\n    \`Minified ${r} error #\${code}; visit \${url} for the full message or \` +\n      'use the non-minified dev environment for full errors and additional ' +\n      'helpful warnings. '\n  );\n}\n\nexport default ErrorProd;\n`,"utf-8")}()}}const Re=e=>!!e&&(e.constructor!==Object||Object.keys(e).length>0),_e=[{original:"lodash(?!/fp)",replacement:"lodash-es"}],Me=(e,...t)=>{const s=[];return t.forEach((t=>{t.forEach((t=>{const r=s.findIndex((e=>e.file.resolved===t.file.resolved));-1!==r?s[r]=$.createConfigItem([s[r].file.resolved,ie.default(s[r].options,t.options)],{type:e}):s.push(t)}))})),s},Te=(e,t)=>t.map((({name:t,...s})=>$.createConfigItem([require.resolve(t),s],{type:e}))),Ne=C.createBabelInputPluginFactory((()=>({options:({custom:e,...t})=>({customOptions:e,pluginOptions:t}),config(e,{customOptions:t}){const s=Te("plugin",[{name:"babel-plugin-macros"},{name:"babel-plugin-annotate-pure-calls"},{name:"babel-plugin-dev-expression"},"cjs"!==t.format&&{name:"babel-plugin-transform-rename-import",replacements:_e},{name:"babel-plugin-polyfill-regenerator",method:"usage-pure"},{name:"@babel/plugin-proposal-class-properties",loose:!0},Re(t.extractErrors)&&{name:"./errors/transformErrorMessages"}].filter(Boolean)),r=e.options||{};r.presets=r.presets||[];const n=r.presets.findIndex((e=>e.file.request.includes("@babel/preset-env")));if(-1!==n){const e=r.presets[n];r.presets[n]=$.createConfigItem([e.file.resolved,ie.default({loose:!0,targets:t.targets},e.options,{modules:!1})],{type:"preset"})}else{const e=Te("preset",[{name:"@babel/preset-env",targets:t.targets,modules:!1,loose:!0}]);r.presets=Me("preset",e,r.presets)}return r.plugins=Me("plugin",s,r.plugins||[]),r}})));function ze(e){const t=e.split("node_modules"),s=t[0];if(t.length<2)return null;const r=t[1].split(i.sep),n=r[1].startsWith("@")?r.slice(1,3).join(i.sep):r[1];return i.resolve(s,"node_modules",n,"package.json")}const Ae=["react","react-native"],Le={errorMapFilePath:$e.appErrorsJson};let Be={rollup:(e,t)=>e};async function We(e){const t=await le.default("dist/**/*.js"),s=g.concatAllArray(t.map((t=>function(e,t){return[e.format.includes("cjs")&&{...e,format:"cjs",env:"development",input:t},e.format.includes("cjs")&&{...e,format:"cjs",env:"production",input:t},e.format.includes("esm")&&{...e,format:"esm",input:t},e.format.includes("umd")&&{...e,format:"umd",env:"development",input:t},e.format.includes("umd")&&{...e,format:"umd",env:"production",input:t},e.format.includes("system")&&{...e,format:"system",env:"development",input:t},e.format.includes("system")&&{...e,format:"system",env:"production",input:t}].filter(Boolean)}(e,t).map(((e,t)=>({...e,writeMeta:0===t}))))));return await Promise.all(s.map((async(e,t)=>{const s=await async function(e,t){const s=await Ie({...Le,...e}),r=e.format.includes("es")||e.format.includes("esm"),n=void 0!==e.minify?e.minify:"production"===e.env||r;let o=["esm","cjs"].includes(e.format)?"":e.format,a="esm"===e.format?"mjs":"cjs";[`${$e.appDist}/${ye(e.name)}`,o,e.env,n?"min":"",a].filter(Boolean).join(".");const l=oe.default.readConfigFile(e.tsconfig||$e.tsconfigJson,oe.default.sys.readFile).config,c=oe.default.parseJsonConfigFileContent(l,oe.default.sys,"./").options,p="production"==="development",u=["esm"===e.format?".mjs":null,"cjs"===e.format?".cjs":null,".js"].filter(Boolean),d=e.input.replace(i.extname(e.input),"");return{input:e.input,external:e=>!e.startsWith("regenerator-runtime")&&(!!Ae.includes(e)||(e=>!e.startsWith(".")&&!Y.default.isAbsolute(e))(e)),shimMissingExports:!0,treeshake:{propertyReadSideEffects:!1},output:{file:`${d}.${"esm"===e.format?"mjs":"cjs"}`,format:r?"es":e.format,freeze:!1,esModule:Boolean(c?.esModuleInterop)||r,name:e.name||he(e.name),sourcemap:!0,globals:{react:"React","react-native":"ReactNative","lodash-es":"lodashEs","lodash/fp":"lodashFp"},exports:"named"},plugins:[e.extractErrors&&{name:"Extract errors",async transform(e){try{await s(e)}catch(e){return null}return{code:e,map:null}}},re.default({modulesOnly:!0,browser:"node"!==e.target,extensions:[".jsx",".json",".node"]}),te.default({extensions:[".js",".cjs",".mjs"],esmExternals:!0,requireReturnsDefault:!0,transformMixedEsModules:!0,include:"umd"===e.format||r?/\/node_modules\//:/\/regenerator-runtime\//}),se.default(),{name:"Remove shebang",transform:e=>({code:e=e.replace(/^#!(.*)/,""),map:null})},e.legacy&&Ne({exclude:"node_modules/**",extensions:[...x.DEFAULT_EXTENSIONS,"ts","tsx"],passPerPreset:!0,custom:{targets:{..."node"===e.target?{node:14}:{},esmodules:r},extractErrors:e.extractErrors,format:e.format},babelHelpers:"bundled"}),ne.default(),n&&y.terser({format:{keep_quoted_props:!0,comments:!1},compress:{keep_infinity:!0,pure_getters:!0,passes:10},ecma:e.legacy?5:2020,module:r,toplevel:"cjs"===e.format||r}),D.optimizeLodashImports({useLodashEs:r||void 0}),e.env&&{name:"Ensure default exports",renderChunk:async(e,t)=>({code:e.replace(/process\.env\.NODE_ENV(?!\s*=)/g,JSON.stringify(p?"production":"development")),map:null})},!e.legacy&&D.optimizeLodashImports({useLodashEs:r||void 0}),{name:"Resolve final runtime imports to files",renderChunk:async(t,s)=>{for(const r of s.imports){if(i.extname(r))continue;let s=require.resolve(r);const n=i.extname(s),o=s.replace(n,"");if("esm"===e.format||"cjs"===e.format)for(const e of u){const t=o+e;if(O.existsSync(t)){s=t;break}}const a=ze(s);if(!a||!O.existsSync(a))continue;const l=O.readFileSync(a,"utf-8"),c=JSON.parse(l);if(ee.default.resolve(c,r))continue;const p=s.slice(s.indexOf(r)),d=new RegExp(`(from|require\\()\\s*['"]${r.replace(".","\\.")}['"]`,"g"),f=t.match(d)??[];for(const e of f){const s=e.replace(r,p);t=t.replace(e,s)}}return{code:t,map:null}}},{name:"Ensure default exports",renderChunk:async(e,t)=>t.exports.includes("default")||!r?null:{code:`${e}\nexport default {};`,map:null}}]}}(e);return Be.rollup(s,e)})))}function Ue(e,t){return{transform:{".(ts|tsx)$":require.resolve("ts-jest/dist"),".(js|jsx)$":require.resolve("babel-jest")},transformIgnorePatterns:["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],moduleFileExtensions:["ts","tsx","js","jsx","json","node"],collectCoverageFrom:["src/**/*.{ts,tsx,js,jsx}"],testMatch:["<rootDir>/**/*.(spec|test).{ts,tsx,js,jsx}"],testURL:"http://localhost",rootDir:t,watchPlugins:[require.resolve("jest-watch-typeahead/filename"),require.resolve("jest-watch-typeahead/testname")]}}async function Ye(){return await ce.default.ensureDir($e.progressEstimatorCache),fe.default({storagePath:$e.progressEstimatorCache})}O.existsSync($e.appConfig)&&(Be=require($e.appConfig));var Ze={name:"basic",dependencies:["husky","export-ts","tslib","typescript","size-limit","@size-limit/preset-small-lib"],packageJson:{version:"0.1.0",license:"MIT",main:"./dist/index.cjs",module:"./dist/index.mjs",exports:{"./package.json":"./package.json",".":{import:"./dist/index.mjs",require:"./dist/index.cjs"}},typings:"dist/index.d.ts",files:["dist","src"],engines:{node:">=14"},scripts:{start:"export-ts watch",build:"export-ts build",test:"export-ts test",posttest:"node test/import.mjs && node test/require.cjs",lint:"export-ts lint",prepare:"export-ts build",size:"size-limit",analyze:"size-limit --why"},peerDependencies:{},husky:{hooks:{"pre-commit":"export-ts lint"}},prettier:{printWidth:80,semi:!0,singleQuote:!0,trailingComma:"es5"}}};const Ve={name:"react",dependencies:[...Ze.dependencies,"@types/react","@types/react-dom","react","react-dom"],packageJson:{...Ze.packageJson,peerDependencies:{react:">=16"},scripts:{...Ze.packageJson.scripts,test:"export-ts test"}}},Ke={basic:{name:"basic",dependencies:["husky","export-ts","tslib","typescript","size-limit","@size-limit/preset-small-lib"],packageJson:{version:"0.1.0",license:"MIT",main:"./dist/index.cjs",module:"./dist/index.mjs",exports:{"./package.json":"./package.json",".":{import:"./dist/index.mjs",require:"./dist/index.cjs"}},typings:"dist/index.d.ts",files:["dist","src"],engines:{node:">=14"},scripts:{start:"export-ts watch",build:"export-ts build",test:"export-ts test",posttest:"node test/import.mjs && node test/require.cjs",lint:"export-ts lint",prepare:"export-ts build",size:"size-limit",analyze:"size-limit --why"},peerDependencies:{},husky:{hooks:{"pre-commit":"export-ts lint"}},prettier:{printWidth:80,semi:!0,singleQuote:!0,trailingComma:"es5"}}},react:Ve,"react-with-storybook":{dependencies:[...Ve.dependencies,"@babel/core","@storybook/addon-essentials","@storybook/addon-links","@storybook/addon-info","@storybook/addons","@storybook/react","react-is","babel-loader"],name:"react-with-storybook",packageJson:{...Ve.packageJson,scripts:{...Ve.packageJson.scripts,storybook:"start-storybook -p 6006","build-storybook":"build-storybook"}}}},Qe=G.default.realpathSync(process.cwd()),Ge=function(e){return Y.default.resolve(Qe,e)};Ge("package.json"),Ge("tsconfig.json"),Ge("test/setupTests.ts"),Ge("."),Ge("src"),Ge("errors/codes.json"),Ge("errors"),Ge("dist"),Ge("export-ts.config.js"),Ge("jest.config.js"),Ge("node_modules/.cache/.progress-estimator");const He=A.default("export-ts");let Xe;try{Xe=JSON.parse(O.readFileSync(je.appPackageJson,"utf-8"))}catch(Ze){}const et=e=>M.stat(e).then((e=>e.isDirectory())).catch((()=>!1)),tt=e=>M.stat(e).then((e=>e.isFile())).catch((()=>!1));async function st(e,t){let s=[];if(e)Array.isArray(e)?s.push(...e):s.push(e);else if(t){const e=we(t);s.push(e)}else if(await et(we("src"))){const e=await async function(e){const t=await tt(we("src/index.ts"))?".ts":await tt(we("src/index.tsx"))?".tsx":await tt(we("src/index.jsx"))?".jsx":".js";return we(`src/index${t}`)}();s.push(e)}const r=s.map((async e=>await L.default(e)));return(await Promise.all(r)).flat()}async function rt(e){return{...e,name:e.name||Xe.name,input:await st(e.entry,Xe.source),format:e.format.split(",").map((e=>"es"===e?"esm":e))}}async function nt(){const e=await Ye(),t=await L.default(`${je.appDist}/**/*.js`);await e(Promise.all(t.map((async e=>await ce.default.unlink(e)))),"Removing original emitted TypeScript output (dist/**/*.js).")}async function ot(){await ce.default.remove(je.appDist)}function at(e){const t=`#!/usr/bin/env node\n\n'use strict';\nmodule.exports = require('./${ye(e)}.production.min.cjs');\n`;return ce.default.outputFile(Y.default.join(je.appDist,"index.cjs"),t)}function it(e){const t=`#!/usr/bin/env node\n\nexport { default } from './${e}.min.mjs';\nexport * from './${e}.min.mjs';\n`;return ce.default.outputFile(Y.default.join(je.appDist,"index.mjs"),t)}function lt(e){V.default.exec(`npm config set init-author-name "${e}"`,{silent:!0})}He.command("create <pkg>").describe("Create a new package with ").example("create mypackage").option("--template",`Specify a template. Allowed choices: [${Object.keys(Ke).join(", ")}]`).example("create --template react mypackage").action((async(e,t)=>{console.log(B.default.blue("\n::::::::::: ::::::::  :::::::::  :::    :::\n    :+:    :+:    :+: :+:    :+: :+:    :+:\n    +:+    +:+        +:+    +:+  +:+  +:+\n    +#+    +#++:++#++ +#+    +:+   +#++:+\n    +#+           +#+ +#+    +#+  +#+  +#+\n    #+#    #+#    #+# #+#    #+# #+#    #+#\n    ###     ########  #########  ###    ###\n"));const s=K.default(`Creating ${B.default.bold.green(e)}...`);let r;try{const o=await ce.default.realpath(process.cwd());let a=await async function t(r){if(!await ce.default.pathExists(r))return r;s.fail(`Failed to create ${B.default.bold.red(e)}`);const n=new ue.default({message:`A folder named ${B.default.bold.red(e)} already exists! ${B.default.bold("Choose a different name")}`,initial:e+"-1",result:e=>e.trim()});return e=await n.run(),r=await ce.default.realpath(process.cwd())+"/"+e,s.start(`Creating ${B.default.bold.green(e)}...`),await t(r)}(o+"/"+e);const i=new de.default({message:"Choose a template",choices:Object.keys(Ke)});t.template?(r=t.template.trim(),i.choices.includes(r)||(s.fail(`Invalid template ${B.default.bold.red(r)}`),r=await i.run())):r=await i.run(),s.start(),await ce.default.copy(Y.default.resolve(__dirname,`../templates/${r}`),a,{overwrite:!0}),await ce.default.move(Y.default.resolve(a,"./gitignore"),Y.default.resolve(a,"./.gitignore"));let l=await ce.default.readFile(Y.default.resolve(a,"LICENSE"),{encoding:"utf-8"});l=l.replace(/<year>/,`${(new Date).getFullYear()}`);let c=function(){let e="";return e=V.default.exec("npm config get init-author-name",{silent:!0}).stdout.trim(),e||(e=V.default.exec("git config --global user.name",{silent:!0}).stdout.trim(),e?(lt(e),e):(e=V.default.exec("npm config get init-author-email",{silent:!0}).stdout.trim(),e||(e=V.default.exec("git config --global user.email",{silent:!0}).stdout.trim(),e||e)))}();if(!c){s.stop();const e=new ue.default({name:"author",message:"Who is the package author?"});c=await e.run(),lt(c),s.start()}l=l.replace(/<author>/,c.trim()),await ce.default.writeFile(Y.default.resolve(a,"LICENSE"),l,{encoding:"utf-8"});const p=(e=>({name:t,author:s})=>({...e.packageJson,name:t,author:s,"size-limit":[{path:`dist/${t}.production.min.cjs`,limit:"10 KB"},{path:`dist/${t}.min.mjs`,limit:"10 KB"}]}))(Ke[r]);process.chdir(a);const u=p({name:ye(e),author:c}),d=function({engines:e}){return e&&e.node}(u);d&&!Q.default.satisfies(process.version,d)&&(s.fail((n=d,`Unsupported Node version! Your current Node version (${B.default.red(process.version)}) does not satisfy the requirement of Node ${B.default.cyan(n)}.`)),process.exit(1)),await ce.default.outputJSON(Y.default.resolve(a,"package.json"),u),s.succeed(`Created ${B.default.bold.green(e)}`),await ke(e)}catch(t){s.fail(`Failed to create ${B.default.bold.red(e)}`),ge(t),process.exit(1)}var n;const o=Ke[r],{dependencies:a}=o,i=K.default((l=a.sort(),`Installing dependencies:\n\n${l.map((e=>((e,t=1)=>`${" ".repeat(2*t)}${e}`)(`${B.default.cyan(B.default.bold(e))}`,2))).join("\n")}\n\n`)).start();var l;try{const t=await ve();await Z.default(t,function(e,t){switch(e){case"npm":return["install",...t,"--save-dev"];case"yarn":return["add",...t,"--dev"]}}(t,a)),i.succeed("Installed dependencies"),console.log(await ke(e))}catch(e){i.fail("Failed to install dependencies"),ge(e),process.exit(1)}})),He.command("watch").describe("Rebuilds on any change").option("--entry, -i","Entry module").example("watch --entry src/foo.tsx").option("--target","Specify your target environment","browser").example("watch --target node").option("--name","Specify name exposed in UMD builds").example("watch --name Foo").option("--format","Specify module format(s)","cjs,esm").example("watch --format cjs,esm").option("--verbose","Keep outdated console output in watch mode instead of clearing the screen").example("watch --verbose").option("--noClean","Don't clean the dist folder").example("watch --noClean").option("--tsconfig","Specify custom tsconfig path").example("watch --tsconfig ./tsconfig.foo.json").option("--onFirstSuccess","Run a command on the first successful build").example('watch --onFirstSuccess "echo The first successful build!"').option("--onSuccess","Run a command on a successful build").example('watch --onSuccess "echo Successful build!"').option("--onFailure","Run a command on a failed build").example('watch --onFailure "The build failed!"').option("--transpileOnly","Skip type checking").example("watch --transpileOnly").option("--extractErrors","Extract invariant errors to ./errors/codes.json.").example("watch --extractErrors").action((async e=>{const t=await rt(e),r=await We(t);t.noClean||await ot(),t.format.includes("cjs")&&await at(t.name),t.format.includes("esm")&&await it(t.name),await nt();let n=!0,o=null,a=null;function i(e){if(!e)return null;const[t,...s]=e.split(" ");return Z.default(t,s,{stdio:"inherit"})}const l=K.default().start();s.watch(r.map((e=>({watch:{silent:!0,include:["src/**"],exclude:["node_modules/**"]},...e})))).on("event",(async e=>{if(await Promise.all([o?o.kill("SIGTERM"):null,a?a.kill("SIGTERM"):null]),"START"===e.code&&(t.verbose||process.stdout.write("win32"===process.platform?"[2J[0f":"[2J[3J[H"),l.start(B.default.bold.cyan("Compiling modules..."))),"ERROR"===e.code&&(l.fail(B.default.bold.red("Failed to compile")),ge(e.error),a=i(t.onFailure)),"END"===e.code){l.succeed(B.default.bold.green("Compiled successfully")),console.log(`\n  ${B.default.dim("Watching for changes")}\n`);try{await async function(){const e=$e.appDist+"/src";await pe.pathExists(e)&&(console.warn('[export-ts]: Your rootDir is currently set to "./". Please change your rootDir to "./src".\nexport-ts has deprecated setting tsconfig.compilerOptions.rootDir to "./" as it caused buggy output for declarationMaps and more.\nYou may also need to change your include to remove "test", which also caused declarations to be unnecessarily created for test files.'),await pe.copy(e,$e.appDist,{overwrite:!0}),await pe.remove(e))}(),n&&t.onFirstSuccess?(n=!1,i(t.onFirstSuccess)):o=i(t.onSuccess)}catch(e){}}}))})),He.command("build").describe("Build your project once and exit").option("--entry, -i","Entry module").example("build --entry src/foo.tsx").option("--target","Specify your target environment","browser").example("build --target node").option("--name","Specify name exposed in UMD builds").example("build --name Foo").option("--format","Specify module format(s)","cjs,esm").example("build --format cjs,esm").option("--legacy","Babel transpile and emit ES5.").example("build --legacy").option("--tsconfig","Specify custom tsconfig path").example("build --tsconfig ./tsconfig.foo.json").option("--transpileOnly","Skip type checking").example("build --transpileOnly").option("--extractErrors","Extract errors to ./errors/codes.json and provide a url for decoding.").example("build --extractErrors=https://reactjs.org/docs/error-decoder.html?invariant=").action((async e=>{const t=await rt(e);console.log("> Cleaning dist/ and compiling TS."),await ot(),await async function({transpileOnly:e=!1,watch:t=!1}={}){const s=`--rootDir src/ --outDir dist/ --noEmit false --strict ${e}`.split(" ");console.log(`> Command: tsc ${s.join(" ")}`);const r=await Ye();await r(new Promise((e=>{T.spawn("tsc",s,{stdio:"inherit"}).on("exit",(t=>{if(0!==t)throw Error("TypeScript build failed");e(void 0)}))})),"TS ➡ JS: Compiling with TSC"),t&&T.spawn("tsc",[...s,"--watch","--preserveWatchOutput"],{stdio:"inherit"})}();const r=await We(t),n=await Ye();t.format.includes("cjs")&&await n(at(t.name).catch(ge),"Creating CJS entry file"),t.format.includes("esm")&&await n(it(t.name).catch(ge),"Creating MJS entry file");try{await n(Promise.all(r.map((async e=>{const t=await s.rollup(e);await t.write(e.output)}))),"JS ➡ JS: Compressing and transforming emitted TypeScript output."),await nt()}catch(e){ge(e),process.exit(1)}})),He.command("test").describe("Run jest test runner. Passes through all flags directly to Jest").action((async e=>{process.env.BABEL_ENV="test",process.env.NODE_ENV="test",process.on("unhandledRejection",(e=>{throw e}));const t=process.argv.slice(2);let s={...Ue(0,e.config?Y.default.dirname(e.config):je.appRoot),...Xe.jest};const r=await ce.default.pathExists(je.jestConfig);if(e.config||r){const t=we(e.config||je.jestConfig),r=require(t);s={...s,...r}}if(e.config){let e=t.indexOf("--config");if(-1!==e)t.splice(e,2);else{const s=/--config=.+/;e=t.findIndex((e=>e.match(s))),-1!==e&&t.splice(e,1)}}t.push("--config",JSON.stringify({...s}));const[,...n]=t;W.default.run(n)})),He.command("lint").describe("Run eslint with Prettier").example("lint src test").option("--fix","Fixes fixable errors and warnings").example("lint src test --fix").option("--ignore-pattern","Ignore a pattern").example("lint src test --ignore-pattern test/foobar.ts").option("--max-warnings","Exits with non-zero error code if number of warnings exceed this number",Infinity).example("lint src test --max-warnings 10").option("--write-file","Write the config file locally").example("lint --write-file").option("--report-file","Write JSON report to file locally").example("lint --report-file eslint-report.json").action((async e=>{if(0===e._.length&&!e["write-file"]){const t=["src","test"].filter(ce.default.existsSync);e._=t,console.log(B.default.yellow(`Defaulting to "export-ts lint ${t.join(" ")}"`,'\nYou can override this in the package.json scripts, like "lint": "export-ts lint src otherDir"'))}const t=await async function({pkg:e,rootDir:t,writeFile:s}){const r={extends:["react-app","prettier/@typescript-eslint","plugin:prettier/recommended"],settings:{react:{version:Boolean(function({dependencies:e,devDependencies:t}){return e&&e.react||t&&t.react}(e))?"detect":"999.999.999"}}};if(!s)return r;const n=Y.default.join(t,".eslintrc.js");try{await ce.default.writeFile(n,`module.exports = ${JSON.stringify(r,null,2)}`,{flag:"wx"})}catch(e){return"EEXIST"===e.code?console.error("Error trying to save the Eslint configuration file:",`${n} already exists.`):console.error(e),r}}({pkg:Xe,rootDir:je.appRoot,writeFile:e["write-file"]}),s=new o.CLIEngine({baseConfig:{...t,...Xe.eslint},extensions:[".ts",".tsx",".js",".jsx"],fix:e.fix,ignorePattern:e["ignore-pattern"]}),r=s.executeOnFiles(e._);e.fix&&o.CLIEngine.outputFixes(r),console.log(s.getFormatter()(r.results)),e["report-file"]&&await ce.default.outputFile(e["report-file"],s.getFormatter("json")(r.results)),r.errorCount&&process.exit(1),r.warningCount>e["max-warnings"]&&process.exit(1)})),He.parse(process.argv),exports.isDir=et,exports.isFile=tt;
//# sourceMappingURL=index.cjs.map
