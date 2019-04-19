<template>
  <div class="field">
    <label class="label">{{ label }}:</label>
    <div class="control">
      <input
        class="input"
        :readonly="readonly"
        :disabled="disabled"
        :type="type"
        :value="fieldValue"
        @input="update"
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
      default: false,
    },
    label: {
      type: String,
      required: true,
    },
    readonly: {
      type: Boolean,
      default: false,
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
  computed: {
    fieldValue() {
      return this.value;
    },
  },
  methods: {
    update(ev) {
      this.$emit('input', ev.target.value)
    },
  },
};
</script>
