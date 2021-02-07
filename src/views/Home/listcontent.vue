<template>
  <div class="container">
    <!-- 轮播 -->
    <div
      class="swipe"
      style="width:100%;"
    >
      <van-swipe
        :autoplay="3000"
        :loop="true"
        height="160"
      >
        <van-swipe-item
          v-for="(image, index) in images"
          :key="index"
        >
          <!-- <img v-lazy="image"> -->
          <van-image
            height="200"
            fit="contain"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 按钮 -->
    <div class="details_tab">
      <ul>
        <li class="details_tab_active">
          <p class="duiHuanTab_P_">
            兑换
          </p>
        </li>
        <li class="">
          <p class="recharge_btn_P_">
            核销
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false,
      images: [
        '../../assets/img/1.png',
        '../../assets/img/2.png',
        '../../assets/img/3.png'
      ]
    }
  },
  created () {
    // this.showPopup()
  },
  methods: {
    // 弹出层
    showPopup () {
      this.show = true
    },
    // 关闭弹出层
    close () {
      this.show = false
    }
  }
}
</script>

<style lang="less" scoped>

.container {
  height: 650px;
  overflow: auto;
}
.details_tab {
    width: 100%;
    overflow: hidden;
}
.details_tab ul li {
    width: 50%;
    float: left;
    text-align: center;
    height: 0.86rem;
    line-height: 0.86rem;

}
.details_tab ul li:first-child {
    border-right: 1px solid #e1e1e1;
}
.details_tab ul li:last-child p {
    background-color: #fff;
    width: 58%;
}
.details_tab ul li:first-child.details_tab_active p {
    background-color: #fe6f5f;
    width: 88%;
}
</style>
