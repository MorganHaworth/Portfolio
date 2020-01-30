<template>
    <div class="container">
        <div class="text-left sectionTitle">Education</div>
        <div class="card text-left" v-for="(item, index) in $options.education.education" :key="'A'+index">
            <div class="card-body">
                <h5 class="card-title">{{ item.school }}</h5>
                <h6 class="card-subtitle">{{ item.degree }} - GPA: {{ item.GPA }}</h6>
                <p class="card-subtitle text-muted">{{ item.startDate }} - {{ item.graduationDate }}</p>
                <ul>
                    <li v-for="(item, index) in item.responsibilities" :key="'B'+index">
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>
        <div class="text-left sectionTitle">Work Experience</div>
        <div class="card text-left" v-for="(item, index) in $options.experience.experience.slice().reverse()" :key="'C'+index">
            <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <h6 class="card-subtitle">{{ item.company }}</h6>
                <p class="card-subtitle text-muted">{{ item.startDate }} - {{ item.endDate }}</p>
                <ul>
                    <li v-for="(item, index) in item.responsibilities" :key="'D'+index">
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>

        <div class="text-left sectionTitle">Activities and Awards</div>
        <div class="card text-left" v-for="(item, index) in $options.activities.activities" :key="'E'+index">
            <div class="card-body">
                <h5 class="card-title">{{ item.activity }}</h5>
                <h6 class="card-subtitle">
                    <div>{{ item.project }}<span v-if="item.outcome"> - {{ item.outcome }}</span></div>
                </h6>
                <p class="card-subtitle text-muted">{{ item.date }}</p>
                <ul>
                    <li v-for="(item, index) in item.description" :key="'F'+index">
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-title {
    font-size: 27px;
    margin-bottom: 12px;
}

.card-subtitle {
    margin-top: 0px;
}

.sectionTitle {
    font-family: courier, monospace;
    font-weight: bold;
    color: #FF6978;
    text-shadow: 1px 1px rgba(0,0,0,0.3);
    font-size: 36px;
    margin-top: 30px;
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