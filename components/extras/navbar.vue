<template>
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container">
      <div class="header-container d-flex align-items-center">
        <div class="logo mr-auto">
          <h1 class="text-light"><a href="index.html"><span>Acacia</span></a></h1>
          <!-- Uncomment below if you prefer to use an image logo -->
          <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
        </div>

        <nav class="nav-menu d-none d-lg-block">
          <ul>
            <nuxt-link to="/" tag="li"><a>Home</a></nuxt-link>
            <nuxt-link to="/about" tag="li"><a>About Us</a></nuxt-link>
            <li class="drop-down"><a style="cursor: pointer">Categories</a>
              <ul>
                <nuxt-link v-for="category in categories" :key="category.id" tag="li" :to="{ name: 'categories-id', params: { id: category.id}}"><a>{{category.name}}</a></nuxt-link>
                <nuxt-link to="/categories" tag="li"><a>All Categories</a></nuxt-link>
              </ul>
            </li>
            <nuxt-link to="/blog" tag="li"><a>Blog</a></nuxt-link>
            <nuxt-link to="/contact" tag="li"><a>Contact Us</a></nuxt-link>

            <li class="get-started"><a href="#about">Get Started</a></li>
          </ul>
        </nav><!-- .nav-menu -->
      </div><!-- End Header Container -->
    </div>
  </header><!-- End Header -->
</template>

<script>
import categoriesQuery from '~/apollo/queries/category/categories.gql'
export default {
  data () {
    return {
      categories: [],
    }
  },
  apollo: {
    categories: {
      prefetch: true,
      query: categoriesQuery
    }
  }
}
</script>
