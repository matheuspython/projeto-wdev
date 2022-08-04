import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Videos from "@/pages/Videos.vue";
import Sobre from "@/pages/Sobre.vue";
import Contatos from "@/pages/Contatos.vue";
const routes = [
  {
    path: "/",
    name: "HomeVue",
    component: Home,
  },
  {
    path: "/videos",
    name: "VideosVue",
    component: Videos,
  },
  {
    path: "/sobre",
    name: "SobreVue",
    component: Sobre,
  },
  {
    path: "/contatos",
    name: "ContatosVue",
    component: Contatos,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
