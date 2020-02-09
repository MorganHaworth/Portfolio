<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1 style="margin-top: 20px;">
                    Hi, I'm Morgan Haworth. 
                </h1>
                <div class="items">
                    I'm a junior at the University of Nebraska of Omaha studying computer science. I have a lot of 
                    frontend experience through teaching, industry, and personal experience. I want to explore the backend
                    and am looking software engineering opportunities.
                </div>
                <a href="#" target="_blank">
                    <router-link to="/resume" class="btn" exact href="#">View Resume</router-link>
                </a>
                <a href="Resume.docx" download class="btn">Download .docx Resume</a>
            </div>
        </div>

        <div class="text-left sectionTitle">Education</div>
        <div class="card text-left" v-for="(item, index) in $options.education.education" :key="'A'+index">
            <div class="card-body">
                <h5 class="card-title">{{ item.school }}</h5>
                <h6 class="card-subtitle">{{ item.degree }} - GPA: {{ item.GPA }}</h6>
                <p class="card-subtitle text-muted">{{ item.startDate }} - {{ item.graduationDate }}</p>
                <ul class="items">
                    <li v-for="(item, index) in item.responsibilities" :key="'B'+index">
                        {{ item }}
                    </li>
                </ul>

                <p>
                    I plan on pursuing UNO's 4 + 1 Computer Science Graduate Program.
                </p>

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
        <div class="text-left sectionTitle">Work Experience</div>
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

        <div class="text-left sectionTitle">Activities and Awards</div>
        <div class="card text-left" v-for="(item, index) in $options.activities.activities" :key="'I'+index">

            <div v-if="!item.image" class="card-body">
                <h5 class="card-title">{{ item.activity }}</h5>
                <h6 class="card-subtitle">
                    <div>{{ item.project }}<span v-if="item.outcome"> - {{ item.outcome }}</span></div>
                </h6>
                <p class="card-subtitle text-muted">{{ item.date }}</p>
                <ul class="items">
                    <li v-for="(item, index) in item.description" :key="'J'+index">
                        {{ item }}
                    </li>
                </ul>
                <div v-if="item.buttons">
                    <a v-for="(item, index) in item.buttons" :key="'K'+index"
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
                            <li v-for="(item, index) in item.description" :key="'L'+index">
                                {{ item }}
                            </li>
                        </ul>
                        <div v-if="item.buttons" class="text-center">
                            <a v-for="(item, index) in item.buttons" :key="'M'+index"
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
    margin-top: 30px;
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

export default {
    methods: {
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