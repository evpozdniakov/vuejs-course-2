<template>
  <div>
    <list-pagination
      :items-total-number="users.length"
      :items-per-page="ipp"
      :current-page="currentPage"
      @changeItemsPerPage="changeIpp"
      @changeCurrentPage="changeCurrentPage"
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
      ipp: 10,
      currentPage: 1,
    };
  },
  methods: {
    applyPagination(items) {
      const from = (this.currentPage - 1) * this.ipp;

      return items.slice(from, from + this.ipp);
    },
    changeCurrentPage(val) {
      this.currentPage = val;
    },
    changeIpp(val) {
      this.ipp = val;
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
