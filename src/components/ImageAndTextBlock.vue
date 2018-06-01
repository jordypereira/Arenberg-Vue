<template>
  <div>
    <router-link :to="link">
      <img src="/images/icons/arrow-left.png" alt="Arrow Left" class="icon mr-1"> {{ linkText}}
    </router-link>
    <div class="row mt-2 mb-5 justify-content-between">
      <div class="col-lg-6 m-2">
        <img :src="image" alt="" class="img-fluid">
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    link: String,
    linkText: String
  }
}
</script>
