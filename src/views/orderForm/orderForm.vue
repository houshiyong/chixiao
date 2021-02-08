<template>
  <div class="container">
    <!-- 日期选择搜索 -->
    <div class="search">
      <div class="topSearch">
        <van-row>
          <van-col span="18">
            <van-search
              v-model="textGjc"
              shape="round"
              placeholder="请输入手机号查询"
            />
          </van-col>
          <van-col span="2">
            <van-icon
              class="iconSearch"
              name="search"
              @click="iconSearch"
            />
          </van-col>
          <van-col span="4">
            <van-button
              round
              type="info"
              size="small"
              style="margin-top:10px;line-height: 54px;"
              @click="exportDerive"
            >
              导出
            </van-button>
          </van-col>
        </van-row>
      </div>
      <!-- 日期选择 -->
      <div>
        <van-search
          v-model="timeDataA"
          class="vanSearchLeft"
          shape="round"
          :clearable="false"
          :readonly="true"
          @click="dctckA = true"
        />
        <p>至</p>
        <van-search
          v-model="timeDataB"
          class="vanSearchLeft"
          shape="round"
          :clearable="false"
          :readonly="true"
          @click="dctckB = true"
        />
        <p
          class="screen"
          @click="screen"
        >
          筛选
        </p>
      </div>
    </div>
    <div class="segmentation" />
    <!-- 内容区 -->
    <div class="content">
      <van-pull-refresh
        v-model="refreshing"
        @refresh="onRefresh"
      >
        <van-list
          v-model="listLoading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-cell
            v-for="item in list"
            :key="item"
            :title="item"
          />
        </van-list>
      </van-pull-refresh>
    </div>
    <!-- 底层弹出  -->
    <van-action-sheet
      v-model="dctckA"
    >
      <van-datetime-picker
        v-model="currentDateA"
        type="date"
        title="选择年月日"
        :min-date="minDateA"
        :max-date="maxDateA"
        @cancel="dctckA=false"
        @confirm="accomplishA"
      />
    </van-action-sheet>
    <van-action-sheet
      v-model="dctckB"
    >
      <van-datetime-picker
        v-model="currentDateB"
        type="date"
        title="选择年月日"
        :min-date="minDateB"
        :max-date="maxDateB"
        @cancel="dctckB=false"
        @confirm="accomplishB"
      />
    </van-action-sheet>
    <!-- 遮罩层 -->
    <van-overlay :show="overlay">
      <div
        class="wrapper"
        @click.stop
      >
        <van-loading
          class="block"
          type="spinner"
          color="#1989fa"
        />
      </div>
    </van-overlay>
    <!-- 筛选弹窗 -->
    <van-popup
      v-model="popUp"
      round
      position="bottom"
      :style="{ height: '52%' }"
    >
      <div>
        <h6>通道</h6>
        <ul class="tdUl">
          <li
            v-for="(item, index) in liListA"
            :key="index"
            :class="index==indexClassA?'backColorA':''"
            @click="tdLiClick(item, index)"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <van-divider />
      <div>
        <h6>核销状态</h6>
        <ul class="hxztUl">
          <li
            v-for="(item, index) in liListB"
            :key="index"
            :class="index==indexClassB?'backColorB':''"
            @click="hxztLiClick(item, index)"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <van-divider />
      <div class="centerBtn">
        <van-row>
          <van-button
            size="large"
            type="info"
            round
            @click="confirmTgShzt"
          >
            确定
          </van-button>
        </van-row>
      </div>
    </van-popup>
  </div>
</template>

