<template>
  <div class="container">
    <div
      class="dui1 dui"
      @click="wechat"
    >
      <img
        :src="dui1"
      >
    </div>
    <div
      class="dui2 dui"
      @click="wechat"
    >
      <img
        :src="dui2"
      >
    </div>
    <div
      class="dui3 dui"
      @click="wechat"
    >
      <img
        :src="dui3"
      >
    </div>
    <div class="imgsBack">
      <van-nav-bar
        title="积分查询"
        left-text="返回"
        left-arrow
        :fixed="true"
        @click-left="onClickLeft"
      />
      <img
        :src="chaxun"
        width="100%"
        height="700px"
      >
    </div>
  </div>
</template>

<script>
import img1 from '../../assets/img/chaxun.jpg'
import img2 from '../../assets/img/dui1.png'
import img3 from '../../assets/img/dui2.png'
import img4 from '../../assets/img/dui3.png'
import img5 from '../../assets/img/wechat.jpg'
export default {
  data () {
    return {
      chaxun: img1,
      dui1: img2,
      dui2: img3,
      dui3: img4,
      imgUrl: img5
    }
  },
  methods: {
    onClickLeft () {
      this.$router.push('/exchange')
    },
    wechat () {
      this.$dialog.confirm({
        message: `
          <p><img width="200px" height="200px" src="${this.imgUrl}"></p>
        `,
        confirmButtonColor: '#409eff',
        cancelButtonColor: '#f56c6c'
      })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        })
    }
  }
}
</script>

<style lang="less" scoped>
.container {
    position: relative;
    overflow: auto;
}
.imgsBack {
    width: 100%;
    height: 700px;
    .van-nav-bar {
        background: rgba(1, 155, 253, 0.5);
    }
}
.dui {
    width: 280px;
    height: 85px;
    position: absolute;
    z-index: 999;
    left: 47px;
    img {
        width: 100%;
        height: 100%;
    }
}
.dui1 {
    top: 350px;
}
.dui2 {
    top: 455px;
}
.dui3 {
    top: 570px;
}
</style>
