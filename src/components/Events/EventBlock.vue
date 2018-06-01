<template>
  <div class="event col-lg-4">
    <router-link to="/event">
      <img :src="image" alt="" class="img-fluid">
      <div class="event-inner d-flex flex-column align-items-center justify-content-center">
        <div class="event-text d-flex flex-column align-items-center justify-content-center">
          <div class="date">{{ date }}</div>
          <p>{{ text }}</p>
          <a href="">read more ></a>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
  image: String,
  text: String,
  date: String
}
}
</script>