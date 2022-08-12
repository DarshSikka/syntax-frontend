<template>
  <div>
    <!-- main product -->
    <div class="block mx-auto lg:flex">
      <div class="w-1/2 mx-auto mt-20 mb-20 md:w-1/2 lg:w-1/3 lg:mt-10 lg:mx-20">
          <img class="w-full" :src="product.image_url"  />
      </div>
      <div class="w-1/2 mx-auto text-left m-8 text-xl md:pr-20 lg:mt-20 ">
        <div class="font-bold">
          {{ product.brand }}
        </div>
        <div class="font-bold">
          {{ product.name }}
        </div>
        <br />
        <div class="font-semibold">
          {{ product.description }}
        </div>
          <br />
            <div class="border-b-2 border-black pb-4 pr-8 font-semibold">
              ₹{{ product.price }}
            </div>
          <div class="pt-4">
            Color: {{ product.color }}
          </div>
        <div>
          Gender: {{ product.gender }}
        </div>
        <div>
          Category: {{ product.category }}
        </div>
        <div>
          Stock: {{ product.stock }}
        </div>
        <div>
              <div class="mt-8" v-if="!$store.state.user.cart.includes(product.product_id)">
                  <button class="text-black hover:text-white border-2 border-black px-2.5 py-1 bg-transparent hover:bg-black duration-300" @click="addToCart">Add to cart</button>
              </div>
              <div class="mt-8" v-else>
                  <p>Already in Cart</p>
                <button class="text-black hover:text-white border-2 border-black px-2.5 py-1 bg-transparent hover:bg-black duration-300 mt-2" @click="removeFromCart">Remove</button>
              </div>
        </div>
      </div>
    </div>
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
