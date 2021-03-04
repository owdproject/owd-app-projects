<template>
  <Window :window="window">

    <Folder>
      <template v-for="(project, key) in projects">
        <ProjectItem v-if="!project.hidden" :key="key" :project="project" />
      </template>
    </Folder>

  </Window>
</template>

<script>
  import Window from "@owd-client/core/src/components/window/Window";
  import Folder from '@owd-client/core/src/components/folder/Folder.vue'
  import ProjectItem from "../components/project/ProjectItem";

  import {mapGetters} from "vuex";

  export default {
    components: {
      ProjectItem,
      Window,
      Folder
    },
    props: {
      window: Object
    },
    computed: {
      ...mapGetters({
        projects: 'projects/list'
      })
    }
  }
</script>
