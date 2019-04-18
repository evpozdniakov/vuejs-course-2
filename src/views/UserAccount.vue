<template>
  <div class="user-account">
    <h1 class="title">
      User Account
    </h1>
    <user-profile
      :user-id="userId"
    />
  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue';

export default {
  name: 'User',
  components: {
    'user-profile': UserProfile,
  },
  computed: {
    userId() {
      const { id = '0' } = this.$route.query || {};

      return id;
    },
  },
};
</script>
