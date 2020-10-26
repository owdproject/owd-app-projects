import {Module} from "@owd-client/core";
import projectsStore from './store/index'

export default class ProjectsModule extends Module {
  constructor(context) {
    super(context)
  }

  loadStore() {
    return projectsStore
  }

  loadCommands({store}) {
    return {
      'projects': function () {
        store.dispatch('core/windows/windowOpen', 'WindowProjects');
      }
    }
  }
}