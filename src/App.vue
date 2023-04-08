<script setup>
import TabBar from "@/components/tab-bar/tab-bar.vue";
import Loading from "@/components/loading/loading.vue";
</script>

<template>
    <main>
        <router-view></router-view>
        <tabBar/>
        <Loading/>
    </main>
</template>

<style scoped>

</style>
