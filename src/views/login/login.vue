<template>
  <div class="container">
    <van-nav-bar
      title="登 录"
    />
    <van-cell-group>
      <van-field
        v-model.trim="loginForm.mobile"
        label="手机号"
        :error-message="errMsg.mobile"
        placeholder="请输入手机号"
        @blur="checkMobile()"
      />
      <van-field
        v-model.trim="loginForm.code"
        type="password"
        label="密码"
        :error-message="errMsg.code"
        placeholder="请输入密码"
        @blur="checkCode()"
      />
    </van-cell-group>
    <div class="btn_box">
      <van-button
        type="info"
        block
        round
        @click="login()"
      >
        登 录
      </van-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 错误数据：
      errMsg: {
        mobile: '',
        code: ''
      },
      // 表单数据
      loginForm: {
        mobile: '13911111111',
        code: '246810'
      }
    }
  },
  created () {
    // this.getFrom()
  },
  methods: {
    checkMobile () {
      if (!this.loginForm.mobile) {
        this.errMsg.mobile = '请输入手机号'
        return false
      }
      if (!/^1[3-9]\d{9}$/.test(this.loginForm.mobile)) {
        this.errMsg.mobile = '手机号格式错误'
        return false
      }
      this.errMsg.mobile = ''
    },
    checkCode () {
      if (!this.loginForm.code) {
        this.errMsg.code = '请输入验密码'
        return false
      }
      if (!/^\d{6}$/.test(this.loginForm.code)) {
        this.errMsg.code = '验证码6个数字'
        return false
      }
      this.errMsg.code = ''
    },
    async login () {
      // 校验所有的表单
      this.checkMobile()
      this.checkCode()
      // 对错误信息进行判断
      if (this.errMsg.mobile || this.errMsg.code) return false
      // 校验成功
      try {
        // 进行登录
        // const data = await login(this.loginForm)
        // 成功
        // 1. 提示
        // this.$toast({ type: 'success', message: '登录成功' })
        // 2. 存储token
        // this.setUser(data)
        // 3. 跳转  （如果有来源地址，回跳来源地址，如果没有：默认进入 我的  个人中心首页）
        const url = this.$route.query.redirect || '/'
        this.$router.push(url)
      } catch (e) {
        // 4. 错误提示
        this.$toast({ type: 'fail', message: '登录失败' })
      }
    }
  }
}
</script>

<style lang="less" scoped></style>
