import projectsAPI from '../../api/projectsAPI';

const state = {
    status: 'pending',
    projectList: []
}
const getters = {
    status: state => state.status,
    getSingleProject: (state) => (hash) => {
        console.log('getSingleProject');
        let projectsObj = state.projectList.filter(project => project.hash === hash)
        return projectsObj[0];
    },
    hasProject: (state) => (hash) => {
        let len = state.projectList.filter(project => project.hash === hash).length;
        return len;
    }
}
const actions = {
    requestProjects({commit}) {
        console.log('status1:', state.status);
        if(state.status !== 'loaded') {
            projectsAPI.getAllProjects(Projects => {
                commit('setProjects', Projects);
                commit('updateStatus', 'loaded');
            });
            console.log('status2:', state.status);
        }
    }
}
const mutations = {
    updateStatus(state, status) {
        console.log('UPDATE')
        state.status = status;
    },
    setProjects(state, Projects) {
        state.projectList = Projects;
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}