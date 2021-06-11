<template>
  <FolderFile
    :name="project.name"
    :title="tooltip"
    :icon="project.icon"
    :inactive="project.inactive"
    :url="project.url"
    :target="project.target"
    :fn="onProjectClick"
  />
</template>

<script setup>
  import FolderFile from "@owd-client/core/src/components/folder/FolderFile.vue";
  import {defineProps, computed} from "vue";
  import {useStore} from "vuex";

  const props = defineProps({
    project: Object
  })

  const tooltip = computed(() => {
    let text = props.project.title;

    if (props.project.comingSoon === true) {
      text += '\nComing soon ' + props.project.year
    } else if (props.project.inactive === false) {
      text += '\nSince ' + props.project.year
    } else {
      text += ' (discontinued)\n' + props.project.year;

      if (props.project.end > 0) {
        text += ' - ' + props.project.end
      }
    }

    return text;
  })

  const link = computed(() => props.project.url)

  const store = useStore()

  function onProjectClick(e) {
    if (props.project.window) {
      if (e) {
        e.preventDefault();
      }

      setTimeout(() => store.dispatch('core/window/windowOpen', props.project.window), 100);
    }
  }
</script>
