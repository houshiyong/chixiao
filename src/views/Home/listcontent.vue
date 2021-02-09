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
    <!-- 分页 -->
    <van-tabs v-model="activeName">
      <div class="details_huibar" />
      <van-tab
        title="兑换"
        style="padding-bottom: 2rem;"
      >
        <div
          id="areaPassage"
          class="details_noticep"
        >
          <p>
            话费卡LT支持地区：<span
              id="area_list_"
              style="color: #118c20;"
            >全国</span>
          </p>
        </div>
        <div
          id="tip1_P"
          class="details_noticep"
        >
          <p>注：手机发送JFCX发送到10010查询积分,然后点击以下链接跳转到官网兑换。</p>
        </div>
        <div class="details_tab_content">
          <div
            class="details_jifen_block details_tab_content_div"
          >
            <div class="details_noticep product-change clear-margin">
              <p class="produce_rate">
                产品比例：<span>100分=1面值</span>
              </p>
              <p id="RelateScoreStrId">
                可兑分值：2000/3000/5000/10000
              </p><!-- 可兑换积分 -->
            </div>
            <div class="details_noticep clear-margin">
              <van-cell
                style="margin-right:45%"
                @click="tip"
              >
                注意事项
              </van-cell>

              <van-popup v-model="matters">
                <h3>注意事项</h3>
                <div class="select_scroll">
                  <span>注：1.积分兑换成功后,填写卡密上报,平台自动核销。</span>
                  <span>2.格式：逗号分隔每个卡券，卡券(收到短信内容的链接后的数字)，一次最多上传10张</span>
                  <span>3.收到带链接短信后，直接输入链接后的数字核销即可，请勿点击领取，领取后将核销不成功，并无法处理</span>
                </div>
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
                兑换教程
              </van-cell>

              <van-popup v-model="matters">
                <h3>注意事项</h3>
                <div class="select_scroll">
                  <span>注：1.积分兑换成功后,填写卡密上报,平台自动核销。</span>
                  <span>2.格式：逗号分隔每个卡券，卡券(收到短信内容的链接后的数字)，一次最多上传10张</span>
                  <span>3.收到带链接短信后，直接输入链接后的数字核销即可，请勿点击领取，领取后将核销不成功，并无法处理</span>
                </div>
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
                id="model2_1"
                class="step-box"
              >
                <p>第一步：</p><h5>使用兑换号码发送短信或扫码，并根据提示完成积分扣减。</h5>
              </div>
              <!-- <p>注：通过换积分的手机号码发送JF至10658999，查询积分后，根据用户现有积分余额兑换商品。</p> -->
            </div>
            <div id="divId">
              <div class="jifen_list">
                <div class="jifen_quan">
                  <a><img src="../../assets/img/1.png"></a>
                </div><div class="jifen_info">
                  <a><p class="jifen_info_01">2000积分-20</p><p class="jifen_info_02" /></a>
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
              <div class="jifen_list">
                <div class="jifen_quan">
                  <a><img src="../../assets/img/1.png"></a>
                </div><div class="jifen_info">
                  <a><p class="jifen_info_01">2000积分-20</p><p class="jifen_info_02" /></a>
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
              <div class="jifen_list">
                <div class="jifen_quan">
                  <a><img src="../../assets/img/1.png"></a>
                </div><div class="jifen_info">
                  <a><p class="jifen_info_01">2000积分-20</p><p class="jifen_info_02" /></a>
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
              <div class="jifen_list">
                <div class="jifen_quan">
                  <a><img src="../../assets/img/1.png"></a>
                </div><div class="jifen_info">
                  <a><p class="jifen_info_01">2000积分-20</p><p class="jifen_info_02" /></a>
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
              <div class="jifen_list">
                <div class="jifen_quan">
                  <a><img src="../../assets/img/1.png"></a>
                </div><div class="jifen_info">
                  <a><p class="jifen_info_01">2000积分-20</p><p class="jifen_info_02" /></a>
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
        title="核销"
        style="padding-bottom:2rem;"
      >
        <div
          id="areaPassage"
          class="details_noticep"
        >
          <p>
            话费卡LT支持地区：<span
              id="area_list_"
              style="color: #118c20;"
            >全国</span>
          </p>
        </div>
        <div
          id="tip1_P"
          class="details_noticep"
        >
          <p>注：手机发送JFCX发送到10010查询积分,然后点击以下链接跳转到官网兑换。</p>
        </div>
        <div class="details_tab_content">
          <div
            class="details_jifen_block details_tab_content_div"
          >
            <div class="details_noticep clear-margin">
              <van-cell
                style="margin-right:45%"
                @click="tip"
              >
                注意事项
              </van-cell>
              <van-popup v-model="matters">
                <h3>注意事项</h3>
                <div class="select_scroll">
                  <span>注：1.积分兑换成功后,填写卡密上报,平台自动核销。</span>
                  <span>2.格式：逗号分隔每个卡券，卡券(收到短信内容的链接后的数字)，一次最多上传10张</span>
                  <span>3.收到带链接短信后，直接输入链接后的数字核销即可，请勿点击领取，领取后将核销不成功，并无法处理</span>
                </div>
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
                兑换教程
              </van-cell>
              <van-popup v-model="matters">
                <h3>注意事项</h3>
                <div class="select_scroll">
                  <span>注：1.积分兑换成功后,填写卡密上报,平台自动核销。</span>
                  <span>2.格式：逗号分隔每个卡券，卡券(收到短信内容的链接后的数字)，一次最多上传10张</span>
                  <span>3.收到带链接短信后，直接输入链接后的数字核销即可，请勿点击领取，领取后将核销不成功，并无法处理</span>
                </div>
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
                id="model2_1"
                class="step-box"
              >
                <p>第二步：</p><h5>确认积分扣减后，点击【核销或上报】输入扣减卡号与卡密系统自动核销。</h5>
              </div>
              <div v-show="isShowChart">
                <van-dropdown-menu>
                  <van-dropdown-item
                    v-model="value1"
                    :options="option1"
                  />
                </van-dropdown-menu>
                <div class="field">
                  <van-field
                    v-model="digit"
                    type="digit"
                    placeholder="请输入卡号(例:981806951593754)"
                  />
                  <van-field
                    v-model="password"
                    type="password"
                    placeholder="请输入卡密(例:9801263736498995392)"
                  />
                </div>
                <p
                  class="no2"
                  @click="click"
                >
                  {{ message }}
                </p>
                <van-button
                  class="tj"
                  type="primary"
                  size="large"
                  style="border-radius:5px;margin-bottom:0.5rem"
                  @click="tijiao"
                >
                  提交
                </van-button>
              </div>
              <div v-show="isShowTable">
                <textarea
                  id="duoge"
                  type="tel"
                  class="duoge"
                  maxlength="1000"
                  placeholder="请输入卡号#卡密(例:981806951593754#9801263736498995392,981806951593754#9801263736498995393)"
                  style="vertical-align: top; outline: none;"
                />
                <p
                  class="no2"
                  @click="click"
                >
                  {{ message }}
                </p>
                <van-button
                  class="zl"
                  type="primary"
                  size="large"
                  style="border-radius:5px;margin-bottom:0.5rem"
                >
                  整理卡卷
                </van-button>
                <van-button
                  class="pl"
                  type="primary"
                  size="large"
                  style="border-radius:5px;"
                >
                  批量上报
                </van-button>
              </div>
            </div>
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
        { text: '请选择面值', value: 0 },
        { text: '2000积分-20', value: 1 },
        { text: '3000积分-30', value: 2 },
        { text: '5000积分-50', value: 3 },
        { text: '10000积分-100', value: 4 }
      ],
      digit: '',
      password: '',
      isShowChart: true,
      isShowTable: false,
      message: '戳我试试单个核销'
    }
  },
  created () {
    // this.showPopup()
  },
  methods: {
    tijiao () {
      if (this.digit == '' || this.password == '') {
        this.$toast.fail('提交失败')
        return
      }
      this.$dialog.alert({
        title: '提示',
        message: `
          <p><img src="${this.imgUrl}"></p>
          <p>提交成功：0个，提交失败：1个，</p>
        `
      }).then(() => {
        // on close
      })
    },
    tip () {
      this.matters = true
    },
    // 关闭弹出层
    close () {
      this.matters = false
    },
    // 切换按钮
    click () {
      if (this.isShowChart) {
        this.message = '戳我试试批量核销'
      } else {
        this.message = '戳我试试单个核销'
      }
      this.isShowChart = !this.isShowChart
      this.isShowTable = !this.isShowTable
    }

  }
}
</script>

