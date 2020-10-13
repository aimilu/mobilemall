<template>
  <!--  ref/children-->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  // 引入better-scroll
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    // 保存变量的数据
    data() {
      return {
        // 变量默认为null
        scroll: null,
        message: '哈哈'
      }
    },
    mounted() {
      //1.创建BScroll对象
      //vue不建议使用document.querySelector('.wrapper')获取元素,使用ref
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        taps: true,
        observeDOM: true,
        probeType: this.probeType,
        pullUpLoad:this.pullUpLoad
      })

      // 2.监听滚动位置
      this.scroll.on('scroll',(position) => {
        // console.log(position);
        this.$emit('scroll',position)
      })

      // 3.监听上拉事件
      this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp')
      })
    },
    methods: {
      //es6支持传递默认值，将scroll封装方法
      scrollTo(x, y, time = 300) {
        this.scroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      }
    }
  }
</script>

<style scoped>

</style>
