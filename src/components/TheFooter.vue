<template>
  <footer>
    <a target="_blank" v-for="(media, index) in socialLinks" :key="index" class="socialLink" :href="media.link">
        <img :src="media.icon" :alt="media.label" :title="media.label" />
    </a>
  </footer>
</template>

<script>
import { api } from '@/services/api';

export default {
  name: "TheFooter",
  data() {
    return {
        socialLinks: []
    }
  },
  mounted() {
    api.get('/social-links.json')
    .then(res => {
        this.socialLinks = res.data
        console.log(this.socialLinks[0])
    })
  }
};
</script>

<style scoped>
footer {
  width: 100%;
  height: 60px;
  background: var(--color-background-nav);
  display: flex;
  justify-content: center;
  align-items: center;
}
.socialLink{
    border: 2px solid var(--color-text-light);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin: 0 5px;
}
.socialLink img {
    width: 20px;
}
</style>
