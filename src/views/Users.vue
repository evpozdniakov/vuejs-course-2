<template>
  <div class="users">
    <h1 class="title">Users</h1>
    <div v-if="isLoading">Loading...</div>
    <user-list v-else :users="users" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import UserList from '@/components/UserList.vue';

export default {
  name: 'Home',
  components: {
    'user-list': UserList
  },
  data() {
    return {
      isLoading: true,
      users: []
    };
  },
  mounted() {
    this.loadUsers().catch(console.warn);
  },
  methods: {
    loadUsers() {
      return fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(data => {
          this.users = data;
          this.isLoading = false;
          console.log('Data loading completed.');
        });
    }
  }
};
</script>
