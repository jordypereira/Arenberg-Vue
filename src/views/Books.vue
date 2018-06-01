<template>
  <div id="books">

    <div class="container">
      <h2 class="text-center underscore mb-5">Featured</h2>
      <div class="row">
        <div v-for="(book, i) in featuredBooks" :key="i" class="col-4">
          <card-img-top :image="book.image" :text="book.text" :link="book.link"></card-img-top>
        </div>
      </div>
      <book-preview image="/images/books/Path 688@2x.png"></book-preview>
      <book-preview image="/images/books/Path 688@2x.png" :reverse="true"></book-preview>
    </div>

    <pagination :pagination="pagination"></pagination>

    <div class="container">
      <h2 class="text-center underscore mb-5">Search books</h2>
      <form class="form-row justify-content-between">
        <div class="form-group col-9">
          <input type="text" placeholder="Search by Publisher, ISBN code" class="form-control input-lg">
        </div>
        <div class="col-2">
          <button class="btn btn-primary btn-lg">Search</button>
        </div>
      </form>
      <h4 class="text-primary my-5">Results</h4>
      <div class="row">
        <book-search-result v-for="i in 4" :key="i"></book-search-result>
      </div>
    </div>

    <div class="container pt-2">
      <hr>
    </div>

  </div>
</template>

<script>
  import CardImgTop from '@/components/Cards/CardImgTop'
  import BookPreview from '@/components/Books/BookPreview'
  import Pagination from '@/components/Pagination'
  import BookSearchResult from '@/components/Books/BookSearchResult'

  export default {
    components: {
      CardImgTop,
      BookPreview,
      Pagination,
      BookSearchResult
    },
      data() {
      return {
        featuredBooks: [
          {
            image: '/images/books/Path 688@2x.png',
            text:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
            link: 'book'
          },{
            image: '/images/books/Path 688@2x.png',
            text:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
            link: 'book'
          },{
            image: '/images/books/Path 688@2x.png',
            text:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
            link: 'book'
          },
        ],
        pagination: [{ link: '#', active: true}, { link: '#'}]
      }
    }
  }
</script>
