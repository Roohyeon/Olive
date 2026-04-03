<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/free-mode';
  import 'swiper/css/navigation';


  // import required modules
  import { Navigation, FreeMode } from 'swiper/modules';

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
        저속 노화를 형성하게 하는 몸의 기본적인 생명 활동을 건강하게 돕고 <br class="mo-br">
        오래도록 이어지는 건강의 기초를 채워주는 올리브를 연구합니다.
      </p>
    </div>

    <div class="custom-nav">
      <div class="custom-prev">
        <span class="material-icons">west</span>
        <p>Prev</p>
      </div>
      <div class="custom-next">
        <p>Next</p>
        <span class="material-icons">east</span>
      </div>
    </div>
    <swiper 
      ref="{swiperRef}"
      :slidesPerView="4"
      :spaceBetween="20"
      :breakpoints="{
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        1024: {
          slidesPerView: 4
        }
      }"
      :centeredSlides="false"
      :pagination="{
        type: 'fraction',
      }"
      :navigation="{
        nextEl: '.custom-next',
        prevEl: '.custom-prev'
      }"
      :modules="modules"
      :loop="true"
      class="mySwiper"
    >
      <swiper-slide>
        <div class="ban-text">
          <div class="banTitle">
            <h2>SYSTEMIC</h2>
          </div>
          <div class="banSub-wrap">
            <h2 class="banSub-title">Sustained energy</h2>
            <p class="banSub-content">
              세포가 에너지를 효율적으로  생성할 수 있도록 돕고,
              신체의 건강한 신진대사를 돕습니다.
            </p>
          </div>
        </div>
        <img src="../assets/image/slideban_1.png" alt="ban2-1">
      </swiper-slide>
      <swiper-slide>
        <div class="ban-text">
          <div class="banTitle">
            <h2>BIOAVAILABLE</h2>
          </div>
          <div class="banSub-wrap">
            <h2 class="banSub-title">Stress regulation</h2>
            <p class="banSub-content">
              신경계의 균형을 유지하는데 도움을 주며,
              일상 속 스트레스에 보다 안정적으로 대응할 수 있게 합니다
            </p>
          </div>
        </div>
        <img src="../assets/image/slideban_2.png" alt="ban2-2">
      </swiper-slide>
      <swiper-slide>
        <div class="ban-text">
          <div class="banTitle">
            <h2>EVIDENCE-LED</h2>
          </div>
          <div class="banSub-wrap">
            <h2 class="banSub-title">Digestive integrity</h2>
            <p class="banSub-content">
              장 건강과 소화 기능을 돕고, 영양소가 효과적으로
              흡수 될 수 있는 건강한 소화 환경을 유지하게 합니다.
            </p>
          </div>
        </div>
        <img src="../assets/image/slideban_3.png" alt="ban2-3">
      </swiper-slide>
      <swiper-slide>
        <div class="ban-text">
          <div class="banTitle">
            <h2>SUSTAINABLE</h2>
          </div>
          <div class="banSub-wrap">
            <h2 class="banSub-title">Immune resilience</h2>
            <p class="banSub-content">
              건강한 면역 기능을 유지할 수 있도록 설계되었습니다
            </p>
          </div>
        </div>
        <img src="../assets/image/slideban_4.png" alt="ban2-4">
      </swiper-slide>
      <swiper-slide>
        <div class="ban-text">
          <div class="banTitle">
            <h2>SYSTEMIC</h2>
          </div>
          <div class="banSub-wrap">
            <h2 class="banSub-title">Sustained energy</h2>
            <p class="banSub-content">
              세포가 에너지를 효율적으로  생성할 수 있도록 돕고,
              신체의 건강한 신진대사를 돕습니다.
            </p>
          </div>
        </div>
        <img src="../assets/image/slideban_1.png" alt="ban2-1">
      </swiper-slide>
      <swiper-slide>
        <div class="ban-text">
          <div class="banTitle">
            <h2>BIOAVAILABLE</h2>
          </div>
          <div class="banSub-wrap">
            <h2 class="banSub-title">Stress regulation</h2>
            <p class="banSub-content">
              신경계의 균형을 유지하는데 도움을 주며,
              일상 속 스트레스에 보다 안정적으로 대응할 수 있게 합니다
            </p>
          </div>
        </div>
        <img src="../assets/image/slideban_2.png" alt="ban2-2">
      </swiper-slide>
      <swiper-slide>
        <div class="ban-text">
          <div class="banTitle">
            <h2>EVIDENCE-LED</h2>
          </div>
          <div class="banSub-wrap">
            <h2 class="banSub-title">Digestive integrity</h2>
            <p class="banSub-content">
              장 건강과 소화 기능을 돕고, 영양소가 효과적으로
              흡수 될 수 있는 건강한 소화 환경을 유지하게 합니다.
            </p>
          </div>
        </div>
        <img src="../assets/image/slideban_3.png" alt="ban2-3">
      </swiper-slide>
      <swiper-slide>
        <div class="ban-text">
          <div class="banTitle">
            <h2>SUSTAINABLE</h2>
          </div>
          <div class="banSub-wrap">
            <h2 class="banSub-title">Immune resilience</h2>
            <p class="banSub-content">
              건강한 면역 기능을 유지할 수 있도록 설계되었습니다
            </p>
          </div>
        </div>
        <img src="../assets/image/slideban_4.png" alt="ban2-4">
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.banner-wrapper{position:relative;}

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


.custom-nav{
  position: absolute;
  top:80px;
  right:0;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
}
.custom-prev,.custom-next{
  display: flex;
  gap: 10px;
  align-items: center;
}
.custom-prev span,.custom-next span{
  font-size: 20px;
  font-weight: 500;
  color:#adadad;
}
.custom-prev p,.custom-next p{
  font-size: 14px;
  font-weight: 500;
  color:#adadad;
}

.custom-next:hover,
.custom-prev:hover {
  transform: scale(1.1);
  cursor:pointer;
}
.custom-prev:hover span,.custom-next:hover span,
.custom-prev:hover p,.custom-next:hover p{color:#333;}

.ban-text{
  position: absolute;
  color:#fff;
}
.banTitle{
  margin-top: 29px;
  margin-left: 22px;
  width:100%;
  max-width:100px;
  padding:5px;
  font-size: 14px;
  text-align: center;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(15px);

  border-radius:5px;
  border:1px solid rgba(255,255,255,0.2);

  box-shadow:0 10px 30px rgba(0,0,0,0.25);
  overflow: hidden;
}

.banSub-wrap{
  margin-top: 208px;
  padding: 20px;
  height: 88px;
  backdrop-filter: blur(3px);
  border-radius:20px;
}
.banSub-title{
  font-size:20px;
}
.banSub-content{
  margin-top:15px;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 1.2px;
  line-height: 1.3;
}

@media screen and (max-width: 768px){
.banner-wrapper{padding: 0px 20px;}
.slide_text p {
  font-size: 14px;
  line-height: 1.5;
  padding-bottom: 30px;
}
.custom-nav{display: none;}
.banSub-wrap{
  margin-top:254px;
}
}
</style>