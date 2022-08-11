<template>
  <div :key="product.product_id" v-for="product in products">
    <h2>{{ product.name }}</h2>
    <img :src="product.image_url" />
    <p>Rs. {{ product.price }}</p>
    <div v-if="!$store.state.user.cart.includes(product.product_id)">
      <button @click="addToCart(product.product_id)">Add to cart</button>
    </div>
    <div v-else>
      Already in Cart
      <button @click="removeFromCart(product.product_id)">Remove</button>
    </div>
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
  methods: {
    async addToCart(product_id) {
      if (!this.$store.state.user.username) {
        return;
      }
      const response = await fetch(
        `${this.$store.state.api}/products/addtocart`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            product_id,
            uuid: this.$cookies.get("uuid"),
          }),
        }
      );
      const res = await response.json();
      console.log(res);
    },
  },
};
</script>
