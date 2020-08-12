<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1 style="margin-top: 20px;">
                    Hi, I'm Morgan Haworth. 
                </h1>
                <a href="#" target="_blank">
                    <router-link to="/resume" class="btn" exact href="#">View Resume</router-link>
                </a>
                <a href="Resume.docx" download class="btn">Download .docx Resume</a>
                <div class="items intro m-20">
                    I'm a senior at the University of Nebraska of Omaha studying computer science.
                    I have a lot of frontend experience through teaching, industry, and personal
                    experience. I want to continue exploring software engineering opportunities.
                </div>
                <a class="porto-button btn btn-pg" @click="scrollMeTo('Education')">Education</a>
                <a class="porto-button btn btn-pg" @click="scrollMeTo('Work-Experience')">Work Experience</a>
                <a class="porto-button btn btn-pg" @click="scrollMeTo('Projects')">Projects</a>
                <a class="porto-button btn btn-pg" @click="scrollMeTo('Activities-and-Awards')">Activities and Awards</a>
            </div>
        </div>

        <div ref="Education" class="text-left sectionTitle">Education</div>
        <div class="card text-left" v-for="(item, index) in $options.education.education" :key="'A'+index">
            <div class="card-body">
                <h5 class="card-title">{{ item.school }}</h5>
                
                <div v-for="(item, index) in item.degrees" :key="'degree'+index">
                    <h6 class="card-subtitle">{{ item.degree }}<span v-if="item.GPA"> - GPA: {{ item.GPA }}</span></h6>
                    <p class="card-subtitle text-muted">{{ item.startDate }} - {{ item.graduationDate }}</p>
                    <ul class="items">
                        <li v-for="(item, index) in item.responsibilities" :key="'B'+index">
                            {{ item }}
                        </li>
                    </ul>
                </div>

                <div class="accordion" id="accordionExample">
                    <h5 class="mb-0">
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Relevant Courses
                        </button>
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                            Involvement
                        </button>
                    </h5>
                    

                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <ul class="items">
                            <li v-for="(item, index) in $options.courses.courses.slice().reverse()" :key="'C'+index">
                                {{ item.courseName }}
                            </li>
                        </ul>
                    </div>                    

                    <div id="collapseTwo" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div v-for="(item, index) in $options.involvement.clubs" :key="'D'+index">
                            <div class="row card-body">
                                <div :class="{'col-md-7': item.image}"><!--class="col-md-7">-->
                                    <div class="card-block">
                                        <h5 class="card-title">{{ item.clubName }}</h5>
                                        <div v-for="(item, index) in item.positions" :key="'E'+index">
                                            <p class="card-subtitle">{{item.position}}</p>
                                            <p class="card-subtitle text-muted">{{item.timePeriod}}</p>
                                            <ul class="items">
                                                <li v-for="(item, index) in item.responsibility" :key="'C'+index">
                                                    {{ item }}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div :class="{'col-md-5': item.image}">
                                    <div>
                                        <img v-if="item.image" :src="getUrl(item.image)" class="card-img images" :alt="item.alt">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 

            </div>
        </div>
        <div ref="Work-Experience" class="text-left sectionTitle">Work Experience</div>
        <div class="card text-left" v-for="(item, index) in $options.experience.experience.slice().reverse()" :key="'F'+index">
            <div v-if="item.image" class="row card-body">
                <div class="col-md-7">
                    <div class="card-block">
                        <h5 class="card-title">{{ item.title }}</h5>
                        <h6 class="card-subtitle">{{ item.company }}</h6>
                        <p class="card-subtitle text-muted">{{ item.startDate }} - 
                            {{ item.endDate }} in {{ item.location }}</p>
                        <ul class="items">
                            <li v-for="(item, index) in item.responsibilities" :key="'G'+index">
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-5">
                    <div>
                        <img v-if="item.image" :src="getUrl(item.image)" class="card-img images" :alt="item.alt">
                    </div>
                </div>
            </div>

            <div v-if="!item.image" class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <h6 class="card-subtitle">{{ item.company }}</h6>
                <p class="card-subtitle text-muted">{{ item.startDate }} - 
                            {{ item.endDate }} in {{ item.location }}</p>
                <ul class="items">
                    <li v-for="(item, index) in item.responsibilities" :key="'H'+index">
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>

        <div ref="Projects" class="text-left sectionTitle">Projects</div>
        <div class="card text-left" v-for="(item, index) in $options.projects.projects" :key="'I'+index">
            <div class="row card-body">
                <div class="col-md-7">
                    <div class="card-block">
                        <h5 class="card-title">{{ item.title }}</h5>
                        <ul class="items">
                            {{item.description}}
                        </ul>
                        <div style="display: flex; flex-wrap: wrap;">
                            <h6 class="card-subtitle text-muted col-xs-6 my-auto">Technologies:</h6>
                            <button v-for="(item, index) in item.technologies" 
                                class="btn btn-tech col-xs-6" :key="'Gg'+index">{{ item }}</button>
                        </div>
                        <div v-if="item.buttons" class="text-center">
                            <a v-for="(item, index) in item.buttons" :key="'Ll'+index"
                                :href="item.src" target="_blank" class="btn">{{ item.label }}</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <img v-if="item.image" :src="getUrl(item.image)" class="card-img images" :alt="item.alt">
                </div>
            </div>
        </div>

        <div ref="Activities-and-Awards" class="text-left sectionTitle">Activities and Awards</div>
        <div class="card text-left" v-for="(item, index) in $options.activities.activities" :key="'J'+index">

            <div v-if="!item.image" class="card-body">
                <h5 class="card-title">{{ item.activity }}</h5>
                <h6 class="card-subtitle">
                    <div>{{ item.project }}<span v-if="item.outcome"> - {{ item.outcome }}</span></div>
                </h6>
                <p class="card-subtitle text-muted">{{ item.date }}</p>
                <ul class="items">
                    <li v-for="(item, index) in item.description" :key="'K'+index">
                        {{ item }}
                    </li>
                </ul>
                <div v-if="item.buttons">
                    <a v-for="(item, index) in item.buttons" :key="'L'+index"
                        :href="item.src" target="_blank" class="btn">{{ item.label }}</a>
                </div>
            </div>

            <div v-if="item.image" class="row card-body">
                <div class="col-md-5">
                    <div class="card-block">
                        <h5 class="card-title">{{ item.activity }}</h5>
                        <h6 class="card-subtitle">
                            <div>{{ item.project }}<span v-if="item.outcome"> - {{ item.outcome }}</span></div>
                        </h6>
                        <p class="card-subtitle text-muted">{{ item.date }}</p>
                        <ul class="items">
                            <li v-for="(item, index) in item.description" :key="'M'+index">
                                {{ item }}
                            </li>
                        </ul>
                        <div v-if="item.buttons" class="text-center">
                            <a v-for="(item, index) in item.buttons" :key="'N'+index" target="_blank" 
                                :href="item.src" class="btn">{{ item.label }}</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <div>
                        <img v-if="item.image" :src="getUrl(item.image)" class="card-img images" :alt="item.alt">
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.btn {
    color: white;
    background-color: rgb(72, 190, 181);
    border: none;
    font-family: Raleway;
    margin: 0 10px 10px 10px;
}

