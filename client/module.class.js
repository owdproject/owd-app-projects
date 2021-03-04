import {ModuleApp} from "@owd-client/core";
import projectsStore from './store/index'

export default class ProjectsModule extends ModuleApp {
  constructor(context) {
    super(context)
  }

  loadStore() {
    return projectsStore
  }

  loadCommands({store}) {
    return {
      'projects': function () {
        store.dispatch('core/window/windowOpen', 'WindowProjects');
      }
    }
  }
}