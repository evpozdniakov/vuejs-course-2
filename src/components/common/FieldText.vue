<template>
  <div class="field">
    <label class="label">{{ label }}:</label>
    <div class="control">
      <input
        v-model="value"
        class="input"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'FieldText',
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
};
</script>
