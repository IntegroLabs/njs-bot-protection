import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/visitor_bot.ts',
    output: {
        dir: 'dist',
    },
    plugins: [typescript()],
};
