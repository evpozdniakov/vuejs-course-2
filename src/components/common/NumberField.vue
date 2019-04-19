<template>
  <div class="field number-field">
    <label class="label">{{ label }}:</label>
    <div class="control">
      <input
        class="input"
        type="number"
        :value="fieldValue"
        @input="update"
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
      type: [String, Number],
      required: true,
    },
  },
  computed: {
    fieldValue() {
      return this.value;
    },
  },
  methods: {
    update(ev) {
      const stringValue = ev.target.value;
      const numericValue = stringValue.length ? Number(stringValue) : '';
      this.$emit('input', numericValue);
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
