<template>
  <section class="wrap">
    <Header />
    <section id="container">
      <router-view />
    </section>
    <Footer />
  </section>
</template>

  <script>
  import Footer from '@/components/Footer.vue';
  import Header from '@/components/Header.vue';
  
  export default {
    components: {
      Header,
      Footer,
    }
  }
  </script>