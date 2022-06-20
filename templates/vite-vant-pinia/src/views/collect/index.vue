<template>
  <div class="collect">
    Collect
    {{ collect }}
    <van-button @click="edit">
      修改
    </van-button>
  </div>
</template>

<script setup>
import { useCollectStore } from './store';

const { collect } = storeToRefs(useCollectStore());
const store = useCollectStore();
console.log('collect: ', collect);

const edit = () => {
  store.$patch({
    collect: store.collect === 55 ? 123 : 55,
  });
};
</script>

<style lang="scss" scoped>
.collect {
  font-size: 20px;
}
</style>
