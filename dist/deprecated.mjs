import*as o from"fs-extra/lib/index.js";import s from"fs-extra/lib/index.js";import t from"path";import"camelcase/index.js";const e=s.realpathSync(process.cwd()),r=function(o){return t.resolve(e,o)},a={appPackageJson:r("package.json"),tsconfigJson:r("tsconfig.json"),testsSetup:r("test/setupTests.ts"),appRoot:r("."),appSrc:r("src"),appErrorsJson:r("errors/codes.json"),appErrors:r("errors"),appDist:r("dist"),appConfig:r("export-ts.config.js"),jestConfig:r("jest.config.js"),progressEstimatorCache:r("node_modules/.cache/.progress-estimator")};async function i(){const s=a.appDist+"/src";await o.pathExists(s)&&(console.warn('[export-ts]: Your rootDir is currently set to "./". Please change your rootDir to "./src".\nexport-ts has deprecated setting tsconfig.compilerOptions.rootDir to "./" as it caused buggy output for declarationMaps and more.\nYou may also need to change your include to remove "test", which also caused declarations to be unnecessarily created for test files.'),await o.copy(s,a.appDist,{overwrite:!0}),await o.remove(s))}export{i as moveTypes};
export default {};
//# sourceMappingURL=deprecated.mjs.map