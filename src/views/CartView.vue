<template>
  <div v-if="cart[0]">
    <div
      class="border-b-2 border-black mx-4 md:mx-20"
      :key="item.name"
      v-for="item in cart"
    >
      <div class="block mx-auto lg:flex">
        <div
          class="w-2/3 mx-auto mt-20 mb-20 md:w-1/2 lg:w-1/3 lg:mt-10 lg:mx-20"
        >
          <img class="w-full" :src="item.image_url" width="400" height="400" />
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
          <button
            class="text-black hover:text-white border-2 border-black px-2.5 py-1 bg-transparent hover:bg-black duration-300 mt-8"
            @click="removeFromCart(item.product_id)"
          >
            remove from cart
          </button>
        </div>
      </div>
    </div>
    <div v-if="cart[0]">
      <button
        class="text-black hover:text-white border-2 border-black px-2.5 py-1 bg-transparent hover:bg-black duration-300 mt-8 mb-20"
        @click="checkout"
      >
        Proceed to checkout
      </button>
    </div>
  </div>
  <div v-else>Cart is empty</div>
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
