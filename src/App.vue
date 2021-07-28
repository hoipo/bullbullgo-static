<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <Nav />
  <router-view />
</template>


<script>
import Nav from "./components/Nav";

export default {
  name: 'App',
  components: {
    Nav,
  },
}
</script>
