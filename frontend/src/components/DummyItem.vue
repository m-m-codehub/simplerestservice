<template>
    <q-item>
      <q-item-section>
        Name: {{ name }}, Alter: {{ age }}
      </q-item-section>
    </q-item>
  </template>
  
  <script setup>
  defineProps({
    name: String,
    age: Number
  });
  </script>