const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    proxy:{
        "/api":{                        //设置跨域变量代号
            target:"https://www.taptap.cn",         //你想要代理的目标源链接
            changeOrigin:true,          //开启代理
            pathRewrite:{               //设置二级
                "^/api": "",           
            },
            headers:{//重点在这里，添加配置项 headers 就可以了
                'Referer':'https://www.taptap.cn'
            }
        },
        "/localapi":{
            target:"https://127.0.0.1:8000",         //你想要代理的目标源链接
            changeOrigin:true,          //开启代理
            pathRewrite:{               //设置二级
                "^/localapi": "",           
            }
        }
    }
  },
  pages:{
    login: {
        entry: 'src/main.js',
        template: 'public/index.html',
        title: '登录'
    },
    display: {
        entry: 'src/pages/display/display.js',
        template: 'public/display.html',
        title: '展示页面'
    }
  }
})
