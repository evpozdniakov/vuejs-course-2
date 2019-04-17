<template>
  <div class="field">
    <label class="checkbox">
      <input
        v-model="isChecked"
        type="checkbox"
        class="checkbox"
      >
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isChecked: this.value,
    }
  },
  watch: {
    isChecked() {
      this.$emit('input', this.isChecked)
    },
  },
};
</script>

<style>
</style>
