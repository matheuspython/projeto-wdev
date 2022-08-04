<template>
  <main>
    <section class="container">
      <h1>Vídeos</h1>
      <section class="videos">
        <div v-for="(video, index) in videos" class="video" :key="index">
          <a target="_blank" :href="video.link">
            <img :src="video.thumb" :alt="video.title" />
            <div class="video-text">{{ video.title }}</div>
          </a>
        </div>
      </section>
    </section>
  </main>
</template>

<script>
import { api } from "@/services/api";
export default {
  name: "VideosVue",
  data() {
    return {
      videos: [],
    };
  },
  mounted() {
    api
      .get("/videos.json")
      .then((res) => {
        this.videos = res.data;
      })
      .catch((err) => alert("ocorreu o erro ", err));
  },
};
</script>

<style scoped>
main {
  align-items: center;
}
.videos {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.video {
  width: 80%;
  margin-bottom: 30px;
}
.video img {
  width: 100%;
}
.video a {
  color: var(--color-text-dark);
  font-weight: 600;
  text-align: center;
}
@media (min-width: 700px) {
  .videos {
    flex-direction: row;
    align-items: flex-start;
    gap: 15px;
    flex-wrap: wrap;
  }
}
.video {
  width: 300px;
}
</style>
