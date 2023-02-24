const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //vue build true : 생성 false : 노생성
  productionSourceMap: false, //Map 파일 유무
  css:{
    extract:true //css 파일 별도 확인
  },
  configureWebpack: {optimization:{
    splitChunks:false, //chunks 파일 별도 확인
  } 
}
})
