<script>
  export default {
    data() {
      return {
        sidebarOpen: false,

        menulists: [
          {menutext: "Shop", link: "/shop"},
          {menutext: "About", link: "/about"},
          {menutext: "Scince", link: "/scince"},
          {menutext: "Blog", link: "/blog"},
          {menutext: "Content", link: "/content"},
          
        ],
        systemMenu: [
          {systemtext: "Account", link: "/account"},
          {systemtext: "Cart", link: "/cart"},
        ]
      }
    },
    computed:{
      accountMenu(){
        return this.systemMenu.find(menu => menu.systemtext === "Account")
      },
      cartMenu(){
        return this.systemMenu.find(menu => menu.systemtext === "Cart")
      },
    },
    methods:{
      goToPage(target){
        if(this.$router.currentRoute.path !== target){
          this.$router.push(target);
        }
      },
      toggleSidebar(){
        this.sidebarOpen = !this.sidebarOpen
      },
      closeSidebar(){
        this.sidebarOpen = false;
      }
    }
  }
</script>
<template>
  <header>
    <div class="container">
      <div class="topmenu">
      <div class="contentbox">
        <div class="logo">
          <button>
            <img src="../assets/image/logo.svg" alt="olive">
          </button>
        </div>
        <nav>
          <ul>
              <li v-for="(item,index) in menulists" 
                :key="index"
                v-on:click="goToPage(item.link)"
              >
                <button>{{ item.menutext }}</button>
              </li>
            </ul>
        </nav>
      </div>
      </div>
      <div class="system">
        <div class="contentbox">
          <button class="hamburger" @click="toggleSidebar">
            <span class="material-icons">menu</span>
          </button>

          <div class="login">
            <button @click="goToPage(accountMenu.link)">
              {{ accountMenu.systemtext }}
            </button>
          </div>
          <div class="Cart">
            <button @click="goToPage(cartMenu.link)">
              {{ cartMenu.systemtext }}
            </button>
          </div>
        </div>

        
      </div>
    </div>

    <div class="overlay" v-if="sidebarOpen" @click="closeSidebar">
      <div class="sidebar"
        :class="{open: sidebarOpen}">
        
        <div class="mebmership">
          <button @click="goToPage(accountMenu.link)">{{accountMenu.systemtext}}</button>
          <button @click="goToPage(cartMenu.link)">{{cartMenu.systemtext}}</button>
        </div>

        <ul>
          <li v-for="(item,index) in menulists" :key="index">
            <button @click="goToPage(item.link)">{{ item.menutext }}</button>
          </li>
        </ul>
      </div>
    </div>

    
  </header>
</template>

<style scoped>
button{
  border:none;
  background:none;
}

.container{
  width:100%;
  max-width:1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.topmenu, .system{
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(15px);

  border-radius:5px;
  border:1px solid rgba(255,255,255,0.2);

  box-shadow:0 10px 30px rgba(0,0,0,0.25);
}
.contentbox{
  width:100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
.contentbox button{
  padding:10px 20px;
  border:none;
  background:none;
  font-size:14px;
  cursor: pointer;
  color:#fff;
}
.topmenu .contentbox .logo button{
  padding: 5px 70px;
  font-weight: 600;
  cursor: pointer;
}

.topmenu .contentbox .logo button img{
  width:100%;
  max-width: 50px;
}
.contentbox nav ul{
  display: flex;
  align-items: center;
}

.system .contentbox .login{
  padding:9px 20px;
}

.hamburger{display: none;}


/* 테블릿 */
@media screen and (max-width: 1024px){
  
}
@media screen and (max-width: 768px){
  .container{
    justify-content: space-between;
    padding:0;
    background: rgba(255,255,255,0.08);
    backdrop-filter: blur(15px);

    border-radius:5px;
    border:1px solid rgba(255,255,255,0.2);

    box-shadow:0 3px 24px rgba(0,0,0,0.05);
  }
  nav{display: none;}
  .topmenu, .system{
    background:none;
    backdrop-filter: none;
    border-radius:0;
    border:none;
    box-shadow:none;
  }
  .system .contentbox{padding:0;}
  .system .contentbox .login,
  .system .contentbox .Cart {
    display: none;
  }
  .topmenu .contentbox .logo button{
    padding: 0px;
  }

  .hamburger{display: block;}

  /* overlay */ 
  .overlay{ 
    position:fixed; 
    top:0; 
    right:0; 
    width:100%; 
    height:100%; 
    z-index:10; 
  }

  /* sidebar */
  .sidebar{
    position:fixed;
    top:0;
    right:0;
    width:100%;
    max-width: 180px;
    height:100%;
    background: #fff;
    backdrop-filter: blur(15px);
    box-shadow: 16px 1px 30px rgba(0,0,0,0.15);
    transform:translateX(-100%);
    transition:0.3s ease;
    z-index:20;
    /* padding: 10px 30px; */
  }

  .sidebar.open{
    transform:translateX(0);
  }

  .mebmership{
    display: flex;
    align-items: center;
    padding: 25px 19px;
    gap: 10px;
    border-bottom: 1px solid #eee;
  }
  .mebmership button{
    color:#333;
    font-size: 14px;
    font-weight:600;
    text-transform: uppercase;
  }
  .sidebar ul li button{
    width: 100%;
    padding:20px;
    border:none;
    border-bottom: 1px solid #eee;
    background:none;
    font-size:14px;
    cursor: pointer;
    text-align: left;
    letter-spacing: 0.5px;
    color:#333;
    text-transform: uppercase;
  }

}
</style>