const UglifyPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
  devServer: {
    open: true, //项目启动时是否自动打开浏览器，我这里设置为false,不打开，true表示打开
    proxy: {
      "/firecontrol": {
        //代理api
        target: "http://172.16.5.112:6080",
        changeOrigin: true, //是否跨域
        ws: true, // proxy websockets
        pathRewrite: {
          //重写路径
          "^/firecontrol": ""
        }
      }
    }
  },
  publicPath: "./",
  configureWebpack: config => {
    if (process.env.NODE_ENV == "production") {
      // 为生产环境修改配置
      config.mode = "production";
      // 将每个依赖包打包成单独的js文件
      let optimization = {
        minimizer: [
          new UglifyPlugin({
            uglifyOptions: {
              warnings: false,
              compress: {
                drop_console: true,
                drop_debugger: false,
                pure_funcs: ["console.log"]
              }
            },
            sourceMap: false,
            parallel: true
          })
        ]
      };
      Object.assign(config, {
        optimization
      });
    } else {
      // 为开发环境修改配置
      config.mode = "development";
    }
  }
};
