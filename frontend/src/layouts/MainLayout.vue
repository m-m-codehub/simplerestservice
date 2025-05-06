<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>Simple Rest Service</q-toolbar-title>
        <q-space />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Navigation</q-item-label>
        <q-item clickable to="/" @click="toggleLeftDrawer">
          <q-item-section avatar><q-icon name="home" /></q-item-section>
          <q-item-section>Startseite</q-item-section>
        </q-item>
        <q-item clickable to="/dummy" @click="toggleLeftDrawer">
          <q-item-section avatar><q-icon name="fact_check" /></q-item-section>
          <q-item-section>Dummy-Page</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
const leftDrawerOpen = ref(false)
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
