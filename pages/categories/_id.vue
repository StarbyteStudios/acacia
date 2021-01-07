<template>
  <div>
    <section id="hero" class="d-flex align-items-center">
      <div class="container text-center position-relative" data-aos="fade-in" data-aos-delay="200">
        <h1>{{ category.name }}</h1>
      </div>
    </section><!-- End Hero -->
    <!-- ======= Portfolio Section ======= -->
    <section id="portfolio" class="portfolio">
      <div class="container">

        <div class="section-title" data-aos="fade-left">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div class="col-lg-4 col-md-6 portfolio-item filter-app" v-for="product in category.products" :key="product.id">
            <div class="portfolio-wrap">
              <img :src="api_url + product.image.url" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>{{ product.name }}</h4>
                <div class="portfolio-links">
                  <a :href="api_url + product.image.url" data-gall="portfolioGallery" class="venobox" title="App 1"><i class="bx bx-plus"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section><!-- End Portfolio Section -->
  </div>
</template>

<style scoped>
#hero {
  height: 40vh;
}
</style>

<script>
import productsQuery from '~/apollo/queries/product/product-category.gql'
export default {
  data () {
    return {
      category: [],
      api_url: process.env.strapiBaseUri
    }
  },
  apollo: {
    category: {
      prefetch: true,
      query: productsQuery,
      variables () {
        return { id: parseInt(this.$route.params.id)}
      }
    }
  }
}
</script>
