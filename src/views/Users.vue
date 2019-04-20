<template>
  <div class="users">
    <h1 class="title level">
      Users
    </h1>
    <user-list :users-total-number="usersTotalNumber" />
  </div>
</template>

<script>
import UserList from '@/components/UserList.vue';

export default {
  name: 'Home',
  components: {
    'user-list': UserList,
  },
  data() {
    return {
      usersTotalNumber: 28,
    };
  },
};
</script>
