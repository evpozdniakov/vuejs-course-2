<template>
  <div class="users">
    <h1 class="title level">
      Users
      <button
        type="button"
        class="button is-primary is-small"
        :disabled="isLoading"
        @click="loadUsers"
      >
        Refresh
      </button>
    </h1>
    <div
      v-if="isLoading"
      class="notification is-info"
    >
      Loading...
    </div>
    <div
      v-else-if="noUsersFound"
      class="notification is-success"
    >
      No users has been found.
    </div>
    <user-list
      v-else
      :users="users"
    />
  </div>
</template>

<script>
import UserList from '@/components/UserList.vue';
import * as utils from '@/lib/utils';

export default {
  name: 'Home',
  components: {
    'user-list': UserList,
  },
  data() {
    return {
      isLoading: true,
      users: [],
    };
  },
  computed: {
    noUsersFound() {
      return this.isLoading === false && this.users.length === 0
    },
  },
  mounted() {
    this.loadUsers().catch(console.warn);
  },
  methods: {
    loadUsers() {
      this.isLoading = true;
      return fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(utils.delay())
        .then(data => {
          this.users = data;
          this.isLoading = false;
          console.log('Data loading completed.');
        });
    },
  },
};
</script>
