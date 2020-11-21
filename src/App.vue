<template>
  <div id="app">
    <router-view></router-view>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from "./components/AppFooter";

export default {
  components: {
    AppFooter
  }  
}
</script>