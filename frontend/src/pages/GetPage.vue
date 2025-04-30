<template>
    <div class="btn-wrapper">
      <q-btn outline rounded color="primary" label="Get" @click="get" />
    </div>
    <div class="wrapper">
      <q-list class="list" bordered separator>
        <q-item v-for="item in list">
          <q-item-section>
            Name: {{ item.name }}, Alter: {{ item.age }}
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const list = ref();
  
  const get = () => {
    fetch("http://localhost:8080/dummies")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        list.value = data;
      });
  };
  </script>
  
  <style scoped>
  .list {
    width: 50vw;
  }
  .wrapper {
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .btn-wrapper {
    display: flex;
    justify-content: center;
    margin: 20pt;
  }
  </style>
  