<template>
  <h1>Your Profile</h1>
  <div :key="objectkey" v-for="objectkey in Object.keys($store.state.user)">
    {{ objectkey }}: {{ $store.state.user[objectkey] }}
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
