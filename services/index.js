import axios from "axios";

const baseUrl = "http://apiforlearning.zendvn.com/api"

export const api = {
    call: () => {
        return axios.create({
            baseURL: baseUrl
        })
    }
}