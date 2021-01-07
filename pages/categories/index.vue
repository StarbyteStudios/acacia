<template>
  <main id="main">

    <section id="hero" style="height: 40vh" class="d-flex align-items-center">
      <div class="container text-center position-relative" data-aos="fade-in" data-aos-delay="200">
        <h1>Product Categories</h1>
      </div>
    </section><!-- End Hero -->

    <!-- ======= Services Section ======= -->
    <section id="services" class="services section-bg">
      <div class="container">

        <div class="row">
          <div class="col-lg-4">
            <div class="section-title" data-aos="fade-right">
              <h2>All Categories</h2>
              <p>Magnam dolores commodi suscipit nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="row">
              <div class="col-md-6 mt-4" v-for="category in categories" :key="category.id">
                <div class="icon-box" data-aos="zoom-in" data-aos-delay="100">
                  <div class="icon"><i class="bx bx-label"></i></div>
                  <h4><nuxt-link :to="{ name: 'categories-id', params: { id: category.id}}" tag="a">{{ category.name }}</nuxt-link></h4>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section><!-- End Services Section -->

  </main><!-- End #main -->
</template>

<script>
import categoriesQuery from '~/apollo/queries/category/categories.gql'
export default {
  data () {
    return {
      categories: []
    }
  },
  apollo: {
    categories: {
      prefetch: true,
      query: categoriesQuery,
      variables () {
        return { len: 0}
      }
    }
  }
}
</script>
