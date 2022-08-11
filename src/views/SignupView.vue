<template>
  <div>
    <h1>Signup</h1>
    <form @submit="submission">
      <input
        required
        v-model="username"
        type="text"
        placeholder="Enter Username"
      />
      <input v-model="email" required type="email" placeholder="Email" />
      <input
        required
        :type="show ? 'text' : 'password'"
        placeholder="Enter Password"
        v-model="password"
      />
      <button type="button" @click="changeShow">👀</button>
      <input type="submit" value="Submit" />
      <p :style="{ color: error ? 'red' : 'green' }">{{ message }}</p>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      show: false,
      error: false,
      message: "",
    };
  },
  methods: {
    changeShow() {
      this.show = !this.show;
    },
    async submission(e) {
      e.preventDefault();
      const d = await fetch(`${this.$store.state.api}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.username,
          email: this.email,
          password: this.password,
        }),
      });
      const data = await d.json();
      if (data.error) {
        this.error = true;
      } else {
        this.error = false;
      }
      this.message = data.message;
      this.$cookies.set(data.uuid);
    },
  },
};
</script>
