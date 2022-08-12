<template>
  <!-- <div>
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
  </div> -->
  <div class="w-1/3 mx-auto mt-24 p-7 border border-grey">
    <h1 class="pt-8 text-3xl text-center">Sign Up</h1>

    <div class="text-center my-8"></div>

    <form @submit="submission">
      <p :style="{ color: error ? 'red' : 'green' }">{{ message }}</p>
      <div class="w-4/5 mx-auto mt-5">
        <input
          type="text"
          name="name"
          id="name"
          class="w-full pl-2 py-2 border-0"
          style="outline: 1.5px solid grey"
          placeholder="Enter your username"
          v-model="username"
          required
        />
      </div>
      <div class="w-4/5 mx-auto mt-5">
        <input
          type="email"
          name="email"
          id="email"
          class="w-full pl-2 py-2 border-0"
          placeholder="Enter your email"
          style="outline: 1.5px solid grey"
          v-model="email"
          required
        />
      </div>
      <div class="w-4/5 mx-auto mt-5">
        <input
          :type="show ? 'text' : 'password'"
          name="password"
          class="w-full pl-2 py-2 border-0"
          id="password"
          style="outline: 1.5px solid grey"
          placeholder="Create Password"
          v-model="password"
          required
        />
      </div>
      <button @click="changeShow" class="show" type="button">
        {{ show ? "Hide" : "Show" }}
      </button>

      <div class="w-1/2 mx-auto mt-5">
        <input
          style="background-color: rgb(99 102 241)"
          class="w-full pl-2 py-2 border-0 cursor-pointer text-white"
          type="submit"
          value="Register"
        />
      </div>
    </form>
    <p class="text-center mt-5 pb-8">
      Already have an account?
      <a class="underline" href="/login">Login</a>
    </p>
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
        this.$router.push("/products");
      }
      this.message = data.message;
      this.$cookies.set("uuid", data.uuid);
    },
  },
};
</script>
