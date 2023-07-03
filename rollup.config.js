import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
export default {
    input: 'scripts/comic.ts',
    output: { file: './dist/bundle.js' },
    plugins: [typescript(), nodeResolve({ browser: true })]
};
