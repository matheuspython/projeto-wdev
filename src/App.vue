<template>
  <TheHeader />
  <Home />
  <TheFooter />
</template>

<script>
import './styles/global.css'
import TheHeader from './components/TheHeader.vue'
import Home from './pages/Home.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    Home,
    TheFooter
}
}
</script>

<style>
 
</style>
