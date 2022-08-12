<template>
  <div :key="product.product_id" v-for="product in products">
    <h2>{{ product.name }}</h2>
    <img :src="product.image_url" />
    <p>Rs. {{ product.price }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  async mounted() {
    const data = await fetch(`${this.$store.state.api}/products/getproducts`);
    this.products = await data.json();
    console.log(this.products);
  },
  methods: {},
};
</script>
