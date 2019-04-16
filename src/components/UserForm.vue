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
    <field-checkbox
      v-model="user.isActive"
      label="Active"
    />
  </form>
</template>

<script>
import TextField from '@/components/common/TextField.vue';
import FieldCheckbox from '@/components/common/FieldCheckbox.vue';
import NumberField from '@/components/common/NumberField.vue';

export default {
  name: 'UserForm',
  components: {
    'text-field': TextField,
    'field-checkbox': FieldCheckbox,
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
};
</script>
