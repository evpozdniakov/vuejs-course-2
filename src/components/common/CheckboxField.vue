<template>
  <div class="field">
    <label class="checkbox">
      <input
        type="checkbox"
        class="checkbox"
        :checked="isChecked"
        @input="update"
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
  computed: {
    isChecked() {
      return this.value;
    },
  },
  methods: {
    update(ev) {
      this.$emit('input', ev.target.checked)
    },
  },
};
</script>
