<template>
  <nav class="navbar navbar-expand-lg navbar-light justify-content-lg-center">
    <router-link class="navbar-brand navbar-brand-sm d-lg-none" to="/">
      <img src="/images/Path 692@2x.png" width="30" height="auto" class="d-inline-block mr-3" alt="Arenberg Foundation logo"> Arenberg Foundation</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse flex-column" id="navbarSupportedContent">
      <div class="container">
        <ul class="nav nav-lang justify-content-center justify-content-lg-end">
          <li class="nav-item">NL</li>
          <li class="nav-item active">EN</li>
          <li class="nav-item">FR</li>
          <li class="nav-item">DE</li>
        </ul>
        <ul class="navbar-nav m-auto align-items-center justify-content-between">
          <router-link class="navbar-brand d-none d-lg-block" to="/">
            <img src="/images/Path 692@2x.png" width="30" height="auto" class="d-inline-block mr-3" alt="Arenberg Foundation logo"> Arenberg Foundation</router-link>
          <div class="nav-items d-flex flex-column flex-lg-row">
            <li class="nav-item">
              <router-link class="nav-link" to="./about.html">About Us
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">History</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/events">Events</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/books">Books</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">Contact</router-link>
            </li>
            <li class="nav-item">
              <a class="" href="#">
                <img src="/images/path.png" alt="">
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.nav-item > .router-link-exact-active {
  background-color: #be2832;
  color: #fff !important;
}
</style>

