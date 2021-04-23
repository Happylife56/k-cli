<template>
  <view class="index">
    <NumberDisplay />
    <NumberSubmit />
    <button @tap="navLogin">login</button>
  </view>
</template>

<script>
import NumberDisplay from "../../components/NumberDisplay.vue";
import NumberSubmit from "../../components/NumberSubmit.vue";
import Taro from "@tarojs/taro";

export default {
  name: "Index",
  components: {
    NumberDisplay,
    NumberSubmit,
  },
  setup() {
    const navLogin = () => {
      console.log(Taro);
      Taro.navigateTo({
        url: "/pages/login/login?id=1",
        events: {
          // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
          acceptDataFromOpenedPage: function (data) {
            console.log(data);
          },
          someEvent: function (data) {
            console.log(data);
          },
        },
        success: function (res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit("acceptDataFromOpenerPage", { data: "test" });
        },
      });
    };
    return { navLogin };
  },
};
</script>

<style>
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
