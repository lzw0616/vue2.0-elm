<template>
  <div id="app">
  <v-header :seller="seller">
  </v-header>
    <div class="tab">
      <div class="tab-item">
         <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import header from './components/header/header.vue'
import { urlParse } from './common/js/util'
export default {
  data () {
    return {
      seller: {
        id: (() => {
          const queryParam = urlParse()
          console.log('queryParam', queryParam)
          return queryParam.id
        })()
      }
    }
  },
  created () {
    this.$http.get('/api/seller').then(function (response) {
      response = response.body
      if (response.errno === 0) {
        this.seller = response.data
      }
    }, () => {
      console.log('请求失败')
    })
  },
  components: {
    'v-header': header
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus">
  #app
    .tab
      display:flex
      width:100%
      height:40px
      line-height:40px
      .tab-item
        flex:1
        text-align:center
        & > a
          display:block
          font-size:14px
          color:rgb(77,85,93)
        .router-link-active
          color:rgb(240,20,20)
        // &>a:hover//pc端才有的样式
            // color:blue
</style>
