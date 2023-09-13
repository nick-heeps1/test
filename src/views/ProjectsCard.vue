<template>
<div class="main-container">
    <div class="Project-card" v-for="(items, index) in projectData.ProjectsArray" v-bind:key="items">
       <h2>{{ projectData.ProjectsArray[index].Title }}</h2>
       <img :src="projectData.ProjectsArray[index].Image " alt="">
       <p>{{ projectData.ProjectsArray[index].About }}</p>
    </div>
</div>



</template>

<script>
import jsonData from "/projects.json"
export default {
    data() {
        return {
            projectData: jsonData
        }
    },
}
</script>

<style>
.Project-card img{
    height: 10rempx;

}
</style>