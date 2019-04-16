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
          src="/logo.png"
          height="28"
          width="28"
        >
      </a>
    </div>

    <div class="navbar-menu">
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

<script></script>

<style>
a.navbar-item.router-link-active {
  font-weight: 900;
}
</style>
