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
        <user-form
          :value="user"
          @update="updateUser"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
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
      return axios.get(`http://localhost:3000/users/${id}`)
        .then(response => response.data)
    },
    updateUser(updatedUserData) {
      return axios.patch(`http://localhost:3000/users/${updatedUserData.id}`, updatedUserData)
    },
  },
};
</script>
