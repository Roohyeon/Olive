<script>
export default {
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
      <ul>
        <li>
          <img src="../assets/image/mainvisual_1.png" alt="메인 올리브1">
          <source srcset="../assets/image/mobile_mainvisual_1.png" media="(max-width: 768px)">
          <div class="main_text">
            <h2>오로지 <span>건강을 위해</span></h2>
            <p>수십년에 걸쳐 고심하고 고심해서 연구하는 <br> 저희의 접근 방식을 알아보세요</p>
          </div>
        </li>
      </ul>
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

    <div class="slider">
      <div class="slide_text">
        <h2>A daily system, precisely applied</h2>
        <p>
          저속 노화를 형성하게 하는 몸의 기본적인 생명 활동을 건강하게 돕고<br>
          오래도록 이어지는 간강의 기초를 채워주는 올리브를 연구합니다.
        </p>
      </div>

      <div class="slide_btn">
        <div class="next">
          <p>NEXT</p>
          <span class="material-icons">navigate_next</span>
        </div>
        <div class="before">
          <p>PREV</p>
          <span class="material-icons">navigate_before</span>
        </div>
      </div>

      <div class="slide_bannner">
        <ul>
          <li v-for="img in slidebanners" :key="img" :src="`@/assets/image/${name}`" alt="배너 이미지"></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style>
.mainvisual{
  position: relative;
  top:-60px;
  z-index: -1;
}
.mainvisual img{
  width:100%;
}
.main_text{
  position:absolute;
  bottom:130px;
  left:32%;
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

.maincontents{
  width:100%;
  max-width:1200px;
  margin: 0 auto;
  position:relative;
  top:-60px;
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
  .main_text{
    bottom: 50px;
    left:29%;
  }

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
}
</style>