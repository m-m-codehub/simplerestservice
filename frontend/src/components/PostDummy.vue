<template>
  <q-form @submit.prevent="post">
    <div class="form-wrapper">
      <q-input
        v-model="dummy.name"
        label="Name"
        outlined
      />
      <q-input
        v-model.number="dummy.age"
        type="number"
        label="Alter"
        outlined
      />
      <q-btn
        type="submit"
        label="Absenden"
        color="primary"
        outline
        rounded
      />
    </div>

    <div v-if="response" class="response">
      <p>{{ response }}</p>
    </div>
  </q-form>
</template>

<script setup>
import { ref } from 'vue'

const dummy = ref({
  name: '',
  age: null
})

const response = ref('')

const post = () => {
  fetch('http://localhost:8080/dummies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dummy.value)
  })
    .then(res => res.text())
    .then(data => {
      response.value = data
      dummy.value = { name: '', age: null } // Felder zurücksetzen
    })
    .catch(err => {
      response.value = 'Fehler beim Senden'
      console.error(err)
    })
}
</script>

<style scoped>
.form-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  max-width: 400px;
  margin: auto;
}

.response {
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
}
</style>