<style lang="less" scoped>

.container {
  height: 650px;
  overflow: auto;
  .details_tab {
    width: 100%;
    overflow: hidden;
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
.details_tab ul li {
    width: 50%;
    float: left;
    text-align: center;
    height: 0.86rem;
    line-height: 0.86rem;
    -webkit-box-sizing: border-box;
}
.details_tab ul li:first-child {
    border-right: 1px solid #e1e1e1;
}
.details_tab ul li:last-child p {
    background-color: #fff;

}
.details_tab ul li:first-child.details_tab_active p {
    background-color: #fe6f5f;

}
.details_huibar {
    width: 100%;
    overflow: hidden;
    background-color: #f6f6f6;
    height: 0.2rem;
}
.details_noticep {
    margin: 0rem 0.40rem;
}
.details_noticep:first-child{
  margin-top:0.2rem;
}
.details_jifen_block {
    margin-top: 0.2rem !important;
    margin: 0 0.30rem;
}

.details_noticep.product-change {
    background: #f6f6f6;
    font-size: 0.26rem;
    padding: 0.2rem 0rem 0.2rem 0.4rem;
}
.details_noticep.product-change p {
    color: #333;
        font-size: 0.32rem;
}
.clear-margin {
    margin-left: 0 !important;
    margin-right: 0 !important;
}
.details_noticep .step-box {
    color: #333;
    clear: both;
    background: #f6f6f6;
    padding: 0.2rem 0rem 0.2rem 0.4rem;
}
.details_noticep .step-box p {
    font-size: 0.32rem;
}
.details_noticep .step-box h5 {
    font-size: 0.32rem;
    margin-top: 0.1rem;
}
.details_jifen_block .jifen_list {
    // width: 100%;
    overflow: hidden;
    padding: 0.3rem 0 0.18rem;
    border-bottom: 2.5px dashed #e1e1e1;
    .jifen_quan {
    float: left;
    margin-left: 0.26rem;
    width: 1.70rem;
    height: 1.04rem;
}
    .jifen_quan img {
    width: 100%;
    overflow: hidden;
    padding: 0rem 0 0.41rem;
    height: 100%;
}
    .jifen_info {
    float: left;
    margin-left: 0.31rem;
    width: 2.71rem;
    .jifen_info_01 {
    color: #333;
    font-size: 0.4rem;
}
.jifen_info_02 {
    color: #db1e26;
    font-size: 0.24rem;
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
}
.van-dropdown-menu__bar{
height: 1.5rem;
}
.field{
  width: 100%;
  padding-top: 0.5rem;
  .van-field{
    width: 100%;
    height: 1rem;
    line-height: 0.5rem;
    background-color: #f6f6f6;
    word-wrap:break-word;
  }
}
.no2{
  margin: 0.5rem 0;
  color:red;
}
.duoge {
    border: none;
    margin-top:0.5rem;
    width: 9rem;
    height: 4rem;
    background-color: #f6f6f6;
    padding: 0.3rem 0.2rem;
    font-size: .28rem;
}
}

</style>
