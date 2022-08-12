<template>
  <Navbar />
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
  mounted() {
    setInterval(async () => {
      const cookieGet = this.$cookies.get("uuid");
      const ft = await fetch(`${this.$store.state.api}/auth/getuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uuid: cookieGet }),
      });
      let fetched = await ft.text();
      if (fetched) {
        fetched = JSON.parse(fetched);
      }
      this.$store.commit("updateUser", fetched);
    }, 1000);
  },
};
</script>
