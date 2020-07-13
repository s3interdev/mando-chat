<template>
  <div class="container chat">
    <h2>Mando Chat for {{ this.name }}</h2>
  </div>
</template>

<script>
export default {
  name: "Chat",
  props: ["name"],
  data() {
    return {};
  }
};
</script>

<style>
</style>