.btn-pg {
    background-color: #EF6573;
}

.btn-tech {
    padding: 2px 6px;
    font-size: 16px;
    margin: 6px;
}

.intro {
    margin: 30px 30px 0px;
}

.card-title {
    font-size: 30px;
    margin-bottom: 12px;
    font-family: Raleway, Montserrat, sans-serif;
    font-weight: bold;
}

.card-subtitle {
    font-size: 24px;
    margin-top: 0px;
    font-family: Montserrat, sans-serif;
}

.text-muted {
    font-size: 20px;
}

.sectionTitle {
    font-family: Raleway, Montserrat, sans-serif;
    font-weight: bold;
    color: #EF6573;
    text-shadow: 1px 1px rgba(0,0,0,0.3);
    font-size: 36px;
    margin-top: 20px;
}

.items {
    font-family: Roboto;
    font-weight: lighter;
    margin-bottom: 16px;
}

.card {
    border: none;
}
</style>

<script>
import activities from '../json/activities.json'
import experience from '../json/experience.json'
import education from '../json/education.json'
import courses from '../json/courses.json'
import involvement from '../json/involvement.json'
import projects from '../json/projects.json'

export default {
    methods: {
        scrollMeTo(refName) {
        var element = this.$refs[refName];
        var top = element.offsetTop - 54;

        window.scrollTo(0, top);
    },
        getUrl: function(file) {
            return require('../assets/' + file).default
        }
    },
    name: 'about',
    props: {
    },
    activities: activities, 
    experience: experience,
    education: education,
    projects: projects,
    courses: courses,
    involvement: involvement
    /*data: function() { //if json were dynamic
        return {
            activities,
            experience
        } 
    }*/
}
</script>