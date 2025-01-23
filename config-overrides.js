// config-overrides.js
module.exports = {
    webpack: (config) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            crypto: require.resolve('crypto-browserify'),
            stream: require.resolve('stream-browserify'),
            http: require.resolve("stream-http"),
            https: require.resolve("https-browserify"),
            zlib: require.resolve("browserify-zlib"),
            assert: require.resolve('assert'),
        };
        return config;
    },
};