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
          <van-image
            height="160px"
            fit="cover"
            :src="image"
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 内容区 -->
    <div class="inquireExchange">
      <!-- 手机号 -->
      <van-cell-group>
        <van-field
          v-model.trim="mobile"
          label="手机号"
          :error-message="errMsgMobile"
          placeholder="请输入手机号"
          @blur="checkMobile()"
        />
      </van-cell-group>
      <!-- 查询兑换按钮 -->
      <div class="ieBtn">
        <div
          class="ieBtnLeft"
          @click="IntegralQuery"
        >
          积分查询
        </div>
        <div
          class="ieBtnRight"
          @click="ksdh"
        >
          开始兑换
        </div>
      </div>
      <!-- 流程图 -->
      <div
        v-if="play"
        class="lct"
      >
        <van-image
          width="100%"
          height="200px"
          fit="scale-down"
          :src="liucheng"
        />
      </div>
      <div v-else>
        <div
          v-for="(item, index) in 3"
          :key="index"
          class="duihuan"
        >
          <div class="dhTop">
            <div class="dhTopLeft">
              <img
                width="80px"
                height="50px"
                :src="shopping"
              >
            </div>
            <div class="dhTopRight">
              去兑换
            </div>
          </div>
          <div class="dhBottom">
            可兑分值: 360/720/1080/1320/1440/1800/2160/2160/2400/2400/2640/3000/3000/4200/5520/8160
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from '../../assets/img/1.png'
import img2 from '../../assets/img/2.png'
import img3 from '../../assets/img/3.png'
import img4 from '../../assets/img/liucheng.jpg'
import img5 from '../../assets/img/tishi.png'
import img6 from '../../assets/img/H000018.jpg'

export default {
  data () {
    return {
      images: [
        img1,
        img2,
        img3
      ],
      liucheng: img4,
      mobile: '18713911471',
      // 错误数据
      errMsgMobile: '',
      tishi: img5,
      play: true,
      shopping: img6
    }
  },
  methods: {
    // 手机号校验
    checkMobile () {
      if (!this.mobile) {
        this.errMsgMobile = '请输入手机号'
        return false
      }
      if (!/^1[3-9]\d{9}$/.test(this.mobile)) {
        this.errMsgMobile = '手机号格式错误'
        return false
      }
      this.errMsgMobile = ''
    },
    // 积分查询
    IntegralQuery () {
      this.$router.push('/integralQuery')
    },
    // 开始兑换
    ksdh () {
      if (!this.mobile) {
        this.$dialog.alert({
          message: `
          <p><img width="85px" src="${this.tishi}"></p>
          <p style="color:#999999; font-size:18px;">请输入手机号！</p>
        `,
          confirmButtonColor: '#409eff'
        })
      } else {
        this.play = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  height: 800px;
  overflow: auto;
  padding-bottom: 200px;
  box-sizing: border-box;
}
.inquireExchange {
  padding: 25px 20px 0;
  box-sizing: border-box;
  .van-field {
    border: 0.5px solid #E4E7ED;
    border-radius: 5px;
  }
  .ieBtn {
    height: 50px;
    margin-top: 20px;
    color: #fff;
    font-size: 18px;
    .ieBtnLeft {
      width: 45%;
      height: 50px;
      float: left;
      background-color: #1989fa;
      border-radius: 5px;
      line-height: 50px;
      text-align: center;
    }
    .ieBtnRight {
      width: 45%;
      height: 50px;
      float: right;
      border-radius: 5px;
      background-color: #ff976a;
      line-height: 50px;
      text-align: center;
    }
  }
  .lct {
    height: 200px;
    width: 100%;
    margin-top: 30px;
  }
  .duihuan {
    margin-top: 17px;
    height: 130px;
    border-radius: 9px;
    padding: 10px 15px 0;
    box-sizing: border-box;
    background-color: #f6f6f6;
    .dhTop {
      height: 50px;
      .dhTopLeft {
        width: 80px;
        height: 50px;
        float: left;
        img {
          border-radius: 5px;
        }
      }
      .dhTopRight {
        float: right;
        width: 70px;
        height: 35px;
        color: #fff;
        text-align: center;
        line-height: 35px;
        margin: 5px 5px 0 0;
        border-radius: 5px;
        background: url('../../assets/img/saoma_btn_bg.png') no-repeat center;
      }
    }
    .dhBottom {
      height: 60px;
      margin-top: 10px;
      word-break: break-all;
      font-size: 14px;
      color: rgb(43, 39, 39);
    }
  }
}
</style>
