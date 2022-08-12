<template>
  <h1>Your Profile</h1>
  <div v-if="$store.state.guest">
    You are logged out.
    <router-link to="/login">Login to see your profile</router-link>
  </div>
  <div>Username: {{ $store.state.user.username }}</div>
  <div>Email: {{ $store.state.user.email }}</div>
  <div></div>
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
