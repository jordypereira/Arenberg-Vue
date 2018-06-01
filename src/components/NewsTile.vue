<template>
  <div class="news-tile d-flex flex-column col-md-4">
    <img :src="image" alt="News Image" class="card-img-top">
    <p class="pt-2">
      {{ text }}
    </p>
    <a href="">read more ></a>
  </div>
</template>

<script>
export default {
  props: {
  image: String,
  text: String
}
}
</script>
