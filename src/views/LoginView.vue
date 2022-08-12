<template>
  <!-- <h1>Login</h1>
  <form @submit="submission">
    <input
      type="text"
      placeholder="Username/Email"
      v-model="username_or_email"
    />
    <input type="password" placeholder="Password" v-model="password" />
    <input type="submit" value="Submit" />
  </form> -->
  <div class="w-1/3 mx-auto mt-24 p-7 border border-grey">
    <h1 class="pt-8 text-3xl text-center">Login</h1>

    <div class="text-center my-5"></div>
    <form @submit="submission">
      <div class="w-4/5 mx-auto mt-5">
        <input
          type="text"
          name="email"
          id="email"
          class="w-full pl-2 py-2 border-0"
          style="outline: 1.5px solid grey"
          placeholder="Enter your email or username"
          v-model="username_or_email"
        />
      </div>

      <div class="w-4/5 mx-auto mt-5">
        <input
          type="password"
          name="password"
          id="password"
          class="w-full pl-2 py-2 border-0"
          style="outline: 1.5px solid grey"
          placeholder="Enter your password"
          v-model="password"
        />
      </div>

      <div class="w-1/2 mx-auto mt-5">
        <input
          style="background-color: rgb(99 102 241)"
          class="w-full pl-2 py-2 border-0 cursor-pointer text-white"
          type="submit"
          value="Login"
        />
      </div>
    </form>
    <p class="text-center mt-5 pb-8">
      No account? <a class="underline" href="/signup">Signup</a>
    </p>
    <p :style="{ color: error ? 'red' : 'green' }">{{ message }}</p>
  </div>
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
          username_or_email: this.username_or_email,
          password: this.password,
        }),
      });
      const data = await d.json();
      if (data.error) {
        this.error = true;
      } else {
        this.error = false;
        this.$router.push("/products");
      }
      this.message = data.message;
      console.log(data);
      this.$cookies.set("uuid", data.uuid);
    },
  },
};
</script>
