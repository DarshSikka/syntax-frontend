<template>
  <div :key="order.id" v-for="order in $store.state.user.orders">
    <h1>Order on {{ order.date }}</h1>
    <div :key="item.name" v-for="item in order.items">
      {{ item.name }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      orders: [],
    };
  },
};
</script>
