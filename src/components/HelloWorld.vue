<template>
  <div class="hello card">
    <h2>{{ msg }}</h2>
    <p>Token: {{$auth.token.length}}<pre>{{$auth.token}}</pre></p>
    <p>accessToken: {{$auth.accessToken.length}}<pre>{{$auth.accessToken}}</pre></p>
    <pre>{{$auth.user}}</pre>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
  h2 {
    margin-top: 0;
  }
  pre {
    padding: 8px;
    margin: 0 auto;
    background: #e8e8e8;
    border-radius: 3px;
    overflow-x: auto;
  }
  .hello {
    margin: 0 auto;
  }
</style>
