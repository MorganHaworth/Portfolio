<template>
    <div class="container">

        <div class="card">
            <div class="card-body">
                <h3>
                    Hi, I'm Morgan Haworth. I'm a junior at the University of Nebraska of Omaha. I am looking for 
                    software engineering internships.
                </h3>
                <a href="#" class="btn">Resume</a>
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
            </div>
        </div>
        <div class="text-left sectionTitle">Work Experience</div>
        <div class="card text-left" v-for="(item, index) in $options.experience.experience.slice().reverse()" :key="'C'+index">
                    
            <div v-if="item.image" class="row card-body">
                <div class="col-md-6">
                    <div class="card-block">
                        <h5 class="card-title">{{ item.title }}</h5>
                        <h6 class="card-subtitle">{{ item.company }}</h6>
                        <p class="card-subtitle text-muted">{{ item.startDate }} - {{ item.endDate }}</p>
                        <ul class="items">
                            <li v-for="(item, index) in item.responsibilities" :key="'D'+index">
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6">
                    <div>
                        <img v-if="item.image" :src="getUrl(item.image)" class="card-img images" :alt="item.alt">
                    </div>
                </div>
            </div>

            <div v-if="!item.image" class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <h6 class="card-subtitle">{{ item.company }}</h6>
                <p class="card-subtitle text-muted">{{ item.startDate }} - {{ item.endDate }}</p>
                <ul class="items">
                    <li v-for="(item, index) in item.responsibilities" :key="'D'+index">
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>

        <div class="text-left sectionTitle">Activities and Awards</div>
        <div class="card text-left" v-for="(item, index) in $options.activities.activities" :key="'E'+index">

            <div v-if="!item.image" class="card-body">
                <h5 class="card-title">{{ item.activity }}</h5>
                <h6 class="card-subtitle">
                    <div>{{ item.project }}<span v-if="item.outcome"> - {{ item.outcome }}</span></div>
                </h6>
                <p class="card-subtitle text-muted">{{ item.date }}</p>
                <ul class="items">
                    <li v-for="(item, index) in item.description" :key="'F'+index">
                        {{ item }}
                    </li>
                </ul>
                <div v-if="item.buttons">
                    <a v-for="(item, index) in item.buttons" :key="'G'+index"
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
                            <li v-for="(item, index) in item.description" :key="'F'+index">
                                {{ item }}
                            </li>
                        </ul>
                        <div v-if="item.buttons" class="text-center">
                            <a v-for="(item, index) in item.buttons" :key="'G'+index"
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
    background-color: #80DDD6;
    border: none;
    font-family: Raleway;
    margin-bottom: 10px;
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
}

.card {
    border: none;
}
</style>

<script>
import activities from '../json/activities.json'
import experience from '../json/experience.json'
import education from '../json/education.json'

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
    education: education
    /*data: function() { //if json were dynamic
        return {
            activities,
            experience
        } 
    }*/
}
</script>