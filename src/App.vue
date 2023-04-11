<script setup>
import TabBar from "@/components/tab-bar/tab-bar.vue";
import Loading from "@/components/loading/loading.vue";
</script>

<template>
    <main>
        <router-view v-slot="{ Component }">
          <keep-alive include="home">
            <component :is="Component" />
          </keep-alive>

        </router-view>
        <tabBar/>
        <Loading/>
    </main>
</template>

<style scoped>

</style>
