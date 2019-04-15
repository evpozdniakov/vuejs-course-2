<template>
  <div class="home">
    <h1 class="title">{{ title }}</h1>
    <user-list :users="users" />
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
      title: 'Список пользователей',
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
          console.log('Data loading completed.');
        });
    }
  }
};
</script>
