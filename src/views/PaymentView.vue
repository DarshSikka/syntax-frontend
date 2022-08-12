<template>
  <div v-if="err">Cart is empty, please add items to cart to checkout</div>
  <div v-else class="w-1/3 mx-auto mt-24 p-7 border border-grey">
    <input
      type="text"
      v-model="phone"
      placeholder="Enter your phone number"
      class="w-full pl-2 py-2 border-0"
      style="outline: 1.5px solid grey"
    /><textarea
      type="text"
      v-model="address"
      placeholder="Enter your address"
      class="w-full pl-2 py-2 border-0 mt-4 h-32"
      style="resize: none; outline: 1.5px solid grey"
    ></textarea>
    <button
      class="bg-blue-200 pt-2 pb-2 pl-16 pr-16 rounded mt-6"
      @click="openpayment"
    >
      PAY
    </button>
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
        description: `Buying ${cart.length} item(s)`,
        order_id: order.order_id,
        handler: async () => {
          const orderobject = await fetch(
            `${this.$store.state.api}/products/makeorder`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                username: this.$store.state.user.username,
                email: this.$store.state.user.email,
                items: cart,
                address: this.address,
                phone: this.phone,
              }),
            }
          );
          const order = orderobject.json();
          this.$route.push("/order");
        },
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
