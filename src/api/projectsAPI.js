import axios from 'axios';

export default{
    async getAllProjects(targetCallBack){
        try {
            const _projects = (await axios.get('http://localhost:8080/db.json')).data.projects;
            targetCallBack(_projects);
        } catch(error){
            console.log('error:', error);
        }
    }
}