<script>
import img1 from '../../assets/img/tishi.png'
export default {
  data () {
    return {
      isloading: false,
      overlay: false,
      textGjc: '',
      timeDataA: '',
      timeDataB: '',
      // 日期选择
      minDateA: new Date(2020, 0, 1),
      maxDateA: new Date(2025, 10, 1),
      currentDateA: new Date(),
      minDateB: new Date(2020, 0, 1),
      maxDateB: new Date(2025, 10, 1),
      currentDateB: new Date(),
      dctckA: false,
      dctckB: false,
      // 下拉加载，上拉刷新
      list: [],
      listLoading: false,
      finished: false,
      refreshing: false,
      imgUrl: img1,
      // 筛选弹窗
      popUp: false,
      liListA: [
        '全部',
        '畅游洗护',
        '话费卡LT',
        '腾讯大王卡',
        '电信星卡49',
        '移动宝藏卡'
      ],
      liListB: [
        '全部',
        '核销成功',
        '核销失败',
        '兑换中',
        '无卷信息'
      ],
      // 通过
      indexClassA: 0,
      // 核销
      indexClassB: 0
    }
  },
  methods: {
    // icon搜索
    iconSearch () {
      this.overlay = true
      setTimeout(() => {
        this.overlay = false
      }, 600)
    },
    // 导出
    exportDerive () {
      this.$dialog.confirm({
        message: `
          <p><img src="${this.imgUrl}"></p>
          <p style="color:#f56c6c">清点击确认按钮，导出数据</p>
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
    },
    // 左边时间选择完成
    accomplishA (val) {
      console.log(val, 'val')
      var year = val.getFullYear()
      var month = val.getMonth() + 1
      var day = val.getDate()
      var hour = val.getHours()
      var minute = val.getMinutes()
      if (month >= 1 && month <= 9) { month = `0${month}` }
      if (day >= 1 && day <= 9) { day = `0${day}` }
      if (hour >= 0 && hour <= 9) { hour = `0${hour}` }
      if (minute >= 0 && minute <= 9) { minute = `0${minute}` }
      this.timeDataA = `${year}-${month}-${day}`
      this.dctckA = false
    },
    // 右边时间选择完成
    accomplishB (val) {
      console.log(val, 'val')
      var year = val.getFullYear()
      var month = val.getMonth() + 1
      var day = val.getDate()
      var hour = val.getHours()
      var minute = val.getMinutes()
      if (month >= 1 && month <= 9) { month = `0${month}` }
      if (day >= 1 && day <= 9) { day = `0${day}` }
      if (hour >= 0 && hour <= 9) { hour = `0${hour}` }
      if (minute >= 0 && minute <= 9) { minute = `0${minute}` }
      this.timeDataB = `${year}-${month}-${day}`
      this.dctckB = false
    },
    onLoad () {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = []
          this.refreshing = false
        }
        for (var i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        this.listLoading = false
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
    },
    onRefresh () {
      // 清空列表数据
      this.finished = false
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.listLoading = true
      this.onLoad()
    },
    // 筛选
    screen () {
      this.popUp = true
    },
    // 通道点击事件
    tdLiClick (item, index) {
      this.indexClassA = index
      console.log(item, 'aaa')
    },
    // 通道点击事件
    hxztLiClick (item, index) {
      this.indexClassB = index
      console.log(item, 'bbb')
    },
    // 确认
    confirmTgShzt () {
      this.indexClassA = 0
      this.indexClassB = 0
      this.popUp = false
      this.iconSearch()
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  width: 100%;
  height: 128px;
  background-color: #fff;
  padding: 20px 10px 0;
  box-sizing: border-box;
  .topSearch {
    height: 54px;
    .iconSearch{
      line-height: 54px;
      font-size: 20px;
    }
  }
  p {
    float: left;
    text-align: center;
    height: 59px;
    line-height: 59px;
  }
  .vanSearchLeft {
    width: 140px;
    float: left;
    van-field__left-icon {
      display: none;
    }
  }
  .screen {
    width: 60px;
    text-align: center;
    height: 50px;
    font-size: 18px;
    line-height: 50px;
    background: url("../../assets/img/yxj.png") bottom right no-repeat;
    background-size: 10px 10px;

  }
}

.segmentation {
  height: 10px;
  background-color: #eee;
}

.content {
  height: 13rem;
  overflow: auto;
  .van-pull-refresh {
    height: 100%;
    overflow: auto;
  }
  .no-p{
    text-align: center;
    margin-top: 5px;
  }
}
 .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .van-popup {
    padding: 10px;
    box-sizing: border-box;
    h6 {
      margin-left: 0.15rem;
    }
    ul {
      width: 100%;
      height: 85px;
      li {
        float: left;
        color: #333;
        font-size: 14px;
        width: 80px;
        height: 35px;
        line-height: 35px;
        border: 1px solid #e1e1e1;
        border-radius: 0.1rem;
        text-align: center;
        background-color: #fff;
        margin: 0.2rem 0 0 0.15rem;
      }
      .backColorA {
        background-color: #bf9e66;
        color: #fff;
      }
      .backColorB {
        background-color: #bf9e66;
        color: #fff;
      }
    }
    .centerBtn {
        margin: 0 130px;
      }
  }
</style>
