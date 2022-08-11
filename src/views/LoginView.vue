<template>
  <h1>Login</h1>
  <form @submit="submission">
    <input
      type="text"
      placeholder="Username/Email"
      v-model="username_or_email"
    />
    <input type="password" placeholder="Password" v-model="password" />
    <input type="submit" value="Submit" />
  </form>
</template>
<script>
export default {
  data() {
    return {
      username_or_email: "",
      password: "",
      error: false,
      message: "",
    };
  },
  methods: {
    async submission(e) {
      e.preventDefault();
      const d = await fetch(`${this.$store.state.api}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username_or_email,
          password,
        }),
      });
      const data = await d.json();
      if (data.error) {
        this.error = true;
      } else {
        this.error = false;
      }
      this.$cookies.set(data.uuid);
    },
  },
};
</script>
