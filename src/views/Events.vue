<template>
  <div class="home">
    <header-image image="/images/events/header.png"></header-image>

    <secondary-nav :navItems="navItems"></secondary-nav>

    <div id="actueel" class="content-block">
      <div class="container d-flex flex-column align-items-center">
        <h2 class="text-center underscore">Featured</h2>
        <div class="row py-4">
          <news-tile text="Internationale Conferentie: Bewaffneter Widerstand in Ostmittel- un Südosteuropa 1945-1956." image="/images/Mask Group 113@2x.png"></news-tile>
          <news-tile text="Kamermuziekconcert in de kerk van Lauenen, Berner Oberland" image="/images/Mask Group 114@2x.png"></news-tile>
          <news-tile text="Die Arenberger Geschichte einer europäischen Dynastie Band 1. Die Arenberger in der Eifel" image="/images/Mask Group 115@2x.png"></news-tile>
        </div>
      </div>
    </div>

    <div id="upcoming" class="content-block">
      <h2 class="text-center underscore">Upcoming</h2>
      <div class="container">
        <p class="text-right">
          <img src="images/events/arrow-bottom.png" alt=""> sort by</p>
      </div>
      <event-preview image="/images/events/dd546396f5e77123bb3163d7007fa5dc@2x.png" date="18 juli 2017" title="Et harum quidem rerum facilis est et expedita distinctio" text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."></event-preview>
      <event-preview class="bg-light" image="/images/events/5a32199c231d08e144fc0d278855c9ba@2x.png" date="18 juli 2017" title="Et harum quidem rerum facilis est et expedita distinctio" text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."></event-preview>
      <event-preview image="/images/events/8113ecee9fe46584a08fbca39e799f44@2x.png" date="18 juli 2017" title="Et harum quidem rerum facilis est et expedita distinctio" text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."></event-preview>
      <event-preview class="bg-light" image="/images/events/d8da264f0cbb94144c351237eedbe638@2x.png" date="18 juli 2017" title="Et harum quidem rerum facilis est et expedita distinctio" text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."></event-preview>
    </div>

    <pagination :pagination="pagination"></pagination>

    <div class="container pt-2">
      <hr>
    </div>

  </div>
</template>

<script>
import SecondaryNav from '@/components/SecondaryNav'
import NewsTile from '@/components/NewsTile'
import HeaderImage from '@/components/HeaderImage'
import EventPreview from '@/components/Events/EventPreview'
import Pagination from '@/components/Pagination'

export default {
  name: 'events',
  components: {
    SecondaryNav,
    NewsTile,
    HeaderImage,
    EventPreview,
    Pagination
  },
  data() {
    return {
      navItems: [{ link: '#', name: 'All Events', active: true}, { link: '#', name: 'Category'}, { link: '#', name: 'Category'}, { link: '#', name: 'Category'}, { link: '#', name: 'Category'}, { link: '#', name: 'Category'}],
      pagination: [{ link: '#', active: true}, { link: '#'}]
    }
  }

}
</script>
