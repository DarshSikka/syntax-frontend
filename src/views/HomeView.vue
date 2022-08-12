<template>
  <div style="background-color: rgb(247, 247, 247)">
    <!-- Hero section starts -->
    <div class="flex justify-around">
      <div style="font-family: 'Raleway', sans-serif" class="my-auto w-1/3">
        <h1 class="text-8xl">SNEAKERS</h1>
        <h1 class="text-3xl">Lorem ipsum dolor sit amet consectetur</h1>
      </div>
      <img
        class="bg-transparent -rotate-12 mt-28 pb-40"
        src="../assets/sneakersmain.png"
        alt="nahi aaya"
      />
    </div>
    <!-- Hero section ends -->
    <!-- section 2 div1 -->
    <ProductSlideShow
      :title="product.title"
      :description="product.description"
      :photo="product.image_url"
      :price="product.price"
      :product_id="product.product_id"
      @next="next"
      @previous="prev"
    />
    <!-- Section 2 ends -->
    <!-- Section 3 starts -->
    <div>
      <h1 class="text-left ml-32 text-4xl mt-32 mb-12">Lorem Ipsum</h1>
      <!-- section 3 div1 -->
      <div class="flex">
        <div id="parent-hover" class="w-1/3 mx-20 bg-transparent">
          <a href="/login">
            <img
              id="child-image-hover"
              class="w-full cursor-pointer"
              src="../assets/sneakersmain.png"
              alt="oops"
            />
            <p
              id="child-hover"
              class="text-white text-3xl text-semibold text-center -mt-32 pb-32"
            >
              Lorem Ipsum Dolar.
            </p>
          </a>
        </div>
        <div id="parent-hover" class="w-1/3 mx-20 bg-transparent">
          <a href="/login">
            <img
              id="child-image-hover"
              class="w-full cursor-pointer"
              src="../assets/sneakersmain.png"
              alt="oops"
            />
            <p
              id="child-hover"
              class="text-white text-3xl text-semibold text-center -mt-32 pb-32"
            >
              Lorem Ipsum Dolar.
            </p>
          </a>
        </div>
        <div id="parent-hover" class="w-1/3 mx-20 bg-transparent">
          <a href="/login">
            <img
              id="child-image-hover"
              class="w-full cursor-pointer"
              src="../assets/sneakersmain.png"
              alt="oops"
            />
            <p
              id="child-hover"
              class="text-white text-3xl text-semibold text-center -mt-32 pb-32"
            >
              Lorem Ipsum Dolar.
            </p>
          </a>
        </div>
      </div>
      <!-- section 3 div2 -->
      <div class="flex mt-24">
        <div id="parent-hover" class="w-1/3 mx-20 bg-transparent">
          <a href="/login">
            <img
              id="child-image-hover"
              class="w-full cursor-pointer"
              src="../assets/sneakersmain.png"
              alt="oops"
            />
            <p
              id="child-hover"
              class="text-white text-3xl text-semibold text-center -mt-32 pb-32"
            >
              Lorem Ipsum Dolar.
            </p>
          </a>
        </div>
        <div id="parent-hover" class="w-1/3 mx-20 bg-transparent">
          <a href="/login">
            <img
              id="child-image-hover"
              class="w-full cursor-pointer"
              src="../assets/sneakersmain.png"
              alt="oops"
            />
            <p
              id="child-hover"
              class="text-white text-3xl text-semibold text-center -mt-32 pb-32"
            >
              Lorem Ipsum Dolar.
            </p>
          </a>
        </div>
        <div id="parent-hover" class="w-1/3 mx-20 bg-transparent">
          <a href="/login">
            <img
              id="child-image-hover"
              class="w-full cursor-pointer"
              src="../assets/sneakersmain.png"
              alt="oops"
            />
            <p
              id="child-hover"
              class="text-white text-3xl text-semibold text-center -mt-32 pb-32"
            >
              Lorem Ipsum Dolar.
            </p>
          </a>
        </div>
      </div>
      <!-- section 3 div 2 ends -->
    </div>
    <!-- section 3 ends -->
    <!-- section 4 starts -->
    <div>
      <h1 class="text-left ml-32 text-4xl mt-32 mb-12">Lorem Ipsum</h1>
      <div class="flex mx-72 justify-between">
        <a href="/">
          <div>
            <img
              class="rounded-t-3xl"
              src="../assets/sneakersmain2.jpg"
              alt="alt"
            />
            <div
              style="
                box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
                  rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
              "
              class="py-2 text-xl rounded-b-3xl"
            >
              Men
            </div>
          </div>
        </a>
        <a href="/">
          <div>
            <img
              class="rounded-t-3xl"
              src="../assets/sneakersmain2.jpg"
              alt="alt"
            />
            <div
              style="
                box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
                  rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
              "
              class="py-2 text-xl rounded-b-3xl"
            >
              Women
            </div>
          </div>
        </a>
      </div>
      <div class="flex mt-12 justify-center">
        <div style="width: 17%" class="mx-2">
          <img
            class="rounded-t-3xl"
            src="../assets/sneakersmain2.jpg"
            alt="women"
          />
          <div
            style="
              box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
                rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
            "
            class="py-2 text-xl rounded-b-3xl"
          >
            Lorem Ipsum
          </div>
        </div>
        <div style="width: 17%" class="mx-2">
          <img
            class="rounded-t-3xl"
            src="../assets/sneakersmain2.jpg"
            alt="women"
          />
          <div
            style="
              box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
                rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
            "
            class="py-2 text-xl rounded-b-3xl"
          >
            Lorem Ipsum
          </div>
        </div>
        <div style="width: 17%" class="mx-2">
          <img
            class="rounded-t-3xl"
            src="../assets/sneakersmain2.jpg"
            alt="women"
          />
          <div
            style="
              box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
                rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
            "
            class="py-2 text-xl rounded-b-3xl"
          >
            Lorem Ipsum
          </div>
        </div>
        <div style="width: 17%" class="mx-2">
          <img
            class="rounded-t-3xl"
            src="../assets/sneakersmain2.jpg"
            alt="women"
          />
          <div
            style="
              box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
                rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
            "
            class="py-2 text-xl rounded-b-3xl"
          >
            Lorem Ipsum
          </div>
        </div>
      </div>
    </div>
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
