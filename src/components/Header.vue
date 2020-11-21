<template>
  <div class="header">
    <div class="header__slot">
      <slot></slot>
    </div>
    <div v-if="this.$route.path !== '/'" class="btn header__back">
      <router-link to="/">Home</router-link>
    </div>
  </div>
</template>