/*
 * @Description: Description
 * @Author: LinSongjian
 * @LastEditors: LinSongjian
 * @LastEditTime: 2019-10-10 17:57:31
 */
const path = require("path");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  devServer: {
    proxy: {
      "/sys": {
        target: "http://120.236.186.208:8090/sys", //192.168.31.2
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/sys": ""
        }
      },
      "/supervisor/filesubmit": {
        target: "http://120.236.186.208:8090/supervisor/filesubmit",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/supervisor/filesubmit": ""
        }
      },
      "/supervisor/projectUser": {
        target: "http://120.236.186.208:8090/supervisor/projectUser",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/supervisor/projectUser": ""
        }
      },
      '/supervisor/billing': {
        target: 'http://120.236.186.208:8090/supervisor/billing',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/supervisor/billing': ''
        }
      },
      '/supervisor': {
        target: 'http://120.236.186.208:8091/supervisor', //192.168.31.242   //120.236.186.208
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/supervisor': ''
        }
      },
      '/fileoperate': {
        target: 'http://120.236.186.208:8091/fileoperate',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/fileoperate': ''
        }
      },
      '/pmdir': {
        target: 'http://120.236.186.208:8091/pmdir',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/pmdir': ''
        }
      },
      '/wsmessage': {
        target: 'http://120.236.186.208:8091/wsmessage',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/wsmessage': ''
        }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set("@", path.join(__dirname, "src"));
  }
};
