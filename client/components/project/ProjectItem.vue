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

<script>
  import FolderFile from "@owd-client/core/src/components/folder/FolderFile";

  export default {
    name: "ProjectItem",
    components: {FolderFile},
    props: {
      project: Object,
    },
    computed: {
      tooltip: function () {
        let text = this.project.title;

        if (this.project.comingSoon === true) {
          text += '\nComing soon ' + this.project.year
        } else if (this.project.inactive === false) {
          text += '\nSince ' + this.project.year
        } else {
          text += ' (discontinued)\n' + this.project.year;

          if (this.project.end > 0) {
            text += ' - ' + this.project.end
          }
        }

        return text;
      },
      link: function () {
        return this.project.url;
      }
    },
    methods: {
      onProjectClick(e) {
        if (this.project.window) {
          if (e) {
            e.preventDefault();
          }

          setTimeout(() => this.$store.dispatch('core/window/windowOpen', {
            name: this.project.window,
            index: 0
          }), 100);
        }
      }
    }
  }
</script>
