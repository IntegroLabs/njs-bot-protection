import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/secrets.ts',
    output: {
        dir: 'dist',
    },
    plugins: [typescript()],
};
