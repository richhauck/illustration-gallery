<template>
  <div class="projects">
    <h1>Projects Page</h1>
    Status: {{status}}
    <h2 v-if="status==='loaded'">Loaded</h2>
    <h2 v-else-if="status==='error'">Error</h2>
    <h2 v-else>Loading</h2>

    <div v-if="status==='loaded'">
      <div style="display:flex;">

        <div>
          <a
            v-for="(project) in projects"
            :key="project.id"
            :href="'projects/' + project.hash"
          >
          <img :src="project.thumbnail" :alt="project.title">
          <h3>{{project.title}}</h3>
          </a>
        </div>

          <div>
          <a
            v-for="(project) in projects"
            v-if="project.category.includes('art')"
            :key="project.id"
            :href="'projects/' + project.hash"
          >
          <img :src="project.thumbnail" :alt="project.title">
          <h3>{{project.title}}</h3>
          </a>
        </div>

      </div>
    </div>

  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex';
  export default {
    computed: mapState({
      status: state => state.projects.status,
      projects: state => state.projects.projectList
    }),
    methods:{},
    created(){
      this.$store.dispatch('projects/requestProjects');
    }
  }
</script>

