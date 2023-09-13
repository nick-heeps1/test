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
                        <h2>GitHub</h2>
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
                        <h2>YouTube</h2>

                      </a>
                    </div>
            </div>
        </div>
        <div class="container-two">
            <div class="about-me">
                <h2>About Me</h2>
                <p>Hey my name is Nick, my Deakin student number is s223167228 and my email address is s223167228@deakin.edu.au. I am a new student here at Deakin and I’m currently studying for a bachelor’s degree in information technology. 
                    I live at Deakin residence and have 3 days a week of contact. This is my second year at university as I had originally started off at RMIT but had decided to transfer as Deakin was more appealing to me. 
                    Before moving to Melbourne, I used to live on a farm in a small town near the border called Barnawartha. 
                    <br>
                    I have a few different hobbies, but my main ones are coding, building PC’s and going to gym. Since first beginning university, I have created a few projects including writing a choose your own adventure game in python, 
                    creating a basic bartending simulator in unreal engine, writing some basic websites, designing prototypes for apps and coding basic databases. 
                    This year I have been mainly working with HTML where I have created webpages that display how people can interact in different ways and also displaying the many different ways that java can be utilized. 
                    I have also been working with SQL and creating databases which then involves adding, altering, and removing sets of data. 
                </p>
            </div>
            <div class="technology-section">
                <h1>Technologies Studied</h1>
                <div class="logos">
                    <img src="../assets/css-logo.png" alt="Css logo">
                    <img src="../assets/html-logo.png" alt="html logo">
                    <img src="../assets/JavaScript-Logo.png" alt="Javascript logo">
                    <img src="../assets/Python-logo.png" alt="python logo">
                    <img src="../assets/SQL-logo.png" alt="SQL logo">
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
        background-color: #202151;
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
        border-radius: 25px;
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
    }
    
    h2{
        color: rgb(255, 255, 255);
    }

    p{
        color: rgb(255, 255, 255);
    }

    h3{
        color: rgb(255, 255, 255);
    }
</style>