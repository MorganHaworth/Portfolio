<template>
    <div id="frameContainer">
        <object data="Resume.pdf" type="application/pdf" height="100%" width="100%">
            <iframe src="Resume.pdf" height="100%" width="100%"></iframe>
        </object>
    </div>
</template>

<style scoped>
#frameContainer {
    height: calc(100% - 44px);
    width: 100%;
}
</style>

<script>
export default {
    methods: {
        getResume: function() {
            return './assets/Resume.pdf'
        }
    },
    name: 'resume',
    props: {
    }
}
</script>