<template>
  <h1>Your Profile</h1>
  <div v-if="$store.state.guest">
    You are logged out.
    <router-link to="/login">Login to see your profile</router-link>
  </div>
  <div :key="objectkey" v-for="objectkey in Object.keys($store.state.user)">
    {{ objectkey }}: {{ $store.state.user[objectkey] }}
  </div>
  <button @click="logout">_Logout_</button>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    async logout() {
      this.$cookies.set("uuid", "");
      window.location.reload();
    },
  },
};
</script>
