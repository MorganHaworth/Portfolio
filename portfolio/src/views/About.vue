<template>
    <div class="container">
        Education
        <div class="card text-left" v-for="(item, index) in $options.education.education" :key="index">
            <div class="card-body">
                <h5 class="card-title">{{ item.school }}</h5>
                <h6 class="card-subtitle text-muted">{{ item.degree }} - GPA: {{ item.GPA }}</h6>
                <p class="card-subtitle">{{ item.startDate }} - {{ item.graduationDate }}</p>
                <ul>
                    <li v-for="(item, index) in item.responsibilities" :key="index">
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>
        Work Experience
        <div class="card text-left" v-for="(item, index) in $options.experience.experience.slice().reverse()" :key="index">
            <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <h6 class="card-subtitle text-muted">{{ item.company }}</h6>
                <p class="card-subtitle">{{ item.startDate }} - {{ item.endDate }}</p>
                <ul>
                    <li v-for="(item, index) in item.responsibilities" :key="index">
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>

        Activities and Awards
        <div class="card text-left" v-for="(item, index) in $options.activities.activities" :key="index">
            <div class="card-body">
                <h5 class="card-title">{{ item.activity }}</h5>
                <h6 class="card-subtitle text-muted">
                    <div>{{ item.project }}<span v-if="item.outcome"> - {{ item.outcome }}</span></div>
                </h6>
                <p class="card-subtitle">{{ item.date }}</p>
                <ul>
                    <li v-for="(item, index) in item.description" :key="index">
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import activities from '../json/activities.json'
import experience from '../json/experience.json'
import education from '../json/education.json'

export default {
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