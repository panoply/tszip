"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("fs-extra/lib/index.js"),r=require("path"),t=require("camelcase/index.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{"default":e}}var o=a(e),s=a(r),n=a(t);const c=e=>e.replace(/^@.*\//,""),p=o.default.realpathSync(process.cwd());exports.appDirectory=p,exports.clearConsole=function(){process.stdout.write("win32"===process.platform?"[2J[0f":"[2J[3J[H")},exports.external=e=>!e.startsWith(".")&&!s.default.isAbsolute(e),exports.getNodeEngineRequirement=function({engines:e}){return e&&e.node},exports.getReactVersion=function({dependencies:e,devDependencies:r}){return e&&e.react||r&&r.react},exports.removeScope=c,exports.resolveApp=function(e){return s.default.resolve(p,e)},exports.safePackageName=e=>e.toLowerCase().replace(/(^@.*\/)|((^[^a-zA-Z]+)|[^\w.-])|([^a-zA-Z0-9]+$)/g,""),exports.safeVariableName=e=>n.default(c(e).toLowerCase().replace(/((^[^a-zA-Z]+)|[^\w.-])|([^a-zA-Z0-9]+$)/g,""));
//# sourceMappingURL=utils.cjs.map