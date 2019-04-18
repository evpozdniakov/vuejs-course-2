<template>
  <form class="user-form">
    <text-field
      v-model="user.firstName"
      label="First name"
    />
    <text-field
      v-model="user.lastName"
      label="Last name"
    />
    <number-field
      v-model="user.age"
      label="Age"
    />
    <text-field
      v-model="user.email"
      label="Email"
      type="email"
    />
    <text-field
      v-model="user.phone"
      label="Phone"
      type="phone"
    />
    <text-field
      v-model="user.address"
      label="Address"
    />
    <checkbox-field
      v-model="user.isActive"
      label="Active"
    />
    <text-field
      v-model="user.registered"
      disabled
      label="Registered"
    />
  </form>
</template>

<script>
import TextField from '@/components/common/TextField.vue';
import CheckboxField from '@/components/common/CheckboxField.vue';
import NumberField from '@/components/common/NumberField.vue';

export default {
  name: 'UserForm',
  components: {
    'text-field': TextField,
    'checkbox-field': CheckboxField,
    'number-field': NumberField,
  },
  model: {
    prop: 'user',
    event: 'update',
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  watch: {
    user() {
      this.$emit('update', user)
    },
  },
};
</script>
