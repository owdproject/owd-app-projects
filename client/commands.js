export default ({ store }) => {
  return {
    'projects': function () {
      store.dispatch('core/windows/windowOpen', 'WindowProjects');
    },
  }
}
