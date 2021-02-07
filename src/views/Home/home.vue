<template>
  <div class="container">
    <!-- 展示层 -->
    <div class="tcc">
      <van-popup
        v-model="show"
        class="vanPopup"
      >
        <h3>系统公告</h3>
        <p>
          放假时间：
        </p>
        <p>平台定于2020年2月6日（农历腊月二十五日）—2月18日（农历大年初七）放假，2月19正式上班。</p>
        <p>注意事项：</p>
        <p>1. 提现功能于2月5日16点00分关闭，于2月19日09点开通提现功能。<br>2. 假期期间所有的售后和咨询，可以咨询各区域负责人或留言至客服和负责人微信，看到后会第一时间解决，给您带来的不便，深表歉意，敬请谅解！</p>
        <p>新年寄语：</p>
        <p>平台全体工作人员恭祝大家新春快乐，牛年大吉，万事如意！在新的一年里：大财小财处处发财，大事小事事事顺利！</p>
        <p class="time">
          发布时间：2021/2/5 下午1:05:01
        </p>
        <div class="vanbut">
          <van-button
            block
            type="info"
            @click="close"
          >
            主要按钮
          </van-button>
        </div>
      </van-popup>
    </div>
    <!-- 轮播 -->
    <div class="swipe">
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
    <!-- 公告 -->
    <div class="announcement">
      <van-notice-bar
        left-icon="volume-o"
        text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
      />
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
.vanPopup {
    width: 350px;
    height: 500px;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
    font-size: 16px;
    h3 {
        text-align: center;
        font-size: 18px;
    }
    .time {
        text-align: right;
    }
}
.vanbut {
    margin: 10px 120px;
}
</style>
