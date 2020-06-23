import axios from 'axios';


const getRepositories = async (n = 3) => {

    let trendTopics = localStorage.getItem('trend-topics');

    if (trendTopics)
        return trendTopics.data;

    return axios.get(`https://api.github.com/users/guilhermedomith/repos`)
        .then(res => {
            console.log("Aqui-->")
            console.log(res)
            const repositories = res.data;
            const reposNames = repositories.slice(0, n).map(repos => repos.name);
            localStorage.setItem('trend-topics', { update: null, data: reposNames })
            return reposNames;
        })
}

export default {
    getRepositories
}