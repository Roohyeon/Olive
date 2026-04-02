<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';

  // import required modules
  import { Navigation, Autoplay } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Navigation, Autoplay],
      };
    },
  };
</script>

<template>
  <swiper 
    :navigation="true" 
    :modules="modules" 
    :loop="true"
    :autoplay="{delay: 5000 }"
    class="mySwiper" 
    >
    <swiper-slide>
      <picture>
        <source srcset="../assets/image/mobile_mainvisual_1.png" media="(max-width: 768px)">
        <img src="../assets/image/mainvisual_1.png" alt="메인 올리브1">
      </picture>
      <div class="main_text">
        <h2>오로지 <br class="mo-br">
          <span>건강을 위해</span></h2>
        <p>수십년에 걸쳐 고심하고 고심해서 연구하는 <br> 저희의 접근 방식을 알아보세요</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <picture>
        <source srcset="../assets/image/mobile_mainvisual_2.png" media="(max-width: 768px)">
        <img src="../assets/image/mainvisual_2.png" alt="메인 올리브2">
      </picture>
      <div class="main_text">
        <h2>자연이 준 <br class="mo-br"> 완벽한 약 <br class="mo-br">
          <span>올리브</span></h2>
        <p>연구원들이 수년간 연구하여<br> 밝혀낸 올리브의 진정한 가치를 만나보세요</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <picture>
        <source srcset="../assets/image/mobile_mainvisual_3.png" media="(max-width: 768px)">
        <img src="../assets/image/mainvisual_3.png" alt="메인 올리브3">
      </picture>
      <div class="main_text">
        <h2>매일 아침 <br class="mo-br">
          <span>기적의 한 스푼</span></h2>
        <p>몸 속 깊이 전해지는 가벼움, <br> 이 한 스푼이 당신의 아침을 달라지게 합니다.</p>
      </div>
    </swiper-slide>
    
  </swiper>
</template>

<style scoped>
.mySwiper {
  width: 100%;
  height: 90vh; /* 또는 500px */
}

.mo-br{display: none;}

@media screen and (max-width: 1024px){
  .swiper-button-prev,
  .swiper-button-next{display: none;}
  .mySwiper {
    height: 100%;
  }
}

@media screen and (max-width: 768px){
  .mySwiper { height:60vh;}
  .mo-br {display: block;}
  .swiper-button-prev,
  .swiper-button-next{display: none;}
}
</style>