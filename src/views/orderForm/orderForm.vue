<template>
  <div class="container">
    <!-- 日期选择搜索 -->
    <div class="search">
      <van-search
        v-model="textGjc"
        shape="round"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
      >
        <template #action>
          <div
            class="derive"
            @click="onSearch"
          >
            导出
          </div>
        </template>
      </van-search>
      <!-- 日期选择 -->
      <div>
        <van-search
          v-model="timeDataA"
          class="vanSearchLeft"
          shape="round"
          :clearable="false"
          :readonly="true"
          @click="dctck = true"
        />
        <p>至</p>
        <van-search
          v-model="timeDataB"
          class="vanSearchLeft"
          shape="round"
          :clearable="false"
          :readonly="true"
          @click="dctck = true"
        />
        <p class="screen">
          筛选
        </p>
      </div>
    </div>
    <div class="segmentation" />
    <!-- 内容区 -->
    <!-- <div class="content">
      <p class="no-p">
        没有更过了
      </p>
    </div> -->
    <!-- 日期选择 -->
    <!-- <van-datetime-picker
      v-model="currentDate"
      type="date"
      title="选择年月日"
      :min-date="minDate"
      :max-date="maxDate"
    /> -->
    <!-- 底层弹出  -->
    <van-action-sheet
      v-model="dctck"
    >
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
        @cancel="cancel"
        @confirm="accomplish"
        @change="dataSelect"
      />
    </van-action-sheet>
  </div>
</template>

<script>
export default {
  data () {
    return {
      textGjc: '',
      timeDataA: '2021-1-1',
      timeDataB: '2021-1-1',
      // 日期选择
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      dctck: false
    }
  },
  methods: {
    onSearch () {

    },
    onSelect (item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.dctck = false
    },
    // 完成
    accomplish () {
      console.log('ok')
      this.dctck = false
    },
    // 取消
    cancel () {
      this.dctck = false
    },
    dataSelect () {

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
  height: 800px;
  overflow: auto;
  .no-p{
    text-align: center;
    margin-top: 5px;
  }
}
</style>
