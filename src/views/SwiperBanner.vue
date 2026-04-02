<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/free-mode';
  import 'swiper/css/navigation';


  // import required modules
  import { Navigation, Autoplay,FreeMode } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Navigation,FreeMode],
      };
    },
  };
</script>

<template>
  <div class="banner-wrapper">
    <div class="slide_text">
      <h2>A daily system, precisely applied</h2>
      <p>
        저속 노화를 형성하게 하는 몸의 기본적인 생명 활동을 건강하게 돕고<br>
        오래도록 이어지는 건강의 기초를 채워주는 올리브를 연구합니다.
      </p>
    </div>
    <swiper 
      ref="{swiperRef}"
      :slidesPerView="4"
      :centeredSlides="false"
      :spaceBetween="20"
      :freeMode="true"
      :pagination="{
        type: 'fraction',
      }"
      :navigation="true"
      :modules="modules"
      :loop="true"
      class="mySwiper"
    >
      <swiper-slide>
        <img src="../assets/image/slideban_1.png" alt="ban2-1">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/image/slideban_2.png" alt="ban2-2">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/image/slideban_3.png" alt="ban2-3">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/image/slideban_4.png" alt="ban2-4">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/image/slideban_1.png" alt="ban2-1">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/image/slideban_2.png" alt="ban2-2">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/image/slideban_3.png" alt="ban2-3">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/image/slideban_4.png" alt="ban2-4">
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.slide_text{}
.slide_text h2{
  font-size: 38px;
  font-weight: 500;
  letter-spacing: 0.25px;
  margin:50px 0px 30px;
}

.slide_text p{
  font-size: 18px;
  letter-spacing: 0.5px;
  line-height: 1.2;
  padding-bottom: 50px;
}

.swiper{margin-bottom: 50px;}
.swiper-slide img {
  width: 100%;
}
</style>