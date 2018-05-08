<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/test">Test</router-link>
    <a href="/logout" @click.prevent="logout">Logout</a>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  methods: {
    logout() {
      this.$auth.logout();
      // redirect to some homepage ?
    },
  },
};
</script>
