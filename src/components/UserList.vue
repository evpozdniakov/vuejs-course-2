<template>
  <div>
    <list-pagination
      v-model="ippConfig"
      :items-total-number="usersTotalNumber"
    />
    <div
      v-if="isLoading"
      class="notification is-info"
    >
      Loading...
    </div>
    <table
      v-else
      class="table"
    >
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
  </div>
</template>

<script>
import ListPagination from '@/components/common/ListPagination.vue';
import * as utils from '@/lib/utils';

export default {
  components: {
    'list-pagination': ListPagination,
  },
  props: {
    usersTotalNumber: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      ippConfig: {
        currentPage: 1,
        itemsPerPage: 10,
      },
      isLoading: null,
      users: null,
    };
  },
  watch: {
    'ippConfig.currentPage': 'loadUsers',
    'ippConfig.itemsPerPage': 'loadUsers',
  },
  mounted() {
    this.loadUsers();
  },
  methods: {
    getUserFullName(user) {
      return `${user.firstName} ${user.lastName}`;
    },
    linkToUserAccount(id) {
      return `/account/${id}`;
    },
    loadUsers() {
      debugger;
      this.isLoading = true;

      const { currentPage, itemsPerPage } = this.ippConfig;

      return fetch(`http://localhost:3000/users?_page=${currentPage}&_limit=${itemsPerPage}`)
        .then(response => response.json())
        .then(utils.delay())
        .then(data => {
          this.users = data;
          this.isLoading = false;
        })
        .catch(console.warn);
    },
  },
};
</script>
