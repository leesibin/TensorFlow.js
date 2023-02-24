const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //vue build true : 생성 false : 노생성
  productionSourceMap: false,
  css:{
    extract:true
  },
  configureWebpack: {optimization:{
    splitChunks:false,
  }
}
})
