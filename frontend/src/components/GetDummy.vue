<template>
  <div class="btn-wrapper">
    <q-btn outline rounded color="primary" label="Get" @click="get" />
  </div>
  <div class="wrapper">
    <q-list class="list" bordered separator v-if="list && list.length">
      <DummyItem v-for="item in list" :key="item.name + item.age" :name="item.name" :age="item.age" />
    </q-list>
  </div>
</template>

<script setup>
import DummyItem from "components/DummyItem.vue";
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