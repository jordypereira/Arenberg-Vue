<template>
  <div class="row mt-3">
    <div class="col-12"><img :src="image" alt="" class="img-fluid"></div>
    <div class="col-12 mt-3">
      <p>{{ text }}</p>
    </div>
    <div class="col-12">
      <router-link :to="link">read more ></router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    text: String,
    link: String,
  }
}
</script>
