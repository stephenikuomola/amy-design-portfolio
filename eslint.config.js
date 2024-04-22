import globals from 'globals';

import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended
});

export default [
  { languageOptions: { globals: globals.browser } },
  ...compat.extends('airbnb-base', 'prettier'),

  {
    files: ['src/**/*.js'],
    ignores: [
      '**/*.config.js',
      '!**/eslint.config.js',
      '**/*.json',

      // Non-global ignores pattern can ONLY MATCH FILE NAMES. Global pattern are pattern that tend not to have the rule key word coming after or before. 
      'build/**',
      'node_modules/**',
      '.parcel-cache/**'
    ],
    rules: {
      semi: 'error',
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
      'no-const-assign': 'error',
      'no-this-before-super': 'error',
      'constructor-super': 'error',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-keys': 'error',
      'no-unreachable': 'error', 
      'default-case': 'error', 
      'default-case-last': 'error', 
      'no-ex-assign': 'error', 
      'no-sparse-arrays': "error", 
      'no-useless-assignment': "error"
    }
  }
];
