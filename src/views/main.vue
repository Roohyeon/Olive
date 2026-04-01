<script>
export default {
  data() {
    return{
      currentIndex:0, //현재 index
      quotes:[
         { text: "DO NOT LET THE ENEMY KNOW OF MY DEATH", author: "ADMIRAL SUNSIN YI" },
         { text: "EVERYTHING FEELS WELL-CONSIDERED", author: "SHOPHIA L." },
         { text: "WHEN YOU HAVE FAULTS, DO NOT FEAR TO ABANDON THEM", author: "CONFUCIUS" }
      ]
    }
  },
  mounted() {
    setInterval(() => {
      this.currentIndex++
      if(this.currentIndex >= this.quotes.length) {
        this.currentIndex = 0
      }
    }, 2000)
  }
}
</script>

<template>
  <div class="mainvisual">
      <ul>
        <li>
          <img src="../assets/image/mainvisual_1.png" alt="메인 올리브1">
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
        <ul >
          <li v-for="(q,i) in quotes" :key="i" v-show="i === this.currentIndex">{{ q.text }}<span>-{{ q.author }}-</span></li>
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
  justify-content: space-between;
  padding:30px 0;
  border: 1px solid red;
}
.maincontents .banner .reviews {
  display:flex;
  align-items: center;
  gap: 20px;
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
  border:1px solid blue;
  width:100%;
  max-width:950px;
}
.maincontents .banner .quote ul{
  display: flex;
  gap: 50px;
  transition: 0.5s;
}
.maincontents .banner .quote ul li{
  font-size: 14px;
  font-weight: 500;
  min-width: 100%;
}
.maincontents .banner .quote ul li span{
  font-size: 14px;
  font-weight: 500;
  color:#adadad;
}

@media screen and (max-width: 1024px){
  
}
@media screen and (max-width: 768px){}
</style>