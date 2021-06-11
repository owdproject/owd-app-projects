<template>
  <Window>

    <Folder>
      <template v-for="(project, key) in projects">
        <ProjectItem v-if="!project.hidden" :key="key" :project="project" />
      </template>
    </Folder>

  </Window>
</template>

<script setup>
  import {computed} from "vue";
  import {useStore} from "vuex";
  import Window from "@owd-client/core/src/components/window/app/WindowApp.vue";
  import Folder from '@owd-client/core/src/components/folder/Folder.vue'
  import ProjectItem from "../components/project/ProjectItem.vue";

  const store = useStore()
  const projects = computed(() => store.getters['projects/list'])
</script>
