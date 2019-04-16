<template>
  <div class="field">
    <label class="label">{{ label }}:</label>
    <div class="control">
      <input
        v-model="fieldValue"
        class="input"
        :type="type"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextField',
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default() {
        return 'text';
      },
    },
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      fieldValue: this.value,
    }
  },
  watch: {
    fieldValue() {
      this.$emit('input', this.fieldValue)
    },
  },
};
</script>
