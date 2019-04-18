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
          <router-link
            class="button is-small is-outlined"
            :to="linkToUserAccount(user.id)"
          >
            Edit
          </router-link>
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
    linkToUserAccount(id) {
      return `/account/${id}`
    },
  },
};
</script>
