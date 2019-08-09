<template>
    <section v-if="status=== 'loaded' && isFound === true">
        <h1>Project</h1>
        <h2>Title: {{title}}</h2>
        <img :src="image" :alt="title">
        <p><span v-html="desc"></span></p>
    </section>
    <section v-else>
        <h2>Project not found</h2>
    </section>
</template>

<script>
import {mapState, mapActions, mapGetters } from 'vuex';
export default {
    data: function() {
        return {
            isFound: false,
            title: "",
            desc: "",
            image: ""
        }
    },
    computed: mapState({
        status: state => state.projects.status,
        projects: state => state.projects.projectList
    }),
    watch:{
        status(newValue, oldValue){
            console.log(`Updating from ${oldValue} to ${newValue}`);
            if(newValue === 'loaded'){
                this.getProject();
            }
        }
    },
    methods:{
        /**
         * Calls module projects to get project as an object
         * @param hash {string} Hash of member's name
        */
        getProject(){
            // Determine if project exists by hash
            console.log(this.$route.params.hash);
            let projectObj = this.$store.getters['projects/getSingleProject'](this.$route.params.hash);
            if(projectObj){
                this.isFound = true;
                this.title = projectObj.title;
                this.desc = projectObj.desc;
                this.image = projectObj.image;
            }
        }
    },
    created(){
        // Ensure project data has loaded when component has been created
        this.$store.dispatch('projects/requestProjects');
    }
}
</script>
