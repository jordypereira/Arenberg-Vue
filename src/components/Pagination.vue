<template>
  <nav aria-label="Page navigation">
    <ul class="pagination justify-content-center">
      <li v-for="(pag, i) in pagination" :key="i" class="page-item" :class="{ active: pag.active }">
        <a class="page-link" :href="pag.link">{{ i+1 }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    pagination: Array
  }
}
</script>