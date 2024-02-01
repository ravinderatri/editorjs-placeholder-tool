'use strict';


import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: 'src/index.js',
    output: {
        file: 'src/editorjs-placeholder-tool.js',
        format: 'cjs',
    },
    plugins: [nodeResolve(), commonjs()],
};