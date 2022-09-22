const {webpack} = require("next/dist/compiled/webpack/webpack");
module.exports = {
    webpack: (config, { isServer, buildId }) => {
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env': {
                    BUILD_ID: JSON.stringify(buildId),
                }
            }),
        );


        if (isServer) {
            require('./scripts/generate-layout')();
        }

        return config;
    },
    async redirects() {
    return []
},
    experimental: {
        scrollRestoration: true,
    }
};
