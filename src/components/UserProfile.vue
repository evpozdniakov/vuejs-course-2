<template>
  <div class="user-profile">
    <div v-if="user">
      <h2 class="subtitle">{{ userFullName }}</h2>
      <form>
        <p>
          First name:
          <br />
          <input :value="user.firstName" />
        </p>
        <p>
          Last name:
          <br />
          <input :value="user.lastName" />
        </p>
      </form>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default() {
        return {};
      },
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
