module.exports = {
    chainWebpack: (config) => {
        config.plugin("html").tap((args) => {
            args[0].title = "SpaceX Missions";
            return args;
        });

        config.module
            .rule("vue")
            .use("vue-loader")
            .loader("vue-loader")
            .tap((options) => {
                options.transpileOptions = {
                    transforms: {
                        dangerousTaggedTemplateString: true
                    }
                };
                return options;
            });
    }
};
