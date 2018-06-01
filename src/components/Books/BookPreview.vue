<template>
  <div class="book-preview py-5">
    <div class="container">
      <div class="row" :class="{'flex-row-reverse': reverse}">
        <div class="col-lg-6 pr-5">
          <img class="img-fluid" :src="image" alt="">
        </div>
        <div class="col-lg-6 px-5 d-flex flex-column justify-content-center">
          <h4>Title, subtitle | Author</h4>
          <p class="text-primary">Publisher, release date, number of pages, ISBN code</p>
          <p>
            <b>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </b>
          </p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    reverse: Boolean,
  }
}
</script>

