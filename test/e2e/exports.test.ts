import { readFileSync } from 'fs';
import { join, resolve } from 'path';
import * as shell from 'shelljs';
import * as util from '../utils/fixture';
import { execWithCache } from '../utils/shell';

shell.config.silent = false;

const testDir = 'e2e';
const fixtureName = 'build-exports';
const stageName = `stage-${fixtureName}`;
const stageDir = resolve(process.cwd(), stageName);

describe('tsdx build :: exports', () => {
  beforeAll(() => {
    util.teardownStage(stageName);
    util.setupStageWithFixture(testDir, stageName, fixtureName);
  });

  it('should compile files into a dist directory', () => {
    const output = execWithCache('node ../dist/index.mjs build');

    expect(shell.test('-f', 'dist/index.mjs')).toBeTruthy();
    expect(shell.test('-f', 'dist/index.d.ts')).toBeTruthy();
    expect(output.code).toBe(0);
  });

  describe('library exports', () => {
    const json = readFileSync(join(stageDir, 'package.json'), 'utf-8');

    it('should set package.json `exports` field', () => {
      const packageJson = JSON.parse(json);
      expect(packageJson.exports).toBeTruthy();
    });

    it('should export `my-package/path/to/module` as my-package/path/to/module.mjs', () => {
      const packageJson = JSON.parse(json);
      expect(packageJson.exports['.']).toEqual('./dist/index.mjs');
      expect(packageJson.exports['./*']).toEqual('./dist/*.mjs');
    });

    it('should export named members properly', () => {
      const mjs = join(stageDir, 'exports.named.mjs');
      const output = execWithCache(`node ${mjs}`);
      expect(output.code).toBe(0);
    });

    it('should export default members properly', () => {
      const mjs = join(stageDir, 'exports.default.mjs');
      const output = execWithCache(`node ${mjs}`);
      expect(output.code).toBe(0);
    });
  });

  // afterAll(() => {
  //   util.teardownStage(stageName);
  // });
});
