<template>
  <div v-if="err">Cart is empty, please add items to cart to checkout</div>
  <div v-else>
    <input
      type="text"
      v-model="phone"
      placeholder="Enter your phone number"
    /><textarea
      type="text"
      v-model="address"
      placeholder="Enter your address"
    ></textarea>
    <button @click="openpayment">PAY</button>
  </div>
</template>

<script>
export default {
  props: ["order_details", "customer_details"],
  data() {
    return {
      script: `https://checkout.razorpay.com/v1/checkout.js`,
      err: false,
      phone: "",
      address: "",
    };
  },
  methods: {
    async loadRazorPay() {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = this.script;
        script.onload = () => {
          resolve(true);
        };
        script.onerror = () => {
          resolve(false);
        };
        document.body.appendChild(script);
      });
    },
    async openpayment() {
      const result = await this.loadRazorPay();
      if (!result) {
        alert("Failed to load razorpay script");
        return;
      }
      if (!this.$cookies.get("uuid")) {
        return;
      }
      const c = await fetch(`${this.$store.state.api}/auth/getcart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uuid: this.$cookies.get("uuid"),
        }),
      });
      const cart = await c.json();
      console.log(cart);
      if (cart.length < 1) {
        return (this.err = true);
      }
      const amounts = cart.map((ele) => ele.price);
      console.log(amounts);
      const amt = amounts.reduce((a, b) => a + b);
      console.log(amt);
      const odr = await fetch(`${this.$store.state.api}/payments/createorder`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: amt,
        }),
      });
      const order = await odr.json();
      console.log(order);
      const options = {
        key: this.$store.state.razorpay_api_key,
        amount: order.amount,
        currency: order.currency,
        name: `Sneaker Store`,
        description: `Buying 2 items`,
        order_id: order.order_id,
        handler: function () {},
        prefill: {
          name: `Your customer name`,
          email: `Your customer email`,
          contact: `Your customer contact`,
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    },
  },
};
</script>

<style></style>
