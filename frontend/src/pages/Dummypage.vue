<template>
    <div class="dummy-wrapper">
        <div class="dummy-column">
            <h2>Daten aus dem Backend abrufen:</h2>
            <GetDummy />
        </div>
        <div class="dummy-column">
            <h2>Daten an das Backend senden:</h2>
            <PostDummy />
        </div>
    </div>
</template>

<script setup>
import GetDummy from "components/GetDummy.vue";
import PostDummy from "components/PostDummy.vue";
</script>

<style scoped>

.dummy-wrapper {
    display: flex;
    gap: 40px;
    padding: 20px;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
}

.dummy-column {
    flex: 1 1 45%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>