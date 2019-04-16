<template>
  <form class="user-form">
    <field-text
      v-model="user.firstName"
      label="First name"
    />
    <field-text
      v-model="user.lastName"
      label="Last name"
    />
    <number-field
      v-model="user.age"
      label="Age"
    />
    <field-text
      v-model="user.email"
      label="Email"
      type="email"
    />
    <field-text
      v-model="user.phone"
      label="Phone"
      type="phone"
    />
    <field-text
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
import FieldText from '@/components/common/FieldText.vue';
import FieldCheckbox from '@/components/common/FieldCheckbox.vue';
import NumberField from '@/components/common/NumberField.vue';

export default {
  name: 'UserForm',
  components: {
    'field-text': FieldText,
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
