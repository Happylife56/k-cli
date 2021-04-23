<template>
  <div class="home">
    <router-link to="/">
      Home
    </router-link>
    <router-link to="/about">
      About
    </router-link>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { onMounted } from 'vue';

export default {
  setup() {
    const { state } = useStore();
    onMounted(() => {
      console.log(state);
    });
  },
};
</script>
<style lang="scss" scoped>
.home {
  @include flex-type(center, center);
}
</style>
