<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
      <button @click="addClick">add</button>
      <text class="title">{{ counter.count }}</text>
    </view>
  </view>
</template>

<script setup>
import { useCounterStore } from '@/store/counter';

const counter = useCounterStore();

// 可以手动触发
counter.$patch({ count: counter.count + 1 });
// 或者使用 actions
counter.increment();

const addClick = () => {
  counter.count++;
};

const title = ref('123');
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
     display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
