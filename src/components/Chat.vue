<template>
  <div class="container chat">
    <h2 class="center teal-text">Mando Chat for {{ this.name }}</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages" v-chart-scroll>
          <li v-for="message in messages" v-bind:key="message.id">
            <span class="teal-text">{{ message.name }}:</span>
            <span class="grey-text text-darken-3">{{ message.content }}</span>
            <span class="grey-text time">{{ message.timestamp }}</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NewMessage v-bind:name="name" />
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import NewMessage from "@/components/NewMessage";
import moment from "moment";

export default {
  name: "Chat",
  props: ["name"],
  components: {
    NewMessage: NewMessage
  },
  data() {
    return {
      messages: []
    };
  },
  created() {
    // Real-time event listener
    let ref = db.collection("messages").orderBy("timestamp");

    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;

          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format("lll")
          });
        }
      });
    });
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
  font-size: 0.8em;
}

.messages {
  max-height: 300px;
  overflow: auto;
}

.messages::-webkit-scrollbar {
  width: 3px;
}

.messages::-webkit-scrollbar-track {
  background: #dddddd;
}

.messages::-webkit-scrollbar-thumb {
  background: #aaaaaa;
}
</style>