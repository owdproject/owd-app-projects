<template>
  <Window :title="data.title" :window="data">

    <Folder>
      <template v-for="(project, key) in projects">
        <ProjectItem v-if="!project.hidden" :key="key" :project="project" />
      </template>
    </Folder>

  </Window>
</template>

<script>
  import {mapGetters} from "vuex";

  import Window from "~/core/components/window/Window";
  import Folder from '~/core/components/folder/Folder.vue'
  import ProjectItem from "../components/project/ProjectItem";

  export default {
    name: "WindowProjects",
    components: {
      ProjectItem,
      Window,
      Folder
    },
    props: {
      data: Object
    },
    computed: {
      ...mapGetters({
        projects: 'projects/list'
      })
    }
  }
</script>
