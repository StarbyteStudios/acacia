<template>
  <main id="main">
    <section id="hero" style="height: 40vh" class="d-flex align-items-center">
      <div
        class="container text-center position-relative"
        data-aos="fade-in"
        data-aos-delay="200"
      >
        <h1>Blog</h1>
      </div>
    </section>
    <!-- End Hero -->

    <!-- ======= Services Section ======= -->
    <section id="services" class="services section-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div
              class="card mb-4"
              v-for="article in articles"
              :key="article.id"
            >
              <div class="crop-image">
                <img
                  class="card-img-top"
                  :src="api_url + article.image.url"
                  alt="Card image cap"
                />
              </div>
              <div class="card-body">
                <h3 class="card-title">{{ article.title }}</h3>
              </div>
              <div class="card-footer text-muted">
                Posted on
                {{ moment(article.published_at).format('MMM Do YY') }} by
                <a href="#">Admin</a>
                <nuxt-link
                  :to="{ name: 'blog-id', params: { id: article.id } }"
                  tag="a"
                  class="btn btn-sm btn-outline-dark float-right"
                  >Read More →</nuxt-link
                >
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <!-- Search Widget -->
            <div class="card my-4">
              <h5 class="card-header">Search</h5>
              <div class="card-body">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search for..."
                  />
                  <span class="input-group-append">
                    <button class="btn btn-secondary" type="button">Go!</button>
                  </span>
                </div>
              </div>
            </div>

            <!-- Categories Widget -->
            <div class="card my-4">
              <h5 class="card-header">Categories</h5>
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-6">
                    <ul class="list-unstyled mb-0">
                      <li>
                        <a href="#">Web Design</a>
                      </li>
                      <li>
                        <a href="#">HTML</a>
                      </li>
                      <li>
                        <a href="#">Freebies</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <ul class="list-unstyled mb-0">
                      <li>
                        <a href="#">JavaScript</a>
                      </li>
                      <li>
                        <a href="#">CSS</a>
                      </li>
                      <li>
                        <a href="#">Tutorials</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Side Widget -->
            <div class="card my-4">
              <h5 class="card-header">Side Widget</h5>
              <div class="card-body">
                You can put anything you want inside of these side widgets. They
                are easy to use, and feature the new Bootstrap 4 card
                containers!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Services Section -->
  </main>
  <!-- End #main -->
</template>

<script>
import articlesQuery from '~/apollo/queries/articles/articles'
var moment = require('moment')
export default {
  data() {
    return {
      articles: [],
      api_url: process.env.strapiBaseUri,
      moment: moment,
    }
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery,
      variables() {
        return { len: 0 }
      },
    },
  },
}
</script>

<style scoped>
.crop-image {
  height: 175px;
  overflow: hidden;
}
</style>
