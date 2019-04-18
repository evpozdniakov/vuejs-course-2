<template>
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Registered</th>
        <th>Active</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="user in users"
        :key="user.id"
      >
        <td>{{ getUserFullName(user) }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.registered }}</td>
        <td>{{ user.isActive }}</td>
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
    getUserFullName(user) {
      return `${user.firstName} ${user.lastName}`
    },
    linkToUserAccount(id) {
      return `/account/${id}`
    },
  },
};
</script>
