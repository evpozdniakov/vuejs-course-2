<template>
  <nav
    class="navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a
        class="navbar-item"
        href="/"
      >
        <img
          src="/assets/logo.png"
          height="28"
          width="28"
        >
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        @click="toggleBurger"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div :class="navbarMenuClassName">
      <div class="navbar-start">
        <router-link
          class="navbar-item"
          to="/"
          exact
        >
          Home
        </router-link>
        <router-link
          class="navbar-item"
          to="/users"
        >
          Users
        </router-link>
        <router-link
          class="navbar-item"
          to="/account"
        >
          Account
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isNavbarActive: false,
    }
  },
  computed: {
    navbarMenuClassName() {
      return `navbar-menu ${this.isNavbarActive ? 'is-active' : ''}`
    },
  },
  methods: {
    toggleBurger() {
      this.isNavbarActive = !this.isNavbarActive;
    },
  },
}
</script>

<style>
a.navbar-item.router-link-active {
  font-weight: 900;
}
</style>
