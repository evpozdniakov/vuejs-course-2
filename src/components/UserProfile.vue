<template>
  <div class="user-profile">
    <div v-if="user">
      <h2 class="subtitle">{{ userFullName }}</h2>
      <form>
        <div class="field">
          <label class="label">First name:</label>
          <div class="control">
            <input class="input" :value="user.firstName" />
          </div>
        </div>
        <div class="field">
          <label class="label">Last name:</label>
          <div class="control">
            <input class="input" :value="user.lastName" />
          </div>
        </div>
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
