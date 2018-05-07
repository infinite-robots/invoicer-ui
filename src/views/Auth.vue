<template>
  <div class="auth">
    <h1>Loading...</h1>
  </div>
</template>

<script>
export default {
  name: 'auth',
  mounted() {
    this.$auth.handleAuthentication().then(() => {
      this.$router.push({ name: 'home' });
    });
  },
};
</script>
