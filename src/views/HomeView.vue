<template>
  <div style="background-color: rgb(247, 247, 247)">
    <!-- Hero section starts -->
    <div class="md:block lg:flex justify-around">
      <div
        style="font-family: 'Raleway', sans-serif"
        class="pt-12 lg:my-auto lg:w-1/3 lg:ml-12 lg:pt-0"
      >
        <h1 class="text-4xl sm:text-4xl md:text-5xl lg:text-8xl">SNEAKERS</h1>
        <h1 class="text-3xl">Lorem ipsum dolor sit amet consectetur</h1>
      </div>
      <img
        class="-rotate-12 -ml-12 mt-24 mb-48 sm:mx-auto sm:mt-24 sm:mb-48 lg:mt-28 lg:pb-40"
        src="../assets/sneakersmain.png"
        alt="nahi aaya"
      />
    </div>
    <!-- Hero section ends -->
    <!-- section 2 div1 -->
    <ProductSlideShow
      :title="product.name"
      :description="product.description"
      :photo="product.image_url"
      :price="product.price"
      :product_id="product.product_id"
      @next="next"
      @previous="prev"
    />
    <!-- Section 2 ends -->

    <!-- section 3 starts -->
    <div>
      <div class="sm:block md:flex md:justify-center mt-32">
        <div
          class="w-5/6 mx-auto mt-12 sm:w-5/6 md:w-1/3 md:mt-0 lg:w-1/3 lg:mx-8 lg:mt-0"
        >
          <router-link to="/products">
            <img
              class="rounded-t-3xl"
              src="../assets/men.jpg"
              alt="alt"
            />
            <div
              style="
                box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
              class="py-2 text-xl rounded-b-3xl"
            >
              Men
            </div>
          </router-link>
        </div>
        <div
          class="w-5/6 mx-auto mt-12 sm:w-5/6 md:w-1/3 md:mt-0 lg:w-1/3 lg:mx-8 lg:mt-0"
        >
          <router-link to="/products">
            <img
              class="rounded-t-3xl"
              src="../assets/women.jpg"
              alt="alt"
            />
            <div
              style="
                box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
              class="py-2 text-xl rounded-b-3xl"
            >
              Women
            </div>
          </router-link>
        </div>
      </div>

      <div class="sm:block md:flex mt-12 justify-center">
        <div class="w-4/6 mx-auto my-4 sm:mt-8 md:w-1/6 md:mx-2">
          <router-link to="/products">
            <img
              class="rounded-t-3xl w-full"
              src="../assets/sneakers1.png"
              alt="women"
            />
            <div
              style="
                box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
              class="py-2 text-xl rounded-b-3xl"
            >
              Brands
            </div>
          </router-link>
        </div>
        <div class="w-4/6 mx-auto my-4 sm:mt-8 md:w-1/6 md:mx-2">
          <router-link to="/products">
            <img
              class="rounded-t-3xl"
              src="../assets/sneakers2.png"
              alt="women"
            />
            <div
              style="
                box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
              class="py-2 text-xl rounded-b-3xl"
            >
              Colour
            </div>
          </router-link>
        </div>
        <div class="w-4/6 mx-auto my-4 sm:mt-8 md:w-1/6 md:mx-2">
          <router-link to="/products">
            <img
              class="rounded-t-3xl h-5/6"
              src="../assets/sneakersmain2.jpg"
              alt="women"
            />
            <div
              style="
                box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
              class="py-2 text-xl rounded-b-3xl"
            >
              Category
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <p class="mt-24">Made with &lt;3 by Exun Clan</p>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductSlideShow from "@/components/ProductSlideShow";
import { throwStatement } from "@babel/types";
export default {
  name: "HomeView",
  components: { ProductSlideShow },
  data() {
    return {
      product: {},
      products: [],
      i: 0,
    };
  },
  async mounted() {
    const data = await fetch(`${this.$store.state.api}/products/getproducts`);
    this.products = await data.json();
    console.log(this.products);
    this.product = this.products[0];
  },
  methods: {
    async next() {
      if (this.i < this.products.length - 1) {
        this.i++;
      } else {
        this.i = 0;
      }
      this.product = this.products[this.i];
    },
    async prev() {
      if (this.i > 0) {
        this.i--;
      } else {
        this.i = this.products.length - 1;
      }
      this.product = this.products[this.i];
    },
  },
};
</script>
