<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <div v-if="$store.state.user.guest">
      <router-link to="/signup">Signup</router-link> |
      <router-link to="/login">Login</router-link> |
    </div>
    <div v-if="$store.state.user.username">
      <router-link to="/profile"
        >{{ $store.state.user.username || "Guest" }}
      </router-link>
    </div>
  </nav>
</template>
