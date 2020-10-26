<template>
  <WindowIframe :data="data" />
</template>

<script>
  import WindowIframe from "@owd-client/core/src/components/window/iframe/WindowIframe";
  export default {
    name: "WindowProjectSnake",
    components: {WindowIframe},
    props: {
      data: Object
    }
  }
</script>
