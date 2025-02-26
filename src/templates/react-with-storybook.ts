import { PackageJson } from 'type-fest';
import { Template } from './template';
import reactTemplate from './react';

const storybookTemplate: Template = {
  dependencies: [
    ...reactTemplate.dependencies,
    '@babel/core',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-info',
    '@storybook/addons',
    '@storybook/react',
    'react-is',
    'babel-loader',
  ],
  name: 'react-with-storybook',
  packageJson: {
    ...reactTemplate.packageJson,
    scripts: {
      ...reactTemplate.packageJson.scripts,
      storybook: 'start-storybook -p 6006',
      'build-storybook': 'build-storybook',
    } as PackageJson['scripts'],
  },
};

export default storybookTemplate;
