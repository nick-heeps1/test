<template>
  <nav class="sticky-nav">
    <router-link to="/" custom v-slot="{ navigate }">
      <button class="nav-button" @click="navigate" role="link">Home</button> 
    </router-link>
    |
    <router-link to="/ProjectsCard" custom v-slot="{ navigate }">
      <button class="nav-button" @click="navigate" role="link">Projects</button> 
    </router-link>
  </nav>
  <router-view/>
</template>

<style src="./views/styles.css">
</style>
