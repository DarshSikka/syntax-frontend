<template>
  {{ product.name }}
  {{ product.price }}
  <img :src="product.image_url" width="400" height="400" />
  <div v-if="!$store.state.user.cart.includes(product.product_id)">
    <button @click="addToCart">Add to cart</button>
  </div>
  <div v-else>
    Already in Cart
    <button @click="removeFromCart">Remove</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: {},
    };
  },
  async mounted() {
    const { id } = this.$route.params;
    if (!id) {
      return;
    }
    const prod = await fetch(
      `${this.$store.state.api}/products/getproduct?id=${id}`
    );
    const product = await prod.json();
    if (!product) {
      return;
    }
    this.product = product;
  },
  methods: {
    async addToCart() {
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
            product_id: this.product.product_id,
            uuid: this.$cookies.get("uuid"),
          }),
        }
      );
      const res = await response.json();
      console.log(res);
    },
    async removeFromCart() {
      if (!this.$store.state.user.username) {
        return;
      }
      const response = await fetch(
        `${this.$store.state.api}/products/removefromcart`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            product_id: this.product.product_id,
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
