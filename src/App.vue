<template>
  <div class="page">
    <cube-button>我是来测试的</cube-button>
  </div>

</template>
<script type="text/ecmascript-6">
  import { Button } from 'cube-ui'

  export default {
    name: 'App',
    created() {
      window.summerready = function() {}
    },
    components: {
      CubeButton: Button
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
</style>

