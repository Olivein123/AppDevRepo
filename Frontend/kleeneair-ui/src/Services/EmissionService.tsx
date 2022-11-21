import axios from "axios";

const EMISSION_BASE_URL = "http://localhost:8080/site/getAllSites";

class EmissionService {

    getAllSites() {
        return axios.get(EMISSION_BASE_URL);
    }
}

export default new EmissionService()