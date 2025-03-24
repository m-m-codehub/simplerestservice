<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-img
          src="~assets/fox.jpg"
          style="height: 47px; max-width: 50px"
          clickable
          @click="toggleLeftDrawer"
        ></q-img>
        <q-toolbar-title> Simple Rest Service </q-toolbar-title>
        <q-space />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          <div v-for="link in linksList" :key="link.title" v-bind="link">
            <q-item clickable :to="link.link" @click="toggleLeftDrawer()">
              <q-item-section v-if="link.icon" avatar>
                <q-icon :name="link.icon" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ link.title }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </q-item-label>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

const leftDrawerOpen = ref(false);

const linksList = [
  {
    title: "Get Request",
    icon: "home",
    link: "/",
  },
  {
    title: "Post Request",
    icon: "shop",
    link: "post",
  },
];
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
