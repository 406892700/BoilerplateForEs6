<template>
  <div class="content">
    <Nav/>
    <p class="title">
    我是vue渲染的首页
    </p>
    
  </div>
</template>
<script>
/**
 * 版权信息
 */
import Nav from '../components/Nav';
export default {
  name: 'index',
  data() {
    return {
    }
  },
  created(){
  },

  props: [],

  components: {
    Nav
  },

  computed: {

  },

  methods: {
  }
}
</script>

<style scoped lang="scss">
    $color: #0078d8;
    .title {
        color: $color;
    }
</style>
