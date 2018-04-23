import axios from "axios";

export default {
    getProject: (title) => {
        return axios.get("/api/project/" + title)
    },
    createProject: (project) => {
      return axios.post("/api/project/", project)
    }
};
