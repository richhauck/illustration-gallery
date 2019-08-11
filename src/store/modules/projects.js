import projectsAPI from '../../api/projectsAPI';

const state = {
  status: 'pending',
  projectList: [],
};
const getters = {
  status: state => state.status,
  getSingleProject: state => (hash) => {
    const projectsObj = state.projectList.filter(project => project.hash === hash);
    return projectsObj[0];
  },
  hasProject: state => (hash) => {
    const len = state.projectList.filter(project => project.hash === hash).length;
    return len;
  },
};
const actions = {
  requestProjects({commit}) {
    if (state.status !== 'loaded') {
      projectsAPI.getAllProjects((Projects) => {
        commit('setProjects', Projects);
        commit('updateStatus', 'loaded');
      });
    }
  },
};
const mutations = {
  updateStatus(state, status) {
    state.status = status;
  },
  setProjects(state, Projects) {
    state.projectList = Projects;
  },
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}