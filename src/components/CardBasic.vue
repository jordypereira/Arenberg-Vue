<template>
  <div class="card card-basic col-md-3">
    <div class="card-body">
      <div class="card-title mb-5">
        {{ title }}
      </div>
      <p class="card-text">{{ text }}
      </p>
      <a href="" class="mb-5">read more ></a>
      <hr>
      <div class="card-info">
        <p>{{ date }}
          <br>{{ location }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
    date: String,
    location: String
  }
}
</script>
