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
  model: {
    prop: 'config',
    event: 'changeConfig',
  },
  props: {
    config: {
      type: Object,
      required: true,
      validator(config) {
        if (typeof config.itemsPerPage !== 'number') {
          throw new Error('itemsPerPage must be a number');
        }
        if (typeof config.currentPage !== 'number') {
          throw new Error('currentPage must be a number');
        }

        return true;
      },
    },
    itemsTotalNumber: {
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
    currentPage() {
      return this.config.currentPage;
    },
    isBackwardDisabled() {
      return this.currentPage === 1;
    },
    isForwardDisabled() {
      return this.currentPage === this.totalNumberOfPages;
    },
    itemsPerPage() {
      return this.config.itemsPerPage;
    },
    totalNumberOfPages() {
      return Math.ceil(this.itemsTotalNumber / this.itemsPerPage);
    },
  },
  methods: {
    emitChangeConfig(property) {
      this.$emit('changeConfig', Object.assign(this.config, property));
    },
    getOptionSelected(val) {
      return val === this.itemsPerPage;
    },
    goBack() {
      this.goToPage(this.currentPage - 1);
    },
    goForward() {
      this.goToPage(this.currentPage + 1);
    },
    goToPage(page) {
      this.emitChangeConfig({ currentPage: page });
    },
    pageButtonClass(page) {
      return `button ${page === this.currentPage ? 'is-info is-selected' : ''}`;
    },
    updateIpp(ev) {
      const ipp = Number(ev.target.value);
      this.emitChangeConfig({ itemsPerPage: ipp });
    },
  },
};
</script>
