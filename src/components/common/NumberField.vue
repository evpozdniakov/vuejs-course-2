<template>
  <div class="field number-field">
    <label class="label">{{ label }}:</label>
    <div class="control">
      <input
        v-model="fieldValue"
        class="input"
        type="number"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'NumberField',
  props: {
    label: {
      type: String,
      required: true,
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

<style>
.number-field input {
  width: 20%;
  min-width: 5rem;
}
</style>
