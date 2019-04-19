<template>
  <div class="list-pagination level">
    <div class="level-item">
      <div class="buttons has-addons">
        <span
          class="button is-small"
          :disabled="isBackwardDisabled"
          @click="goBack"
        >&larr; Back</span>
        <span
          v-for="page in totalNumberOfPages"
          :key="page"
          :class="pageButtonClass(page)"
          @click="goToPage(page)"
        >{{ page }}</span>
        <span
          class="button is-small"
          :disabled="isForwardDisabled"
          @click="goForward"
        >Forward &rarr;</span>
      </div>
    </div>
    <div class="level-right level">
      <span class="level-item">Items per page:</span>
      <select
        class="select level-item"
        @input="updateIpp"
      >
        <option
          v-for="item in ippList"
          :key="item"
          :value="item"
          :selected="getOptionSelected(item)"
        >
          {{ item }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemsTotalNumber: {
      type: Number,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      ippList: [5, 10, 20, 50, 100],
    };
  },
  computed: {
    isBackwardDisabled() {
      return this.currentPage === 1;
    },
    isForwardDisabled() {
      return this.currentPage === this.totalNumberOfPages;
    },
    totalNumberOfPages() {
      return Math.ceil(this.itemsTotalNumber / this.itemsPerPage);
    },
  },
  methods: {
    getOptionSelected(val) {
      return val === this.itemsPerPage;
    },
    goBack() {
      this.goToPage(this.currentPage - 1);
    },
    goForward() {
      this.goToPage(this.currentPage + 1);
    },
    goToPage(val) {
      console.log('@@@@@@@@', val);
      this.$emit('changeCurrentPage', val);
    },
    pageButtonClass(page) {
      return `button ${
        page === this.currentPage ? 'is-info is-selected' : ''
      }`;
    },
    updateIpp(ev) {
      this.$emit('changeItemsPerPage', Number(ev.target.value));
    },
  },
};
</script>

<style>
</style>
