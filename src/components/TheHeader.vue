<template>
  <header>
    <div class="container">
      <nav>
        <router-link to="/"
          ><img
            src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg"
            alt="wdev logo"
            id="logo"
        /></router-link>

        <img
          src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg"
          id="menu-button"
          alt="abrir menu"
          @click="changeStateOfMenu"
        />

        <div
          v-if="menuActive"
          @click="changeStateOfMenu"
          id="menu-overlay"
        ></div>
        <div id="menu-items" :class="{ active: menuActive }">
          <img
            src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg"
            alt="wdev logo"
            id="menu-logo"
            @click="changeStateOfMenu"
          />
          <ul>
            <li>
              <router-link @click="changeStateOfMenu" to="/">Home</router-link>
            </li>
            <li>
              <router-link @click="changeStateOfMenu" to="/videos"
                >Videos</router-link
              >
            </li>
            <li>
              <router-link @click="changeStateOfMenu" to="/sobre"
                >Sobre</router-link
              >
            </li>
            <li>
              <router-link @click="changeStateOfMenu" to="/contatos"
                >Contato</router-link
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      menuActive: false,
    };
  },
  methods: {
    changeStateOfMenu() {
      this.menuActive = !this.menuActive;
    },
  },
};
</script>

<style scoped>
header {
  background-color: var(--color-background-nav);
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
nav {
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
}
#logo {
  width: 130px;
}
#menu-button {
  width: 30px;
}
#menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 40%;
  height: 100vh;
  background-color: #000000;
  opacity: 0.8;
}
#menu-logo {
  width: 110px;
  margin-top: 30px;
  margin-bottom: 10px;
}
#menu-items {
  position: fixed;
  top: 0;
  right: 0;
  background-color: var(--color-background-nav);
  width: 60%;
  height: 100vh;
  display: none;
  flex-direction: column;
  align-items: center;
}
#menu-items.active {
  display: flex;
}
ul {
  list-style-type: none;
  text-align: center;
}
ul li {
  margin: 20px 0;
}
ul li a {
  color: var(--color-text-light);
}
@media (min-width: 700px) {
  #menu-button,
  #menu-logo,
  #menu-overlay {
    display: none;
  }
  #menu-items {
    display: flex;
    position: static;
    height: 60px;
    width: auto;
  }
  ul {
    display: flex;
    height: 60px;
    align-items: center;
  }
  ul li {
    margin: 0;
    margin-left: 10px;
  }
}
</style>
