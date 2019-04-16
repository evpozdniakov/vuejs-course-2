<template>
  <div class="user-profile">
    <div v-if="user">
      <h2 class="subtitle">
        {{ userFullName }}
      </h2>
      <user-form v-model="user" />
    </div>
    <div v-else>
      <p>Loading...</p>
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
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    userFullName() {
      const { firstName, lastName } = this.user;
      return `${firstName} ${lastName}`;
    },
  },
};
</script>
