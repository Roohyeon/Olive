<script>
import SwiperViusal from '@/views/SwiperVisual.vue';
import SwiperBanner from './SwiperBanner.vue';

export default {
  components: {
      SwiperViusal,
      SwiperBanner
    },
  data() {
    return{
      currentIndex:0, //현재 index
      quotes:[
         { text: "DO NOT LET THE ENEMY KNOW OF MY DEATH", author: "ADMIRAL SUNSIN YI" },
         { text: "EVERYTHING FEELS WELL-CONSIDERED", author: "SHOPHIA L." },
         { text: "WHEN YOU HAVE FAULTS, DO NOT FEAR TO ABANDON THEM", author: "CONFUCIUS" }
      ],
      slidebanners:['slideban_1.png']
    }
  },
}
</script>

<template>
  <div class="mainvisual">
    <SwiperViusal />
  </div>

  <section class="maincontents">
    <div class="banner">
      <div class="reviews">
        <ul>
          <li v-for="n in 5" :key="n"><span class="material-icons">grade</span></li>
        </ul>
        <p>8950+ TRUSTED REVIEWS</p>
      </div>
      <div class="quote">
        <ul>
          <li v-for="(q,i) in quotes" :key="i">{{ q.text }}<span>-{{ q.author }}-</span></li>
          <li v-for="(q,i) in quotes" :key="i">{{ q.text }}<span>-{{ q.author }}-</span></li>
        </ul>
      </div>
    </div>

    <SwiperBanner/>

    <div class="textbanner-wrapper">
      <p>FEELS CONSIDERED. BUILT TO LAST</p>
      <div class="textbanner">
        <h2>
          A system-level <span class="textban-circle c1"></span> approach to <br class="mo-br">
          supplementation - designed <span class="textban-circle c2"></span> for <br class="mo-br">
          consistency <span class="textban-circle c3"></span>, not intensity.
        </h2>
      </div>
    </div>
  </section>
</template>

<style>
/* 비주얼 */
.mainvisual img{
  width:100%;
}
.main_text{
  position:absolute;
  bottom:130px;
  left:50%;
  transform: translateX(-50%);
  text-align: center;
  color:White;
  font-family: 'SUIT', sans-serif;
}
.main_text h2{
  font-size: 80px;
  letter-spacing: 0.5px;
  padding-bottom: 50px;
}
.main_text h2 span{
  font-weight: 500;
}
.main_text p {
  font-size: 25px;
  text-align: center;
  letter-spacing: 0.8px;
  line-height: 1.4;
}

/* 비주얼 끝*/

.maincontents{
  width:100%;
  max-width:1200px;
  margin: 0 auto;
}

.maincontents .banner{
  display: flex;
  gap:30px;
  justify-content: space-between;
  padding:30px 0;
}
.maincontents .banner .reviews {
  display:flex;
  align-items: center;
  gap: 20px;
  width:100%;
  max-width:282px;
}
.maincontents .banner .reviews ul{
  display:flex;
}
.maincontents .banner .reviews ul li span{
  font-size:18px;
}
.maincontents .banner .reviews p{
  font-size:14px;
  font-weight: 500;
  text-decoration: underline;
  text-decoration-thickness: 1.3px;
}
.maincontents .banner .quote{
  display: flex;
  align-items: center;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(to left, transparent, #000, #000, transparent);
}
.maincontents .banner .quote ul{
  display: flex;
  width: max-content;
  gap: 50px;
  animation: scroll 20s linear infinite;
}
.maincontents .banner .quote ul li{
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
}

.textbanner-wrapper{
  width:100%;
  max-width: 1200px;
  text-align: center;
  margin: 100px auto 50px;
}
.textbanner-wrapper p {
  font-weight: 600;
  padding-bottom: 30px;
}
.textbanner h2{
  font-size: 60px;
  letter-spacing: 1.5px;
  line-height: 1.2;
}

.textbanner .textban-circle{
  display: inline-block;
  vertical-align: middle;
  width:80px;
  height:80px;
  border-radius: 100%;
}

.c1{background: url("../assets/image/textcircle_1.png") no-repeat center;}
.c2{background: url("../assets/image/textcircle_2.png") no-repeat center;}
.c3{background: url("../assets/image/textcircle_3.png") no-repeat center;}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.maincontents .banner .quote ul li span{
  font-size: 14px;
  font-weight: 500;
  color:#adadad;
}

@media screen and (max-width: 1024px){
  .container{max-width: 980px;}

  .main_text h2{
    font-size:60px;
    padding-bottom: 30px;
  }

  .main_text p{font-size:15px;}
  .maincontents{max-width: 984px;}
  .maincontents .banner .reviews{
    width:120%;
  }
}
@media screen and (max-width: 768px){
  .container{max-width:357px;}
  
  .main_text{bottom:50px;}

  .main_text h2{
    font-size: clamp(45px, 10vw, 60px);
    text-align: center;
    font-weight: 400;
    letter-spacing: 2px;
    line-height: 1.2;
    padding-bottom: 25px;
    white-space: pre-wrap;
  }
  .main_text p{
    font-size: 16px;
    white-space: nowrap;
  }

  .maincontents .banner{display: none;}

  .textbanner-wrapper{margin:50px auto;}

  .textbanner-wrapper p{font-size: 12px;}
  .textbanner h2{
    font-size:35px;
    font-weight: 500;
  }
  
  .textbanner .textban-circle{
    width:40px;
    height:40px;
  }

  .c1{background-position: bottom;}
  .c2{background-position: top;}
}
</style>