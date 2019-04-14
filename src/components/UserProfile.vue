<template>
  <div class="user-profile">
    <div v-if="user">
      <h2 class="subtitle">{{ user.name }}</h2>
      <form>
        <p>
          Имя:
          <br />
          <input :value="user.name" />
        </p>
      </form>
    </div>
    <div v-else>
      <p>Данные загружаются</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>
