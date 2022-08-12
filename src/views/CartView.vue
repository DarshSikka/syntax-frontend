<template>
  <h1>Cart</h1>
  <div :key="item.name" v-for="item in cart">
    {{ item.name }}
    <button @click="removeFromCart(item.product_id)">remove from cart</button>
  </div>
  <div v-if="cart[0]">
    <button @click="checkout">Proceed to checkout</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cart: [],
    };
  },
  async mounted() {
    const cart = await fetch(`${this.$store.state.api}/auth/getcart`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        uuid: this.$cookies.get("uuid"),
      }),
    });
    this.cart = await cart.json();
    console.log(this.cart);
  },
  methods: {
    checkout() {
      this.$router.push("/checkout");
    },
    async removeFromCart(product_id) {
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
            product_id,
            uuid: this.$cookies.get("uuid"),
          }),
        }
      );
      await response.json();
      window.location.reload();
    },
  },
};
</script>
