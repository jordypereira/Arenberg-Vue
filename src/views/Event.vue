<template>
  <div class="event mt-5">
    <div class="container">
      <div class="text-primary">18 Juli 2017, 9PM</div>
      <h2 class="font-slabo underscore underscore-left mb-5">Event Title</h2>

      <image-and-text-block image="/images/events/200100b034b453742afb5f09b1f5ca1f@2x.png" link="/events" linkText="back to the event overview">

        <div class="col-lg-5 bg-light p-5 max-width-350 m-auto">
          <div class="text-primary pb-3">Featured Events</div>
          <p>Et harum quidem rerum
            <br>Et harum quidem rerum</p>
          <div class="text-primary pb-3">Upcoming Events</div>
          <p>Et harum quidem rerum
            <br>Et harum quidem rerum
            <br>Et harum quidem rerum</p>
          <div class="text-primary pb-3">Categories</div>
          <p>All prizes
            <br>Arenberg Conference for History
            <br>Lunch in Enghien/Edingen
            <br>Book presentations
            <br>Archive</p>
        </div>

      </image-and-text-block>

      <project-info preDate="Published"></project-info>

      <div class="row event-teaser">
        <div class="col-lg-6">
          <img src="/images/events/cf7c96927728a16aa992aebc49667b03@2x.png" alt="" class="img-fluid">
        </div>
        <div class="col-lg-6 pl-lg-5 my-2">
          <h4 class="mb-5">Lorum ipsum dolor amet</h4>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <blockquote class="blockquote mb-5">
            Lorum ipsum dolor amet
          </blockquote>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae</p>
        </div>
      </div>
      <div class="row mt-5 event-teaser flex-row-reverse">
        <div class="col-lg-6">
          <img src="/images/events/f8597a06f2b7de18e2d998428afe0058@2x.png" alt="" class="img-fluid">
        </div>
        <div class="col-lg-6 pr-lg-5 my-2">
          <h4 class="mb-5">Lorum ipsum dolor amet</h4>
          <p>
            <b>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</b>
          </p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit</p>
        </div>
      </div>
    </div>

    <div class="content-block bg-light">
      <div class="container">
        <h4 class="text-center mb-5">Slideshow</h4>
        <carousel-half-width></carousel-half-width>
        <p class="text-center mt-2">
          <b>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</b>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselHalfWidth from '@/components/CarouselHalfWidth'
import ProjectInfo from '@/components/ProjectInfo'
import ImageAndTextBlock from '@/components/ImageAndTextBlock'

export default {
  name: 'event',
  components: {
    CarouselHalfWidth,
    ProjectInfo,
    ImageAndTextBlock
  }
}
</script>