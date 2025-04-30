<template>
    <div class="flex flex-center">
      <q-input class="button" outlined v-model="text" label="Message" />
      <q-btn outline rounded color="primary" label="Send" @click="post" />
    </div>
    <div class="flex flex-center">
      <p>{{ response }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const text = ref();
  const response = ref();
  
  const post = () => {
    fetch("http://localhost:8080/dummies", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: text.value,
    })
      .then((response) => response.text())
      .then((data) => (response.value = data))
      .catch((err) => console.error(err));
  };
  </script>
  
  <style scoped>
  .button {
    min-width: 30vw;
    max-width: 60vw;
    margin: 20pt;
  }
  </style>
  