<template>
  <div id="app">
    <navbar />
    <app-header />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import AppHeader from '@/components/AppHeader.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    AppHeader,
  },
};
</script>

<style lang="scss">
  @import './styles/main';
</style>
