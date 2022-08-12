<template>
  <div>
    <!-- Left side navbar sorting -->
    <div>
      <div class="flex justify-between m-8">
        <div class="flex">
          <div class="mx-2">
            <label for="brand">Brand</label>
            <select
              class="border-black border-2 outline-0 w-full"
              name="brand"
              id="brand"
              v-model="brand"
              @change="filter"
            >
              <option value="all">All</option>
              <option value="nike">Nike</option>
              <option value="puma">Puma</option>
              <option value="adidas">Adidas</option>
              <option value="lorem">Lorem</option>
            </select>
          </div>
          <div class="mx-2">
            <label for="brand">Color</label>
            <select
              @change="filter"
              v-model="color"
              class="border-black border-2 outline-0 w-full"
              name="color"
              id="color"
            >
              <option value="all">All</option>
              <option value="white">White</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </select>
          </div>
          <div class="mx-2">
            <label for="category">Category</label>
            <select
              class="border-black border-2 outline-0 w-full"
              name="category"
              id="category"
              v-model="category"
              @change="filter"
            >
              <option value="all">All</option>
              <option value="sports">Sports</option>
              <option value="hiking">Hiking</option>
              <option value="running">Running</option>
            </select>
          </div>
        </div>
        <div class="flex">
          <div class="mx-1">
            <button
              :class="`py-1 border-2 border-black border-solid w-20 ${
                gender === 'B' ? 'bg-black text-white' : 'bg-white text-black'
              }`"
              @click="setGender('B')"
              href="#"
            >
              All
            </button>
          </div>
          <div class="mx-1">
            <button
              :class="`py-1 border-2 border-black border-solid  w-20 ${
                gender === 'M'
                  ? 'bg-black text-white'
                  : 'bg-transparent text-black'
              }`"
              href="#"
              @click="setGender('M')"
            >
              Men
            </button>
          </div>
          <div class="mx-1">
            <button
              :class="`py-1 border-2 border-black border-solid w-20 ${
                gender === 'F'
                  ? 'bg-black text-white'
                  : 'bg-transparent text-black'
              }`"
              @click="setGender('F')"
              href="#"
            >
              Women
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 class="text-4xl mt-8">Products</h1>
        <div class="grid grid-cols-3">
          <div
            class="m-8 pb-8"
            style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px"
            :key="product.product_id"
            v-for="product in productsShow"
          >
            <router-link :to="`/product/${product.product_id}`">
              <img class="w-full h-80" :src="product.image_url" />
              <div class="pl-8 text-left">
                <h1 class="pt-auto text-2xl">{{ product.brand }}</h1>
                <h1 class="mt-2 text-xl">{{ product.name }}</h1>
                <p class="text-xl semibold mt-2">Rs. {{ product.price }}</p>
              </div>
            </router-link>
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
      products: [],
      productsShow: [],
      brand: "all",
      color: "all",
      category: "all",
      gender: "B",
    };
  },
  async mounted() {
    const data = await fetch(`${this.$store.state.api}/products/getproducts`);
    this.products = await data.json();
    this.productsShow = this.products;
    console.log(this.products);
  },
  changed() {
    this.filter();
  },
  methods: {
    filter() {
      this.productsShow = this.products.filter((product) => {
        let returnthis = true;
        if (this.brand === "all") {
          returnthis = true;
        } else {
          if (this.brand.toLowerCase() !== product.brand.toLowerCase()) {
            returnthis = false;
          }
        }
        if (this.color !== "all") {
          if (this.color.toLowerCase() !== product.color.toLowerCase()) {
            returnthis = false;
          }
        }
        if (this.category !== "all") {
          if (this.category.toLowerCase() !== product.category.toLowerCase()) {
            returnthis = false;
          }
        }
        if (this.gender !== "B") {
          if (this.gender.toLowerCase() !== product.gender.toLowerCase()) {
            returnthis = false;
          }
        }
        return returnthis;
      });

      console.log(this.productsShow);
    },
    setGender(a) {
      this.gender = a;
      this.filter();
    },
  },
};
</script>
