<template>
  <div class="home">

    <CarouselFullWidth></CarouselFullWidth>

    <div id="actueel" class="content-block">
      <div class="container d-flex flex-column align-items-center">
        <h2 class="text-center underscore">Actueel</h2>
        <div class="row py-4">
          <news-tile text="Internationale Conferentie: Bewaffneter Widerstand in Ostmittel- un Südosteuropa 1945-1956." image="/images/Mask Group 113@2x.png"></news-tile>
          <news-tile text="Kamermuziekconcert in de kerk van Lauenen, Berner Oberland" image="/images/Mask Group 114@2x.png"></news-tile>
          <news-tile text="Die Arenberger Geschichte einer europäischen Dynastie Band 1. Die Arenberger in der Eifel" image="/images/Mask Group 115@2x.png"></news-tile>
        </div>
        <a href="" class="btn btn-sm btn-outline-primary" role="button">Visit news page</a>
      </div>
    </div>

    <div id="events" class="bg-light content-block">
      <div class="container d-flex flex-column align-items-center">
        <h2 class="text-center underscore">Events</h2>
        <div class="filters py-3">
          <a href="">Upcoming Events</a>
          <a href="">All Prizes</a>
          <a href="">Arenberg Conference for History</a>
          <a href="">Lunch in Enghien/Edingen</a>
          <a href="">Book presentations</a>
        </div>
        <div class="events row justify-content-center py-4">
          <event-block image="/images/Mask Group 116@2x.png" text="Kamermuziekconcert in de kerk van Lauenen, Berner Oberland" date="16/3/2018"></event-block>
          <event-block image="/images/Mask Group 117@2x.png" text="Kamermuziekconcert in de kerk van Lauenen, Berner Oberland" date="16/3/2018"></event-block>
          <event-block image="/images/Mask Group 118@2x.png" text="Kamermuziekconcert in de kerk van Lauenen, Berner Oberland" date="5/9/2018"></event-block>
        </div>
        <router-link class="btn btn-sm btn-outline-primary" role="button" to="events">Visit events page</router-link>
      </div>
    </div>

    <div id="books" class="content-block">
      <div class="container d-flex flex-column align-items-center">
        <h2 class="text-center underscore">Books</h2>
        <div class="row justify-content-center pt-2 py-5">
          <div class="col-lg-5 pr-5">
            <img src="/images/Path 690@2x.png" alt="Book" class="img-fluid">
          </div>
          <div class="col-lg-5 py-2 pl-5">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <router-link to="/book">read more ></router-link>
          </div>
        </div>
        <router-link to="/books" class="btn btn-sm btn-outline-primary" role="button">Visit the books page</router-link>
      </div>
    </div>

    <div id="prizes" class="bg-light content-block">
      <div class="container d-flex flex-column align-items-center">
        <h2 class="text-center underscore">Prizes</h2>
        <div class="row my-4 justify-content-around">
          <card-basic title="College of Europe- Arenberg European Prize" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." date="16/3/2018" location="European parlement, Brussels"></card-basic>
          <card-basic title="College of Europe- Arenberg European Prize" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." date="16/3/2018" location="European parlement, Brussels"></card-basic>
          <card-basic title="College of Europe- Arenberg European Prize" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." date="16/3/2018" location="European parlement, Brussels"></card-basic>
        </div>
        <a href="" class="btn btn-sm btn-outline-primary" role="button">Visit the prizes page</a>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import CarouselFullWidth from '@/components/CarouselFullWidth'
import NewsTile from '@/components/NewsTile'
import EventBlock from '@/components/Events/EventBlock'
import CardBasic from '@/components/Cards/CardBasic'

export default {
  name: 'home',
  components: {
    CarouselFullWidth,
    NewsTile,
    EventBlock,
    CardBasic
  }
}
</script>
