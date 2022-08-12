<template>
  <!-- <div >
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <span v-if="$store.state.user.guest">
      <router-link to="/signup">Signup</router-link> |
      <router-link to="/login">Login</router-link> |
    </span>
    <span v-if="$store.state.user.username">
      <router-link to="/profile"
        >{{ $store.state.user.username || "Guest" }}
      </router-link>
    </span> 
  </div> -->
          <div style="background-color: rgb(79, 70, 229);" class="flex justify-between py-3">
            <div class="logo">
                <p class="text-3xl ml-32 text-white cursor-pointer">Sneakers</p>
            </div> 
            <div class="mr-32 flex items-center text-white">
                <router-link style="background-color: rgb(99 102 241)" class="px-4 py-2 mx-3 rounded-md" to="/">Home</router-link>
                    <span v-if="$store.state.user.guest">
                      <router-link style="background-color: rgb(99 102 241)" class="px-4 py-2 mx-3 rounded-md" to="/login">Login</router-link>
                      <router-link style="background-color: rgb(99 102 241)" class="px-4 py-2 mx-3 rounded-md" to="/signup">Signup</router-link>
                    </span>
                    <span v-if="$store.state.user.username">
                          <router-link style="background-color: rgb(99 102 241)" class="px-4 py-2 mx-3 rounded-md" to="/profile">{{ $store.state.user.username || "Guest" }} </router-link>
                    </span>
            </div>
        </div>

</template>
