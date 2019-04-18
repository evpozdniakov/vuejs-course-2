<template>
  <div class="field">
    <label class="label">{{ label }}:</label>
    <div class="control">
      <input
        v-model="fieldValue"
        class="input"
        :readonly="readonly"
        :disabled="disabled"
        :type="type"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextField',
  props: {
    disabled: {
      type: Boolean,
      default() {
        return false;
      },
    },
    label: {
      type: String,
      required: true,
    },
    readonly: {
      type: Boolean,
      default() {
        return false;
      },
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
