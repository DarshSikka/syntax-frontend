<template>
  <div
    style="background-color: rgb(79, 70, 229)"
    class="block sm:flex justify-between py-3"
  >
    <div class="logo my-auto">
      <p class="text-3xl sm:ml-32 text-white cursor-pointer">Sneakers</p>
    </div>
    <div class="sm:flex sm:justify-center sm:mr-32 lg:flex items-center text-white mt-3">
      <router-link
        style="background-color: rgb(99 102 241)"
        class="px-4 py-2 mx-3 rounded-md"
        to="/"
        >Home</router-link
      >
      <router-link
        style="background-color: rgb(99 102 241)"
        class="px-4 py-2 mx-3 rounded-md"
        to="/products"
        >Products</router-link
      >


      <span v-if="$store.state.user.guest">
        <router-link
          style="background-color: rgb(99 102 241)"
          class="px-4 py-2 mx-3 rounded-md"
          to="/login"
          >Login</router-link
        >
        <router-link
          style="background-color: rgb(99 102 241)"
          class="px-4 py-2 mx-3 rounded-md"
          to="/signup"
          >Signup</router-link
        >
      </span>
      <span v-if="$store.state.user.username">
        <router-link
          style="background-color: rgb(99 102 241)"
          class="px-4 py-2 mx-3 rounded-md"
          to="/cart"
          >Your Cart</router-link
        >
        <router-link
          style="background-color: rgb(99 102 241)"
          class="px-4 py-2 mx-3 rounded-md"
          to="/orders"
          >Your Orders</router-link
        >
                <router-link
          style="background-color: rgb(99 102 241)"
          class="bold px-4 py-2 mx-3 rounded-md"
          to="/profile"
          >Your Profile
        </router-link>

      </span>
    </div>
  </div>
</template>
