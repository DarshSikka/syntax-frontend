<template>
  <!-- <div :key="order.id" v-for="order in $store.state.user.orders">
    <h1>Order on {{ order.date }}</h1>
    <div :key="item.name" v-for="item in order.items">
      {{ item.name }}
    </div>
  </div> -->

  <div v-if="$store.state.user.orders[0]">
    <div :key="order.id" v-for="order in $store.state.user.orders">
      <h1 class="text-3xl mt-5">Order on {{ order.date }}</h1>
      <div
        class="border-b-2 border-black mx-4 md:mx-20"
        :key="item.name"
        v-for="item in order.items"
      >
        <div class="block mx-auto lg:flex">
          <div
            class="w-2/3 mx-auto mt-20 mb-20 md:w-1/2 lg:w-1/3 lg:mt-10 lg:mx-20"
          >
            <img
              class="w-full"
              :src="item.image_url"
              width="400"
              height="400"
            />
          </div>
          <div class="text-left m-8 text-xl md:pr-20 lg:mt-20">
            <div class="font-bold">
              {{ item.brand }}
            </div>
            <div class="font-bold">
              {{ item.name }}
            </div>
            <br />
            <div class="font-semibold">
              {{ item.description }}
            </div>
            <br />
            <div class="border-b-2 border-black pb-4 pr-8 font-semibold">
              ₹{{ item.price }}
            </div>
            <div class="pt-4">Color: {{ item.color }}</div>
            <div>Gender: {{ item.gender }}</div>
            <div>Category: {{ item.category }}</div>
            <div>Stock: {{ item.stock }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>Orders are empty</div>
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
