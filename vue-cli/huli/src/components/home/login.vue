<template>
    <div class="login">
        <div class="box">
        <h2>立即注册</h2>
        <input type="text" placeholder="请输入您的手机号"><br>
        <input type="text" placeholder="请输入图片验证码"><br>
        <button>注册立享专属福利</button>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang='less'>
.login {
  width: 94%;
  position: relative;
  background: #fff;
  position: relative;
  top: -0.25rem;
  left: 3%;
  border-radius: 5px;
  z-index: 5;
  box-shadow: 0 0 1px 1px #ddd;
  .box {
    width: 100%;
    padding: 0 0.5rem 0.5rem;
    box-sizing: border-box;
    overflow: hidden;
    h2 {
      height: 2rem;
      line-height: 2rem;
      text-align: center;
      font-weight: normal;
    }
    input {
      width: 100%;
      height: 1.2rem;
      padding-left: 0.3rem;
      color: #ddd;
      border: #ddd 1px solid;
      margin-bottom: 0.4rem;
      box-sizing: border-box;
      font-size: 2rem;
      font-size: 0.4rem;
    }
    button {
      width: 100%;
      background: rgb(240, 102, 102);
      color: #fff;
      outline: none;
      height: 1.2rem;
      margin-top: 0.3rem;
      border: 1px solid transparent;
      font-size: 0.45rem;
      border-radius: 2px;
    }
  }
}
</style>