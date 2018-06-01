<template>
  <div class="event-preview py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 pr-5">
          <img class="img-fluid" :src="image" alt="">
        </div>
        <div class="col-lg-6 px-5 d-flex flex-column justify-content-center">
          <p>Published |
            <span class="text-primary">{{ date }}</span>
          </p>
          <p class="text-primary h3">{{ title }}</p>
          <p>{{ text }}</p>
          <router-link to="/event">read more ></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    date: String,
    title: String,
    text: String
  }
}
</script>

