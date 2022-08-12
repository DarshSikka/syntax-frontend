<template>
  <div class="flex justify-center bg-black text-white">
    <i
      class="fa fa-angle-left my-auto ml-24 cursor-pointer"
      style="font-size: 42px"
      @click="$emit('previous')"
    ></i>
    <div class="w-1/2 ml-16 my-auto">
      <h1 class="text-4xl">{{ title }}</h1>
      <h1 class="text-2xl mt-8">
        {{ description }}
      </h1>
      <div class="flex justify-center mt-12">
        <h1 class="flex items-center text-2xl font-semibold py-1.5">
          ₹{{ price }}
        </h1>
        <a
          class="text-white hover:text-black py-1.5 px-8 rounded-3xl ml-8 text-xl border-solid border-2 border-white bg-black hover:bg-white duration-300"
          :href="`/product/${product_id}`"
          >Buy</a
        >
      </div>
    </div>
    <div>
      <img class="py-20 pl-12" :src="photo" alt="" />
    </div>
    <i
      class="fa fa-angle-right my-auto ml-8 mr-24 cursor-pointer"
      style="font-size: 42px"
      @click="$emit('next')"
    ></i>
  </div>
</template>
<script>
export default {
  props: ["photo", "title", "description", "price", "product_id"],
};
</script>
