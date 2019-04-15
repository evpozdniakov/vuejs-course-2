<template>
  <div class="user-account">
    <h1>User Account</h1>
    <UserProfile :user="user" />
  </div>
</template>

<script>
import UserProfile from "@/components/UserProfile.vue";

export default {
  name: "User",
  components: {
    UserProfile
  },
  data() {
    return {
      user: null
    };
  },
  mounted() {
    this.readUserIdFromUrl()
      .then(this.loadUserById)
      .then(data => (this.user = data))
      .catch(console.warn);
  },
  methods: {
    loadUserById(id) {
      return fetch(`http://localhost:3000/users/${id}`).then(response =>
        response.json()
      );
    },
    readUserIdFromUrl() {
      const { id } = this.$route.query;

      if (id !== "") {
        return Promise.resolve(id);
      }

      return Promise.reject(new Error("Unable to read user id"));
    }
  }
};
</script>
