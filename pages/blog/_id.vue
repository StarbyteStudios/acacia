<template>
  <main id="main">

    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>{{ article.title }}</h2>
          <ol>
            <nuxt-link tag="li" to="/"><a>Home</a></nuxt-link>
            <li>Post Details</li>
          </ol>
        </div>

      </div>
    </section><!-- End Breadcrumbs -->

    <!-- ======= Portfolio Details Section ======= -->
    <section id="portfolio-details" class="portfolio-details">
      <div class="container">

        <div class="portfolio-details-container" data-aos="fade-up" data-aos-delay="100">
          <img class="card-img-top" v-if="article.image" :src="api_url + article.image.url" alt="Card image cap">

          <div class="portfolio-info">
            <h3>Post Details</h3>
            <ul>
              <li><strong>Posted On</strong>: {{ moment(article.published_at).format("MMM Do YY") }}</li>
              <li><strong>Posted By</strong>: Admin</li>
            </ul>
          </div>

        </div>

        <div class="portfolio-description">
          <h2>{{ article.title }}</h2>
          <p class="text-justify">
            {{ article.content }}
          </p>
        </div>
        <nuxt-link to="/blog" tag="a" class="btn btn-outline-dark">Back to list</nuxt-link>
      </div>
    </section><!-- End Portfolio Details Section -->

  </main><!-- End #main -->
</template>

<script>
import articleQuery from '~/apollo/queries/article/article.gql'
let moment = require('moment')
export default {
  data () {
    return {
      article: {},
      api_url: process.env.strapiBaseUri,
      moment: moment
    }
  },
  apollo: {
    article: {
      prefetch: true,
      query: articleQuery,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  }
}
</script>
