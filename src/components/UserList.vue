<template>
  <table class="table">
    <tbody>
      <tr
        v-for="user in users"
        :key="user.id"
      >
        <td>{{ user.firstName }}</td>
        <td>({{ user.lastName }})</td>
        <td>
          <button
            type="button"
            class="button is-small is-outlined"
            @click="openUserProfile(user.id)"
          >
            Edit
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  methods: {
    openUserProfile(id) {
      this.$router.push(`/account?id=${id}`);
    },
  },
};
</script>
