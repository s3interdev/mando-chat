<template>
  <div class="container welcome">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form v-on:submit.prevent="enterChat()">
          <label for="name">Enter Your Name:</label>
          <input type="text" name="name" v-model="name" />
          <button class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      name: null
    };
  },
  methods: {
    enterChat() {
      console.log(this.name);
    }
  }
};
</script>

<style>
.welcome {
  max-width: 400px;
  margin-top: 100px;
}

.welcome h2 {
  font-size: 3em;
}

.welcome button {
  margin: 34px auto;
}
</style>
