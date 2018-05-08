<template>
  <div id="header">
    <div class="header-left">
      <h1>Logo</h1>
    </div>
    <div class="header-right">
      <p>Good morning, Dave</p>
      <img v-if="$auth.user" :src="$auth.user.picture">
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  methods: {
    logout() {
      this.$auth.logout();
      // redirect to some homepage ?
    },
  },
};
</script>
