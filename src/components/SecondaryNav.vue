<template>
  <ul class="nav nav-secondary justify-content-center">
    <li v-for="(nav, i) in navItems" :key="i" class="nav-item">
      <a class="nav-link" :class="{ active: nav.active }" :href="nav.link">{{ nav.name }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    navItems: Array
  }
}
</script>

