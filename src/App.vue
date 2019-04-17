<template>
  <div
    id="app"
    class="section"
  >
    <div class="container">
      <nav-bar />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'App',
  components: {
    'nav-bar': Navbar,
  },
};
</script>
