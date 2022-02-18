<template>
    <div id="frameContainer">
        <object data="ResumeHaworth.pdf" type="application/pdf" height="100%" width="100%">
            <iframe src="ResumeHaworth.pdf" height="100%" width="100%"></iframe>
        </object>
    </div>
</template>

<style scoped>
#frameContainer {
    height: calc(100% - 54px);
    width: 100%;
}
</style>

<script>
export default {
    methods: {
        getResume: function() {
            return './assets/ResumeHaworth.pdf'
        }
    },
    name: 'resume',
    props: {
    }
}
</script>