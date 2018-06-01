<template>
  <header>
    <img :src="image" class="img" alt="">
  </header>
</template>

<script>
export default {
  props: {
    image: String
  }
}
</script>
