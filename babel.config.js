module.exports = {
    presets: [
        ['@babel/preset-env', {targets: {esModule: true}}],
        ['@babel/preset-react', {runtime: 'automatic'}],
    ],
};