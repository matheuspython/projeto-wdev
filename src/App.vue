<template>
  <TheHeader />
  <router-view path="$router.key"> </router-view>
  <TheFooter />
</template>

<script>
import "./styles/global.css";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
