<template>
  <main>
    <section class="container">
      <h1>Sobre</h1>
      <div class="about" v-html="about"></div>
    </section>
  </main>
</template>

<script>
import { api } from "@/services/api";
export default {
  name: "SobreVue",
  data() {
    return {
      about: "",
    };
  },
  mounted() {
    api
      .get("/about.json")
      .then((res) => {
        this.about = res.data.about;
      })
      .catch((err) => alert("ocorreu o erro ", err));
  },
};
</script>

<style scoped>
main {
  align-items: center;
}
.about {
  margin-bottom: 40px;
  color: var(--color-text-dark);
}
</style>
