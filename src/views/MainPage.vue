<template>
    <div class="main-container">
        <div class="container-one">
            <div class="profile">
                <img src="../assets/profile-pic.png" alt="">
                <h3>Nicholas Heeps</h3>
                <p> IT student</p>
            </div>
            <div class="social-links">
                    <div class ="link">
                      <a href="https://github.com/nick-heeps1">
                        <img src="../assets/github.png" alt="">
                        <h2>github</h2>
                      </a>
                    </div>
                    <div class ="link">
                      <a href="https://www.linkedin.com/in/nicholas-heeps-189983236/">
                        <img src="../assets/LinkedIn.png" alt="">
                        <h2>LinkedIn</h2>
                      </a>
                    </div>
                    <div class ="link">
                      <a href="https://www.youtube.com/channel/UCfIYBNfilN8YQbqf8BroyiQ">
                        <img src="../assets/youtube.png" alt="">
                        <h2>youtube</h2>

                      </a>
                    </div>
            </div>
        </div>
        <div class="container-two">
            <div class="about-me">
                <h2>About Me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
            </div>
            <div class="technology-section">
                <h1>technologies studied</h1>
                <div class="logos">
                    <img src="../assets/css-logo.png" alt="Css logo">
                    <img src="../assets/html-logo.png" alt="html logo">
                    <img src="../assets/JavaScript-Logo.png" alt="Javascript logo">
                    <img src="../assets/Python-logo.png" alt="python logo">
                </div>
            </div>
            <div class="button-container">
                 <div>
                    <router-link to="/ProjectsCard" v-slot="{navigate}">
                    <button @click="navigate" role="link" class="projects-button">Projects</button>
                    </router-link> 
                </div>
                <div>
                    <router-link to="/MyResume" v-slot="{navigate}">
                    <button @click="navigate" role="link" class="projects-button">My Resume</button>
                    </router-link> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    img {
        height: 100px;
    }
    .main-container{
        display: flex;
        flex-direction: row;
        background-color: #9d9d9d;
        border-radius: 25px;
    }

    .container-one{
        background-color: #68fae0;
        padding: 2.5%;
        width: 30%;
        border-radius: 25px;
    }

    .profile img{
        height: 5rem;
        border-radius: 50%;
    }


    .link a{
        text-decoration: none;
        color: rgb(100, 100, 100);
        font-size: 10px;
    }

    .link img{
        height: 3rem;
    }
    .container-two{
        background-color: #5a6866;
        margin: 2.5%;
        width: 70%;
    }

    .about-me{
        text-align: left;
        padding: 2.5%;
    }

    .logos img{
        height: 3rem;
    }


    .button-container{
        margin-top: 5%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .projects-button{
        background-color: rgb(5, 230, 255);
        border-radius: 20px;
        padding: 5px;
        margin: 5px;
    }
    .projects-button a{
        text-decoration: none;
        color: rgb(100, 100, 100);

    }
    
</style>