<template>
  <div id="book">
    <div class="container">
      <h2 class="font-slabo underscore underscore-left my-5">Book Title</h2>

      <image-and-text-block image="/images/books/Path 688@2x.png" link="/books" linkText="back to the books overview">

        <div class="col-lg-5 font-size-14">
          <div class="text-primary">Title</div>
          <p>Et harum quidem rerum</p>
          <div class="text-primary">Author</div>
          <p>Et harum quidem rerum</p>
          <div class="text-primary">Publisher</div>
          <p>Et harum quidem rerum</p>
          <div class="text-primary">Release date</div>
          <p>Et harum quidem rerum</p>
          <div class="text-primary">Isbn number</div>
          <p>Et harum quidem rerum</p>
        </div>

      </image-and-text-block>

      <project-info preDate="Released"></project-info>

      <h2 class="text-center underscore">Related items</h2>
      <div class="row">
        <div v-for="(book, i) in featuredBooks" :key="i" class="col-lg-4">
          <card-img-top :image="book.image" :text="book.text" :link="book.link"></card-img-top>
        </div>
      </div>

    </div>
    <div class="container pt-5">
      <hr>
    </div>
  </div>

</template>

<script>
import CarouselHalfWidth from '@/components/CarouselHalfWidth'
import ProjectInfo from '@/components/ProjectInfo'
import ImageAndTextBlock from '@/components/ImageAndTextBlock'
import CardImgTop from '@/components/Cards/CardImgTop'

export default {
  name: 'book',
  components: {
    CarouselHalfWidth,
    ProjectInfo,
    ImageAndTextBlock,
    CardImgTop
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