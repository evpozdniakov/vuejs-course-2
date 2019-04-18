<template>
  <div class="user-profile">
    <div
      v-if="isLoading"
      class="notification is-info"
    >
      Loading...
    </div>
    <div
      v-else-if="isError"
      class="notification is-warning"
    >
      User not found
    </div>
    <div
      v-else
      class="columns"
    >
      <div class="column is-two-thirds">
        <h2 class="subtitle">
          {{ userFullName }}
        </h2>
        <user-form v-model="user" />
      </div>
    </div>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue';

export default {
  components: {
    'user-form': UserForm,
  },
  props: {
    userId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      user: null,
      isLoading: true,
      isError: false,
    };
  },
  computed: {
    userFullName() {
      const { firstName, lastName } = this.user;
      return `${firstName} ${lastName}`;
    },
  },
  mounted() {
    this.loadUserById(this.userId)
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
      return fetch(`http://localhost:3000/users/${id}`)
        .then(response => response.json())
        .then(data => {
          if (data.id === id) {
            return data;
          }

          throw new Error('User not found');
        });
    },
  },
};
</script>
