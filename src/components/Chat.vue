<template>
  <div class="container chat">
    <h2 class="center teal-text">Mando Chat for {{ this.name }}</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <li>
            <span class="teal-text">Name:</span>
            <span class="grey-text text-darken-3">message</span>
            <span class="grey-text time">time</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <input type="text" />
      </div>
    </div>
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
.chat h2 {
  font-size: 2.1em;
  margin-bottom: 55px;
}

.chat span {
  font-size: 1.3em;
}

.chat .time {
  display: block;
  font-size: 1.1em;
}
</style>