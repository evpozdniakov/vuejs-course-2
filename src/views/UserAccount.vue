<template>
  <div class="user-account">
    <h1 class="title">User Account</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="isError" class="notification is-warning">
      User not found
    </div>
    <user-profile v-else :user="user" />
  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue';

export default {
  name: 'User',
  components: {
    'user-profile': UserProfile,
  },
  data() {
    return {
      user: null,
      isLoading: true,
      isError: false,
    };
  },
  mounted() {
    this.readUserIdFromUrl()
      .then(this.loadUserById)
      .then(data => {
        this.user = data;
        this.isLoading = false;
      })
      .catch(error => {
        this.isLoading = false;
        this.isError = error;
      });
  },
  methods: {
    loadUserById(id) {
      return fetch(`http://localhost:3000/users/${id}`).then(response =>
        response.json(),
      );
    },
    readUserIdFromUrl() {
      const { id } = this.$route.query;

      if (id) {
        return Promise.resolve(id);
      }

      return Promise.reject(new Error('Unable to read user id'));
    },
  },
};
</script>
