<template>
  <div>
    <list-pagination
      v-model="ippConfig"
      :items-total-number="users.length"
    />
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
          v-for="user in applyPagination(users)"
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
  </div>
</template>

<script>
import ListPagination from '@/components/common/ListPagination.vue';

export default {
  components: {
    'list-pagination': ListPagination,
  },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      ippConfig: {
        currentPage: 1,
        itemsPerPage: 10,
      },
    };
  },
  computed: {
    itemsTotalNumber() {
      debugger;
      return this.users.length;
    },
  },
  methods: {
    applyPagination(items) {
      const from =
        (this.ippConfig.currentPage - 1) * this.ippConfig.itemsPerPage;

      return items.slice(from, from + this.ippConfig.itemsPerPage);
    },
    getUserFullName(user) {
      return `${user.firstName} ${user.lastName}`;
    },
    linkToUserAccount(id) {
      return `/account/${id}`;
    },
  },
};
</script>
