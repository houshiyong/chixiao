<template>
  <div class="container">
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
    <van-tabs
      v-model="activeName"
      style="padding-bottom:2rem;"
    >
      <van-tab
        title="上报"
        name="a"
      >
        <div class="details_tab_content">
          <div class="details_hexiao_form details_tab_content_div">
            <div
              id="areaPassage"
              class="county-area"
            >
              <p>
                腾讯大王卡支持地区：<span
                  id="area_list_"
                  style="color: #118c20;"
                >全国</span>
              </p>
            </div>
            <div class="details_bar" />
            <div class="details_noticep product-change clear-margin">
              <p class="produce_rate">
                套餐资费：40G王卡专属流量，超100款app免流量，套餐外流量低至1元1G，国内接听免费，通话0.1元/分钟（含来电显示），月租19元，随机靓号免费送。办卡年龄16-50周岁。
              </p>
              <p class="produce_rate">
                领卡流程： 提交订单—包邮到家—收卡激活（携带身份证首充50元后激活）—领取福利（全程无需任何费用）。
              </p>
              <p
                id="RelateScoreStrId"
                class=""
              />
            </div>
            <!-- 可兑换积分 -->

            <div class="details_noticep clear-margin">
              <van-cell
                style="margin-right:45%"
                @click="tip"
              >
                视频介绍
              </van-cell>
              <van-popup v-model="matters">
                <van-button
                  block
                  type="info"
                  color="#384355"
                  @click="close"
                >
                  确定
                </van-button>
              </van-popup>
              <van-cell
                @click="tip"
              >
                点我分享
              </van-cell>
              <van-popup v-model="matters">
                <van-button
                  block
                  type="info"
                  color="#384355"
                  @click="close"
                >
                  确定
                </van-button>
              </van-popup>

              <div
                id="model1_1"
                class="step-box"
              >
                <p>第一步：</p>
                <h5>请用手机进行扫码，严格按照提示操作，填写姓名、手机号、身份证、收货地址、详细地址，点击立即领卡即可。号码激活成功系统会自动发放佣金。</h5>
              </div>
            </div>

            <!--新加列表-->
            <div
              id="divId"
              class="details_jifen_block_01"
              style=""
            >
              <div class="jifen_list_01">
                <div class="jifen_quan_01">
                  <img src="../../assets/img/88.png">
                </div>
                <div class="jifen_info_01">
                  <a
                    target="_blank"
                    onclick="kaiKa()"
                  >
                    <p class="jifen_info_01_01">腾讯大王卡</p>
                    <p
                      id="num"
                      class="jifen_info_02_02"
                    >点我赚佣金36.00</p>
                  </a>
                </div>

                <van-button
                  color="linear-gradient(to right, #ff6034, #ee0a24)"
                  size="mini"
                  text="显示遮罩层"
                  @click="show = true"
                >
                  点我扫码
                </van-button>
                <van-overlay
                  :show="show"
                  @click="show = false"
                >
                  <div
                    class="wrapper"
                  >
                    <div class="block">
                      <img
                        src="../../assets/img/1.png"
                        alt=""
                      >
                    </div>
                  </div>
                </van-overlay>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab
        title="记录"
        name="b"
      >
        <div class="allOrderTit2">
          <div class="aui-code-box">
            <van-dropdown-menu>
              <van-dropdown-item
                v-model="value1"
                :options="option1"
              />
            </van-dropdown-menu>
            <van-search
              v-model="gjc"
              placeholder="请输入搜索关键词"
            />
          </div>
          <div class="allOrderTit_left">
            123
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false,
      matters: false,
      images: [
        '../../assets/img/1.png',
        '../../assets/img/2.png',
        '../../assets/img/3.png'
      ],
      activeName: 'a',
      value1: 0,
      option1: [
        { text: '所有', value: 0 },
        { text: '检测中', value: 1 },
        { text: '查无订单', value: 2 },
        { text: '成功订单', value: 3 },
        { text: '失败订单', value: 4 }
      ],
      gjc: ''
    }
  },
  created () {
    // this.showPopup()
  },
  methods: {
    tip () {
      this.matters = true
    },
    // 关闭弹出层
    close () {
      this.matters = false
    }
  }
}
</script>

<style lang="less" scoped>

.container {
  height: 650px;
  overflow: auto;
  .details_hexiao_form {
    margin: 0.30rem 0.30rem 0;
}
  .details_bar {
    width: 100%;
    overflow: hidden;
    height: 0.2rem;
}
  .details_noticep.product-change {
    background: #f6f6f6;
    font-size: 0.26rem;
    padding: 0.2rem 0rem 0.2rem 0.4rem;
    p {
    color: #333;
    font-size: 0.28rem;
    }
}
.clear-margin {
    margin-left: 0 !important;
    margin-right: 0 !important;
}
.van-cell{
  width: 25%;
  height: 0.8rem;
  display: inline-block;
  margin-bottom: 0.2rem;
}
.van-cell__value--alone{
    color: red;

}
.van-popup{
  width: 80%;
  border-radius: 10px;
  h3{
    text-align: center;
    margin-top:0.3rem;
    margin-bottom: 0.2rem;
  }
  .select_scroll span{
    width: 7rem;
    color: #999999;
    font-size: 0.3rem;
    margin: 0.1rem 0.38rem 0;
    line-height: 1.6em;
    display: inline-block;
    white-space: normal;
}
  .van-button{
    width: 3rem;
    height: .7rem;
    margin-left: 2.2rem;
    margin-top: 1rem;
    bottom: 0.5rem;
    border-radius: 0.08rem;
    color: #bf9e66;
    font-size: 0.32rem;
  }
}
.details_noticep .step-box {
    color: #333;
    clear: both;
    background: #f6f6f6;
    padding: 0.2rem 0rem 0.2rem 0.4rem;
}
.details_jifen_block_01 {
    margin: 0 0.20rem;
    .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
.block {
    width: 6rem;
    height: 6rem;
    background-color: #fff;
    img{
      width: 5rem;
      height: 5rem;
      margin-top:0.5rem;
      margin-left: 0.5rem;
    }
  }
    .jifen_list_01 {
    width: 100%;
    overflow: hidden;
    padding: 0.18rem 0 0.18rem;
    border-bottom: 2.5px dashed #e1e1e1;
    .jifen_quan_01 {
    float: left;
    /* margin-left: 0.26rem; */
    width: 1.70rem;
    height: 1.04rem;
    img {
    width: 100%;
    overflow: hidden;
    padding: 0rem 0 0.41rem;
    height: 100%;
    }
    }
    .jifen_info_01 {
    float: left;
    margin-left: 0.2rem;
    width: 3.2rem;
   .jifen_info_01_01 {
    color: #333;
    font-size: 0.28rem;
    line-height: 1.9em;
        margin-left: 0.31rem;
    }
    .jifen_info_02_02 {
    color: #db1e26;
    font-size: 0.24rem;
    line-height: 1.9em;
        margin-left: 0.31rem;
}
}
}
.van-button{
  width: 1.5rem;
  height: 0.8rem;
  font-size: 12px;
  border-radius: 5px;
  float: right;
  margin-right: 0.24rem;
  line-height:1.04rem;
}
}
.allOrderTit2 {
    width: 100%;
    padding: 0.28rem 0 0.27rem;
    top: 0;
    z-index: 999;
    .aui-code-box {
    padding: .1rem 0 0.3rem 0;
    margin-left: .3rem;
    .van-dropdown-menu{
      width: 50%;
      display: inline-block;
    }
    .van-search{
      width: 40%;
      // display: inline-block;

    }
}
}
}
</style>
