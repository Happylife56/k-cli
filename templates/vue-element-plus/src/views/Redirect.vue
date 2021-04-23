<template>
  <div />
</template>

<script>
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
// 重定向页面
export default {
  name: 'Redirect',
  setup() {
    const $route = useRoute();
    const $router = useRouter();
    onMounted(() => {
      const { params: { path }, query } = $route;
      $router.replace({ path: `/${path}`, query });
    });
  },
};
</script>
